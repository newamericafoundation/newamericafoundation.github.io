// vim: set ts=8 sts=8 sw=8 noet:
/*
 * Copyright (c) 2006-2011 Echo <solutions@aboutecho.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * $Id: curation.js 36134 2011-10-19 07:47:20Z jskit $
 */

(function($) {

// we should not clear the window.$ variable without reason
// if $._$ is undefined it means that no lib on the page except our one is using window.$ variable
// and we do not need to clear it in order to avoid libs\versions conflicts

if (typeof($._$) != "undefined") {
        $.noConflict();
}



if (!window.Echo) window.Echo = {};
if (!Echo.Global) Echo.Global = {};
if (!Echo.Vars) Echo.Vars = {
	"regexps": {
		"matchLabel": /{Label:([^:}]+[^}]*)}/g,
		"matchData": /{Data:(([a-z]+\.)*[a-z]+)}/ig,
		"mobileUA": /mobile|midp-|opera mini|iphone|ipad|blackberry|nokia|samsung|docomo|symbian|windows ce|windows phone|android|up\.browser|ipod|netfront|skyfire|palm|webos|audiovox/i,
		"parseUrl": /^((([^:\/\?#]+):)?\/\/)?([^\/\?#]*)?([^\?#]*)(\?([^#]*))?(#(.*))?/,
		"w3cdtf": /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)Z$/
	}
};

$.extend({
	"addCss": function(cssCode, id) {
		Echo.Vars.css = Echo.Vars.css || {
			"index": 1,
			"processed": {}
		};
		if (id) {
			if (Echo.Vars.css.processed[id]) return;
			Echo.Vars.css.processed[id] = true;
		}
		var curCssCode = "";
		var oldStyle = Echo.Vars.css.anchor;
		if (oldStyle && oldStyle.length) {
			curCssCode = oldStyle.html();
		}
		// IE limit is 4095 rules per style tag
		// so we limit it to 100000 characters
		// (2000 rules x 50 characters per rule)
		if (curCssCode.length + cssCode.length > 100000) {
			Echo.Vars.css.index++;
			oldStyle = null;
			curCssCode = "";
		}
		var newStyle = $('<style id="echo-css-' + Echo.Vars.css.index + '" type="text/css">' + curCssCode + cssCode + '</style>');
		if (oldStyle && oldStyle.length) {
			// use replacing instead of adding css to existing element
			// because IE doesn't allow it
			oldStyle.replaceWith(newStyle);
		} else {
			if (Echo.Vars.css.anchor) {
				Echo.Vars.css.anchor.after(newStyle);
			} else {
				$(document.getElementsByTagName("head")[0] || document.documentElement).prepend(newStyle);
			}
		}
		Echo.Vars.css.anchor = newStyle;
	},
	"foldl": function(acc, object, callback) {
		$.each(object, function(key, item) {
			result = callback(item, acc, key);
			if (result !== undefined) acc = result;
		});
		return acc;
	},
	"intersperse": function(object, separator) {
		return $.foldl([], object, function(item, acc, key) {
			if (acc.length) acc.push(separator);
			acc.push(item);
		});
	},
	"getNestedValue": function(key, data, defaults, callback) {
		if (typeof key == "string") {
			key = key.split(/\./);
		}
		if (!key.length) return data;
		var found = true;
		var iteration = function(_key, _data) {
			if (callback) callback(_data, _key);
			if (typeof _data[_key] == "undefined") {
				found = false;
			} else {
				return _data[_key];
			}
		};
		// avoid foldl usage for plain keys
		var value = key.length == 1
			? iteration(key.pop(), data)
			: $.foldl(data, key, iteration);
		return found ? value : defaults;
	},
	"setNestedValue": function(obj, key, value) {
		var keys = key.split(/\./);
		var field = keys.pop();
		var data = $.getNestedValue(keys, obj, undefined, function(acc, v) {
			if (typeof acc[v] == "undefined") acc[v] = {};
		});
		data[field] = value;
	},
	"htmlize": function(text) {
		if (!text) return '';
		return $('<div>').text(text).html();
	},
	"object2JSON": function(obj) {
		var encodeJSONLiteral = function(string) {
			var replacements = {
				'\b': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"' : '\\"',
				'\\': '\\\\'};
			return string.replace(/[\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff\\]/g,
				function (a) {
					return (replacements.hasOwnProperty(a))
						? replacements[a]
						: '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				}
			);
		}
		var out;
		switch (typeof obj) {
			case "number"  : out = isFinite(obj) ? obj : 'null'; break;
			case "string"  : out = '"' + encodeJSONLiteral(obj) + '"'; break;
			case "boolean" : out = '"' + obj.toString() + '"'; break;
			default :
				if (obj instanceof Array) {
					var container = $.map(obj, function(element) { return $.object2JSON(element); });
					out = '[' + container.join(",") + ']';
				} else if (obj instanceof Object) {
					var source = obj.exportProperties || obj;
					var container = $.foldl([], source, function(value, acc, property) {
						if (source instanceof Array) {
							property = value;
							value = obj[property];
						}
						acc.push('"' + property + '":' + $.object2JSON(value));
					});
					out = '{' + container.join(",") + '}';
				} else {
					out = 'null';
				}
		}
		return out;
	},
	"htmlTextTruncate": function(text, limit, postfix, forceClosingTags) {
		if (!limit || text.length < limit) return text;
		var tags = [], count = 0, finalPos = 0;
		var list = "br hr input img area param base link meta option".split(" ");
		var standalone = $.foldl({}, list, function(value, acc, key) {
			acc[value] = true;
		});
		for (var i = 0; i < text.length; i++) {
			var symbol = text.charAt(i);
			if (symbol == "<") {
				var tail = text.indexOf(">", i);
				if (tail < 0) return text;
				var source = text.substring(i + 1, tail);
				var tag = {"name": "", "closing": false};
				if (source.charAt(0) == "/") {
					tag.closing = true;
					source = source.substring(1);
				}
				tag.name = source.match(/(\w)+/)[0];
				if (tag.closing) {
					var current = tags.pop();
					if (!current || current.name != tag.name) return text;
				} else if (!standalone[tag.name]) {
					tags.push(tag);
				}
				i = tail;
			} else if (symbol == "&" && text.substring(i).match(/^(\S)+;/)) {
				i = text.indexOf(";", i);
			} else {
				if (count == limit) {
					finalPos = i;
					break;
				}
				count++;
			}
		}
		if (finalPos || forceClosingTags) {
			if (finalPos) {
				text = text.substring(0, finalPos) + (postfix || "");
			}
			for (var i = tags.length - 1; i >= 0; i--) {
				text += "</" + tags[i].name + ">";
			}
		}
		return text;
	},
	"mapClass2Object": function(e, ctl) {
		ctl = ctl || {};
		e.find("*").andSelf().each(function(i, el) {
			if (el.className) {
				var arr = el.className.split(/[ ]+/);
				$.each(arr, function(i, c) { ctl[c] = el; });
			}
		});
		return ctl;
	},
	"stripTags": function(text) {
		return $('<div>').html(text).text();
	},
	"parseUrl": function(url) {
		var parts = url.match(Echo.Vars.regexps.parseUrl);
		return parts ? {
			"scheme": parts[3],
			"domain": parts[4],
			"path": parts[5],
			"query": parts[7],
			"fragment": parts[9]
		} : undefined;
	},
	"toDOM": function(template, prefix, renderer) {
		var content = $(template);
		var elements = $.mapClass2Object(content);
		var dom = {
			"set": function(name, element) {
				elements[prefix + name] = element;
			},
			"get": function(name, ignorePrefix) {
				var element = elements[(ignorePrefix ? "" : prefix) + name];
				return element && $(element);
			},
			"remove": function(element) {
				var name;
				if (typeof element == "string") {
					name = prefix + element;
				} else {
					name = element.echo.name;
				}
				$(elements[name]).remove();
				delete elements[name];
			},
			"content": content
		};
		var rendererFunction;
		if (typeof renderer == 'object') {
			rendererFunction = function(name, element, dom) {
				if (!renderer[name]) return;
				return renderer[name](element, dom);
			}
		} else {
			rendererFunction = renderer;
		}
		$.each(elements, function(id, element) {
			var pattern = id.match(prefix + "(.*)");
			var name = pattern ? pattern[1] : undefined;
			if (name && rendererFunction) {
				element = $(element);
				element.echo = element.echo || {};
				element.echo.name = id;
				var node = rendererFunction(name, element, dom);
				if (typeof node != "undefined") element.empty().append(node);
			}
		});
		return dom;
	},
	"loadScriptContent": function(url, callback) {
		Echo.Vars.scriptState = Echo.Vars.scriptState || {};
		if (Echo.Vars.scriptState[url] == "loaded") {
			callback();
			return;
		}
		var id = Echo.Broadcast.subscribe("internal.scriptLoaded",
			function(topic, scriptURL) {
				if (url != scriptURL) return;
				Echo.Broadcast.unsubscribe("internal.scriptLoaded", id);
				callback();
			});
		if (Echo.Vars.scriptState[url] == "loading") return;
		Echo.Vars.scriptState[url] = "loading";
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.charset = "utf-8";
		script.src = url;
		var container = document.getElementsByTagName("head")[0] ||
				document.documentElement;
		container.insertBefore(script, container.firstChild);
		script.onload = script.onreadystatechange = function() {
			var state = script.readyState;
			if (!state || state == "loaded" || state == "complete") {
				Echo.Vars.scriptState[url] = "loaded";
				Echo.Broadcast.publish("internal.scriptLoaded", url);
				script.onload = script.onreadystatechange = null;
			}
		};
	},
	"sendPostRequest": function(url, data, callback){
		var id = "echo-post-" + Math.random();
		var container =
			$("#echo-post-request").length
				? $("#echo-post-request").empty()
				: $('<div id="echo-post-request"/>').css({"height": 0}).prependTo("body");
		// it won't work if the attributes are specified as a hash in the second parameter
		$('<iframe id="' + id + '" name="' + id + '" width="0" height="0" frameborder="0" border="0"></iframe>').appendTo(container);
		var form = $("<form/>", {
			"target" : id,
			"method" : "POST",
			"enctype" : "application/x-www-form-urlencoded",
			"acceptCharset" : "UTF-8",
			"action" : url
		})
			.appendTo(container);
		$.each(data, function(key, value) {
			$("<input/>", {
				"type" : "hidden",
				"name" : key,
				"value" : value
			})
			.appendTo(form);
		});
		form.submit();
		callback();
	},
	"getVisibleColor": function(elem) {
		// calculate visible color of element (transparent is not visible)
		var color;
		do {
			color = elem.css('backgroundColor');
			if (color != '' && color != 'transparent' && !/rgba\(0, 0, 0, 0\)/.test(color) || $.nodeName(elem.get(0), 'body')) {
				break;
			}
		} while (elem = elem.parent());
		return color || 'transparent';
	},
	"timestampFromW3CDTF": function(t) {
		var parts = ['year', 'month', 'day', 'hours', 'minutes', 'seconds'];
		var dt = {};
		var matches = t.match(Echo.Vars.regexps.w3cdtf);
		$.each(parts, function(i, p) {
			dt[p] = matches[i + 1];
		});
		return Date.UTC(dt['year'], dt['month'] - 1, dt['day'],
			dt['hours'], dt['minutes'], dt['seconds']) / 1000;
	},
	"isMobileDevice": function() {
		return Echo.Vars.regexps.mobileUA.test(navigator.userAgent);
	}
});



if (!Echo.Plugins) Echo.Plugins = {};

Echo.isExtended = function(plugin, unique, value) {
	if (!plugin) return false;
	value = value || true;
	var id = [plugin].concat(unique).join(".");
	Echo.Vars.extensions = Echo.Vars.extensions || {};
	if (Echo.Vars.extensions[id] == value) return true;
	Echo.Vars.extensions[id] = value;
	return false;
};

Echo.extendRenderer = function(component, method, renderer, plugin) {
	if (!component || !Echo[component] || !method || !renderer || !$.isFunction(renderer) ||
		Echo.isExtended(plugin, [component, "renderer", method])) return;
	var _renderer = Echo[component].prototype.renderers[method] || function() {};
	Echo[component].prototype.renderers[method] = function() {
		var config = plugin && this.config.get("plugins." + plugin);
		if (!config || !config.enabled) {
			return _renderer.apply(this, arguments);
		}
		var self = this;
		if (!this.parentRenderer) {
			this.parentRenderer = function(name, args) {
				return self.parentRenderers[name].apply(self, args);
			}
		}
		this.parentRenderers = this.parentRenderers || {};
		this.parentRenderers[method] = _renderer;
		return renderer.apply(this, arguments);
	};
};

Echo.extendTemplate = function(component, html, action, anchor, plugin) {
	if (!component || !Echo[component] || !action || !anchor || !html ||
		Echo.isExtended(plugin, [component, "template", anchor, action], html)) return;
	var _template = Echo[component].prototype.template;
	var template = $.isFunction(_template) ? _template : function() { return _template; };
	var classify = {
		"insertBefore": "before",
		"insertAfter": "after",
		"insertAsFirstChild": "prepend",
		"insertAsLastChild": "append",
		"replace": "replaceWith"
	};
	Echo[component].prototype.template = function() {
		var config = plugin && this.config.get("plugins." + plugin);
		if (!config || !config.enabled) {
			return template.call(this);
		}
		var dom = $('<div/>').html(template.call(this));
		$('.' + anchor, dom)[classify[action]](html);
		return dom.html();
	};
};

Echo.include = function(scripts, callback) {
	if (!scripts.length) return callback();
	var script = scripts.pop();
	Echo.include(scripts, function() {
		if (typeof script.loaded == "undefined") {
			if (script.application) {
				script.loaded = function() {
					return !!Echo[script.application];
				}
			} else {
				callback();
			}
		}
		if ($.isFunction(script.loaded) && !script.loaded()) {
			$.loadScriptContent(script.url, callback);
		} else {
			callback();
		}
	});
};

Echo.createPlugin = function(config) {
	if (!config || !config.name || !config.init || !config.applications) return {};
	var name = config.name;
	var configuration = function() {
		var config = function(key) {
			return "plugins." + name + (key ? "." + key : "");
		};
		config.get = function(component, key, defaults, askParent) {
			return component.config.get(
				config(key),
				askParent ? component.config.get(key, defaults) : defaults
			);
		};
		config.set = function(component, key, value) {
			component.config.set(config(key), value);
		};
		config.remove = function(component, key) {
			component.config.remove(config(key));
		};
		return config;
	};
	var init = config.init || function() {};
	Echo.Plugins[name] = Echo.Plugins[name] || $.extend(config, {
		"init": function(plugin, application) {
			var enabled = plugin.config.get(application, "enabled");
			if (typeof enabled == "undefined") {
				plugin.config.set(application, "enabled", true);
			}
			init(plugin, application);
		},
		"set": function(component, key, value) {
			component.vars = component.vars || {};
			component.vars[name] = component.vars[name] || {};
			$.setNestedValue(component.vars[name], key, value);
		},
		"get": function(component, key) {
			var data = (component.vars || {})[name] || {};
			if (!key) return data;
			return $.getNestedValue(key, data);
		},
		"addCss": function(text) {
			$.addCss(text, "plugins-" + name);
		},
		"label": function(key, data) {
			return Echo.Localization.label(key, "Plugins." + name, data);
		},
		"addLabels": function(data) {
			Echo.Localization.extend(data, "Plugins." + name);
		},
		"topic": function(prefix, action) {
			var namespace = typeof prefix == "string" ? prefix : prefix.namespace;
			return namespace + ".Plugins." + name + "." + action;
		},
		"config": configuration(),
		"subscribe": function(application, topic, handler) {
			var self = this;
			return application.subscribe(topic, function() {
				if (!application.isPluginEnabled(self.name)) return;
				handler.apply(this, arguments);
			});
		},
		"publish": function(application, topic, data) {
			application.publish(topic, data);
		},
		"unsubscribe": function(application, topic, handlerId) {
			application.unsubscribe(topic, handlerId)
		},
		"extendRenderer": function(component, method, renderer) {
			Echo.extendRenderer(component, method, renderer, name);
		},
		"extendTemplate": function(component, html, action, anchor) {
			Echo.extendTemplate(component, html, action, anchor, name);
		},
		"addItemControl": function(application, control) {
			var controls = application.config.get("itemControls." + name, []);
			application.config.set("itemControls." + name, controls.concat(control));
		},
		"assembleConfig": function(component, data) {
			data.user = component.user;
			data.appkey = component.config.get("appkey", "");
			data.plugins = this.config.get(component, "nestedPlugins", []);
			data.contextId = component.config.get("contextId");
			data.apiBaseURL = component.config.get("apiBaseURL");
			return (new Echo.Config(data, this.config.get(component))).getAsHash();
		}
	});
	return Echo.Plugins[name];
};



if (!Echo.Broadcast) Echo.Broadcast = {};

Echo.Broadcast.initContext = function(topic, contextId) {
	contextId = contextId || 'empty';
	Echo.Vars.subscriptions = Echo.Vars.subscriptions || {};
	Echo.Vars.subscriptions[contextId] = Echo.Vars.subscriptions[contextId] || {};
	Echo.Vars.subscriptions[contextId][topic] = Echo.Vars.subscriptions[contextId][topic] || {};
	return contextId;
};

Echo.Broadcast.subscribe = function(topic, handler, contextId) {
	var handlerId = (new Date()).valueOf() + Math.random();
	contextId = Echo.Broadcast.initContext(topic, contextId);
	Echo.Vars.subscriptions[contextId][topic][handlerId] = handler;
	return handlerId;
};

Echo.Broadcast.unsubscribe = function(topic, handlerId, contextId) {
	contextId = Echo.Broadcast.initContext(topic, contextId);
	if (topic && handlerId) {
		delete Echo.Vars.subscriptions[contextId][topic][handlerId];
	} else if (topic) {
		delete Echo.Vars.subscriptions[contextId][topic];
	}
};

Echo.Broadcast.publish = function(topic, data, contextId) {
	contextId = Echo.Broadcast.initContext(topic, contextId);
	if (contextId == '*') {
		$.each(Echo.Vars.subscriptions, function(ctxId) {
			$.each(Echo.Vars.subscriptions[ctxId][topic] || {}, function(handlerId, handler) {
				handler.apply(this, [topic, data]);
			});
		});
	} else {
		if (Echo.Vars.subscriptions[contextId][topic]) {
			$.each(Echo.Vars.subscriptions[contextId][topic], function(handlerId, handler) {
				handler.apply(this, [topic, data]);
			});
		}
		if (contextId != 'empty') Echo.Broadcast.publish(topic, data, 'empty');
	}
};



if (!Echo.Object) Echo.Object = function() {};

Echo.Object.prototype.init = function(data) {
	$.extend(this, data || {});
};

Echo.Object.prototype.template = "";

Echo.Object.prototype.namespace = "";

Echo.Object.prototype.cssPrefix = "echo-";

Echo.Object.prototype.substitute = function(template, data) {
	var self = this;
	template = template.replace(Echo.Vars.regexps.matchLabel, function($0, $1) {
		return self.label($1);
	});
	template = template.replace(Echo.Vars.regexps.matchData, function($0, $1) {
		return $.getNestedValue($1, data, '');
	});
	return template;
};

Echo.Object.prototype.renderers = {};

Echo.Object.prototype.label = function(name, data) {
	var label = Echo.Localization.label(name, this.namespace, data);
	return label != name ? label : Echo.Localization.label(name, "", data);
};

Echo.Object.prototype.render = function(name, element, dom, extra) {
	var self = this;
	if (name) {
		if ($.isFunction(this.renderers[name])) {
			return this.renderers[name].call(this, element, dom, extra);
		}
	} else {
		var template = $.isFunction(this.template) ? this.template() : this.template;
		this.dom = $.toDOM(this.substitute(template, this.data || {}), this.cssPrefix, function() {
			return self.render.apply(self, arguments);
		});
		return this.dom.content;
	}
};

Echo.Object.prototype.rerender = function(name, recursive) {
	var self = this;
	if (!name) {
		if (this.dom) this.dom.content.replaceWith(this.render());
		return;
	}
	if (!this.dom) return;
	if (typeof name != "string") {
		$.map(name, function(element) {
			self.rerender(element, recursive);
		});
		return;
	} else if (!this.dom.get(name)) return;
	if (recursive) {
		var template = $.isFunction(this.template) ? this.template() : this.template;
		var html = this.substitute(template, this.data || {});
		var oldNode = this.dom.get(name);
		var newNode = $('.' + this.cssPrefix + name, $(html));
		newNode = $.toDOM(newNode, this.cssPrefix, function(name, element, dom) {
			self.dom.set(name, element);
			return self.render.apply(self, arguments);
		}).content;
		oldNode.replaceWith(newNode);
	} else {
		var element = this.dom.get(name);
		var node = this.renderers[name].call(this, element, this.dom);
		if (typeof node != "undefined") element.empty().append(node);
	}
};

Echo.Object.prototype.hyperlink = function(data, options) {
	options = options || {};
	if (options.openInNewWindow && !data.target) {
		data.target = '_blank';	
	}
	var caption = data.caption || "";
	delete data.caption;
	if (!options.skipEscaping) {
		data.href = $.htmlize(data.href);
	}
	data.href = data.href || "javascript:void(0)";
	var attributes = $.foldl([], data, function(value, acc, key) {
		acc.push(key + '="' + value + '"');
	});
	return "<a " + attributes.join(" ") + ">" + caption + "</a>";
};

Echo.Object.prototype.newContextId = function() {
	return (new Date()).valueOf() + Math.random();
};

Echo.Object.prototype.getContextId = function() {
	return this.config && this.config.get("contextId");
};

Echo.Object.prototype.subscribe = function(topic, handler) {
	return Echo.Broadcast.subscribe(topic, handler, this.getContextId());
};

Echo.Object.prototype.unsubscribe = function(topic, handlerId) {
	Echo.Broadcast.unsubscribe(topic, handlerId, this.getContextId());
};

Echo.Object.prototype.publish = function(topic, data) {
	Echo.Broadcast.publish(topic, data, this.getContextId());
};

Echo.Object.prototype.clearCache = function() {
	if (this.vars && this.vars.cache) this.vars.cache = {};
};



Echo.Application = function() {
	this.addCss();
};

Echo.Application.prototype = new Echo.Object();

Echo.Application.prototype.errorMessages = {
	"error_busy": "Loading. Please wait...",
	"error_timeout": "Loading. Please wait...",
	"error_waiting": "Loading. Please wait...",
	"error_result_too_large": "(result_too_large) The search result is too large.",
	"error_wrong_query": "(wrong_query) Incorrect or missing query parameter.",
	"error_incorrect_appkey": "(incorrect_appkey) Incorrect or missing appkey.",
	"error_internal_error": "(internal_error) Unknown server error.",
	"error_quota_exceeded": "(quota_exceeded) Required more quota than is available.",
	"error_incorrect_user_id": "(incorrect_user_id) Incorrect user specified in User ID predicate.",
	"error_unknown": "(unknown) Unknown error."
};

Echo.Application.prototype.initApplication = function(callback) {
	var self = this;
	var appkey = this.config.get("appkey");
	if (!appkey) {
		this.showMessage({
			"type": "error",
			"message": "Incorrect or missing mandatory parameter appkey"
		});
		return;
	}
	this.config.get("target").addClass("echo-ui");
	this.user = this.config.get("user") || new Echo.User({
		"appkey": appkey,
		"apiBaseURL": this.config.get("apiBaseURL"),
		"contextId": this.config.get("contextId")
	});
	this.user.init(function() {
		self.initPlugins(callback);
	});
	Echo.Localization.extend(this.errorMessages);
};

Echo.Application.prototype.messageTemplates = {
	'compact':
		'<span class="echo-application-message-icon echo-application-message-{Data:type}" title="{Data:message}">' +
		'</span>',
	'default':
		'<div class="echo-application-message">' +
			'<span class="echo-application-message-icon echo-application-message-{Data:type} echo-primaryFont">' +
				'{Data:message}' +
			'</span>' +
		'</div>'
};

Echo.Application.prototype.showMessage = function(data, target) {
	if (!this.config.get("debug") && data.type == "error") return;
	var template = this.messageTemplates[data.layout || this.messageLayout || "default"];
	(target || this.config.get("target")).empty().append(this.substitute(template, data));
};

Echo.Application.prototype.isWaitingForData = function(data) {
	return data && (data.errorCode == "waiting" || data.errorCode == "timeout" || data.errorCode == "busy");
};

Echo.Application.prototype.handleErrorResponse = function(data, config) {
	var self = this;
	config = config || {};
	var target = this.config.get("target");
	var calcWaitingTimeout = function() {
		// interval is calculated as e^x, x=[1..4]
		if (self.waitingTimeoutStep > 0) {
			if (self.waitingTimeoutStep < 4) {
				self.waitingTimeoutStep++;
			}
		} else {
			self.waitingTimeoutStep = 1;
		}
		return Math.round(Math.exp(self.waitingTimeoutStep)) * 1000;
	};

	if (this.error != data) {
		if (!this.config.get("debug")) {
			target.hide();
		} else {
			var label = this.label("error_" + data.errorCode);
			var message = label == "error_" + data.errorCode ? "(" + data.errorCode + ") " + (data.errorMessage || "") : label;
			target.show();
			this.showMessage({
				"type": this.isWaitingForData(data) ? "loading" : "error",
				"message": message
			}, config.messageTarget);
		}
	}
	this.error = data;
	if (this.isWaitingForData(data)) {
		this.waitingTimer = setTimeout(function() {
			self.cleanupErrorHandlers();
			if (config.waitingHandler) {
				config.waitingHandler();
			} else {
				self.refresh();
			}
		}, calcWaitingTimeout());
	} else {
		this.waitingTimeoutStep = 0;
	}
	if (config.callback) config.callback(data);
};

Echo.Application.prototype.cleanupErrorHandlers = function(successResponseReceived) {
	if (successResponseReceived) {
		this.waitingTimeoutStep = 0;
		delete this.error;
	}
	if (this.waitingTimer) {
		clearTimeout(this.waitingTimer);
	}
};

Echo.Application.prototype.initPlugins = function(callback) {
	var self = this;
	var plugins = this.config.get("pluginsOrder");
	var scripts = $.foldl([], plugins, function(name, acc) {
		var plugin = Echo.Plugins[name];
		if (plugin && plugin.dependencies && plugin.dependencies.length) {
			return acc.concat(plugin.dependencies);
		}
	});
	Echo.include(scripts, function() {
		$.map(plugins, function(name) {
			var plugin = Echo.Plugins[name];
			if (plugin && plugin.init && self.isPluginApplicable(plugin)) {
				plugin.init(plugin, self);
			}
		});
		if (callback) callback();
	});
};

Echo.Application.prototype.enablePlugin = function(name) {
	this.config.set("plugins." + name + ".enabled", true);
};

Echo.Application.prototype.disablePlugin = function(name) {
	this.config.set("plugins." + name + ".enabled", false);
};

Echo.Application.prototype.isPluginEnabled = function(name) {
	return this.config.get("plugins." + name + ".enabled", true);
};

Echo.Application.prototype.isPluginApplicable = function(plugin) {
	var self = this, applicable = false;
	$.each(plugin.applications, function(i, application) {
		if (Echo[application] && self instanceof Echo[application]) {
			applicable = true;
			return false; // break
		}
	});
	return applicable;
};

Echo.Application.prototype.initConfig = function(data, defaults, normalizer) {
	var _normalizer = {};
	_normalizer.target = function(el) { return $(el); };
	_normalizer.plugins = function(list) {
		var data = $.foldl({"hash": {}, "order": []}, list || [],
			function(plugin, acc) {
				var pos = $.inArray(plugin.name, acc.order);
				if (pos >= 0) {
					acc.order.splice(pos, 1);
				}
				acc.order.push(plugin.name);
				acc.hash[plugin.name] = plugin;
			});
		this.set("pluginsOrder", data.order);
		return data.hash;
	};
	data = $.extend({
		"plugins": []
	}, data || {});
	defaults = $.extend({
		"appkey": "",
		"apiBaseURL": "http://api.echoenabled.com",
		"liveUpdates": true,
		"liveUpdatesTimeout": 10,
		"liveUpdatesTimeoutMin": 3,
		"debug": true,
		"contextId": this.newContextId()
	}, defaults || {});
	this.config = new Echo.Config(data, defaults, function(key, value) {
		var handler = normalizer && normalizer[key] || _normalizer && _normalizer[key];
		return handler ? handler.call(this, value) : value;
	});
};

Echo.Application.prototype.sendAPIRequest = function(data, callback) {
	data.query.appkey = this.config.get("appkey");
	$.get(this.config.get("apiBaseURL") + "/v1/" + data.endpoint,
		data.query, callback, "jsonp");
};

Echo.Application.prototype.initLiveUpdates = function(requestParamsGetter, responseHandler) {
	var self = this;
	this.liveUpdates = {
		"originalTimeout": this.config.get("liveUpdatesTimeout"),
		"timers": {},
		"timeouts": [],
		"responseHandler": function(data) {
			if (self.liveUpdates.timers.watchdog) {
				clearTimeout(self.liveUpdates.timers.watchdog);
			}
			self.changeLiveUpdatesTimeout(data);
			responseHandler(data);
		},
		"requestParamsGetter": requestParamsGetter
	};
};

Echo.Application.prototype.changeLiveUpdatesTimeout = function(data) {
	var self = this;
	// backwards compatibility
	if (typeof data == "string") {
		data = {"liveUpdatesTimeout": data};
	}
	data.liveUpdatesTimeout = parseInt(data.liveUpdatesTimeout);
	var applyServerDefinedTimeout = function(timeout) {
		if (!timeout && self.liveUpdates.originalTimeout != self.config.get("liveUpdatesTimeout")) {
			self.config.set("liveUpdatesTimeout", self.liveUpdates.originalTimeout);
		} else if (timeout && timeout > self.config.get("liveUpdatesTimeout")) {
			self.config.set("liveUpdatesTimeout", timeout);
		}
	};
	var hasNewData = function(data) {
		// for "v1/search" endpoint at the moment
		return !!(data.entries && data.entries.length);
	};
	if (!this.nextSince) {
		applyServerDefinedTimeout(data.liveUpdatesTimeout);
		return;
	}
	var currentTimeout = this.config.get("liveUpdatesTimeout");
	var since = parseInt(this.nextSince);
	var currentTime = Math.floor((new Date()).getTime() / 1000);
	// calculate the delay before starting next request:
	//   - have new data but still behind and need to catch up - use minimum timeout
	//   - have new data but on the track - increase timeout by 1 second
	//   - have no new data - increase timeout by 2 seconds
	var timeout = hasNewData(data)
		? currentTime - since > currentTimeout
			? this.config.get("liveUpdatesTimeoutMin", 3)
			: currentTimeout + 1
		: currentTimeout + 2;
	if (timeout > this.liveUpdates.originalTimeout) {
		timeout = this.liveUpdates.originalTimeout;
	}
	this.config.set("liveUpdatesTimeout", timeout);
	// if timeout remains the same, take server side value into account
	if (timeout == this.liveUpdates.originalTimeout) {
		applyServerDefinedTimeout(data.liveUpdatesTimeout);
	}

};

Echo.Application.prototype.stopLiveUpdates = function() {
	if (this.liveUpdates.timers.regular) {
		clearTimeout(this.liveUpdates.timers.regular);
	}
	if (this.liveUpdates.timers.watchdog) {
		clearTimeout(this.liveUpdates.timers.watchdog);
	}
};

Echo.Application.prototype.startLiveUpdates = function(force) {
	var self = this;
	if (!this.liveUpdates || !force && !this.config.get("liveUpdates") && !this.liveUpdates.timeouts.length) return;
	this.stopLiveUpdates();
	if (force) {
		// if live updates requests were forced after some operation, we will
		// perform 3 attempts to get live updates: immediately, in 1 second
		// and in 3 seconds after first one
		this.liveUpdates.timeouts = [0, 1, 3];
	}
	var timeout = this.liveUpdates.timeouts.length
		? this.liveUpdates.timeouts.shift()
		: this.config.get("liveUpdatesTimeout");
	this.liveUpdates.timers.regular = setTimeout(function() {
		// if no response in the reasonable time just restart live updates
		self.liveUpdates.timers.watchdog = setTimeout(function() {
			self.startLiveUpdates();
		}, 5000);
		self.sendAPIRequest(
			self.liveUpdates.requestParamsGetter(),
			self.liveUpdates.responseHandler);
	}, timeout * 1000);
};

Echo.Application.prototype.addCss = function() {
	var id = 'echo-css-fancybox';
	if ($('#' + id).length) return;
	var container = document.getElementsByTagName("head")[0] || document.documentElement;
	// using insertBefore DOM method instead of jquery
	// because in jquery >= 1.5 link element inserted incorrectly in IE 7-8
	container
		.insertBefore($("<link>", {
			"rel": "stylesheet",
			"id": id,
			"type": "text/css",
			"href": "//c0.echoenabled.com/css/fancybox.css"
		}).get(0), $(container).children().get(0));
	$.addCss(
		'.echo-application-message { padding: 15px 0px; text-align: center; -moz-border-radius: 0.5em; -webkit-border-radius: 0.5em; border: 1px solid #E4E4E4; }' +
		'.echo-application-message-icon { display: inline-block; height: 16px; padding-left: 16px; background: no-repeat left center; }' +
		'.echo-application-message .echo-application-message-icon { padding-left: 21px; height: auto; }' +
		'.echo-application-message-empty { background-image: url(//c0.echoenabled.com/images/information.png); }' +
		'.echo-application-message-loading { background-image: url(//c0.echoenabled.com/images/loading.gif); }' +
		'.echo-application-message-error { background-image: url(//c0.echoenabled.com/images/warning.gif); }'
	, 'application');
};



Echo.Config = function(master, slave, normalizer) {
	var self = this;
	this.normalize = normalizer || function(key, value) { return value; };
	this.data = {};
	this.cache = {};
	if (!slave && !normalizer) {
		this.data = master;
	} else {
		$.each(this.combine(master, $.extend({}, slave)), function(key, value) {
			self.set(key, value);
		});
	}
};

Echo.Config.prototype.get = function(key, defaults) {
	var k = key;
	if (typeof k != "string") {
		k = k.join(".");
	}
	if (!this.cache.hasOwnProperty(k)) {
		this.cache[k] = $.getNestedValue(key, this.data);
	}
	return typeof this.cache[k] == "undefined" ? defaults : this.cache[k];
};

Echo.Config.prototype.set = function(key, value) {
	var keys = key.split(/\./);
	delete this.cache[key];
	if (typeof value == "object") {
		this.clearCacheByPrefix(key);
	}
	return $.setNestedValue(this.data, key, this.normalize(keys.pop(), value));
};

Echo.Config.prototype.remove = function(key) {
	var keys = key.split(/\./);
	var field = keys.pop();
	var data = $.getNestedValue(keys, this.data);
	delete data[field];
};

Echo.Config.prototype.combine = function(master, slave) {
	var self = this;
	return $.foldl(slave, master, function(value, acc, key) {
		acc[key] = $.isPlainObject(value) && slave.hasOwnProperty(key)
			? self.combine(value, slave[key])
			: value;
	});
};

Echo.Config.prototype.extend = function(extra) {
	var self = this;
	$.each(extra, function(key, value) {
		self.set(key, value);
	});
};

Echo.Config.prototype.getAsHash = function() {
	return this.data;
};

Echo.Config.prototype.clearCacheByPrefix = function(prefix) {
	var self = this;
	prefix += ".";
	$.each(this.cache, function(key, data) {
		// key starts with prefix
		if (!key.indexOf(prefix)) {
			delete self.cache[key];
		}
	});
};



if (!Echo.Localization) Echo.Localization = { labels: {} };

Echo.Localization.key = function(name, namespace) {
	return (namespace ? namespace + "." : "") + name;
};

Echo.Localization.extend = function(labels, namespace) {
	$.each(labels, function(name, value) {
		Echo.Localization.labels[Echo.Localization.key(name, namespace)] = value;
	});
};

Echo.Localization.label = function(name, namespace, data) {
	var label = Echo.Localization.labels[Echo.Localization.key(name, namespace)] || name;
	$.each(data || {}, function(key, value) {
		label = label.replace(new RegExp("{" + key + "}", "g"), value);
	});
	return label;
};



if (!Echo.UI) Echo.UI = {
	cornersCss: function(radius, scopeClass) {
		return ('{scope}.ui-corner-tl { -moz-border-radius-topleft: {radius}; -webkit-border-top-left-radius: {radius}; border-top-left-radius: {radius}; }' +
		'{scope}.ui-corner-tr { -moz-border-radius-topright: {radius}; -webkit-border-top-right-radius: {radius}; border-top-right-radius: {radius}; }' +
		'{scope}.ui-corner-bl { -moz-border-radius-bottomleft: {radius}; -webkit-border-bottom-left-radius: {radius}; border-bottom-left-radius: {radius}; }' +
		'{scope}.ui-corner-br { -moz-border-radius-bottomright: {radius}; -webkit-border-bottom-right-radius: {radius}-bottom-right-radius: {radius}; }' +
		'{scope}.ui-corner-top { -moz-border-radius-topleft: {radius}; -webkit-border-top-left-radius: {radius}; border-top-left-radius: {radius}; -moz-border-radius-topright: {radius}; -webkit-border-top-right-radius: {radius}; border-top-right-radius: {radius}; }' +
		'{scope}.ui-corner-bottom { -moz-border-radius-bottomleft: {radius}; -webkit-border-bottom-left-radius: {radius}; border-bottom-left-radius: {radius}; -moz-border-radius-bottomright: {radius}; -webkit-border-bottom-right-radius: {radius}; border-bottom-right-radius: {radius}; }' +
		'{scope}.ui-corner-right {  -moz-border-radius-topright: {radius}; -webkit-border-top-right-radius: {radius}; border-top-right-radius: {radius}; -moz-border-radius-bottomright: {radius}; -webkit-border-bottom-right-radius: {radius}; border-bottom-right-radius: {radius}; }' +
		'{scope}.ui-corner-left { -moz-border-radius-topleft: {radius}; -webkit-border-top-left-radius: {radius}; border-top-left-radius: {radius}; -moz-border-radius-bottomleft: {radius}; -webkit-border-bottom-left-radius: {radius}; border-bottom-left-radius: {radius}; }' +
		'{scope}.ui-corner-all { -moz-border-radius: {radius}; -webkit-border-radius: {radius}; border-radius: {radius}; }').replace(/{scope}/g, scopeClass || "").replace(/{radius}/g, radius);
	}
};

(function() {
	$.addCss(
		'.echo-ui { text-align: left; }' +
		'.echo-ui .ui-helper-hidden { display: none; }' +
		'.echo-ui .ui-helper-hidden-accessible { position: absolute; left: -99999999px; }' +
		'.echo-ui .ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }' +
		'.echo-ui .ui-helper-clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }' +
		'.echo-ui .ui-helper-clearfix { display: inline-block; }' +
		'/* required comment for clearfix to work in Opera \\*/' +
		'* html .echo-ui .ui-helper-clearfix { height:1%; }' +
		'.echo-ui .ui-helper-clearfix { display:block; }' +
		'/* end clearfix */' +
		'.echo-ui .ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); }' +
		'.echo-ui .ui-resizable-handle { position: absolute;font-size: 0.1px;z-index: 99999; display: block;}' +
		'.echo-ui .ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle { display: none; }' +
		'.echo-ui .ui-resizable-n { cursor: n-resize; height: 7px; width: 100%; top: -5px; left: 0; }' +
		'.echo-ui .ui-resizable-s { cursor: s-resize; height: 7px; width: 100%; bottom: -5px; left: 0; }' +
		'.echo-ui .ui-resizable-e { cursor: e-resize; width: 7px; right: -5px; top: 0; height: 100%; }' +
		'.echo-ui .ui-resizable-w { cursor: w-resize; width: 7px; left: -5px; top: 0; height: 100%; }' +
		'.echo-ui .ui-resizable-se { cursor: se-resize; width: 12px; height: 12px; right: 1px; bottom: 1px; }' +
		'.echo-ui .ui-resizable-sw { cursor: sw-resize; width: 9px; height: 9px; left: -5px; bottom: -5px; }' +
		'.echo-ui .ui-resizable-nw { cursor: nw-resize; width: 9px; height: 9px; left: -5px; top: -5px; }' +
		'.echo-ui .ui-resizable-ne { cursor: ne-resize; width: 9px; height: 9px; right: -5px; top: -5px;}' +
		'.echo-ui .ui-state-disabled { cursor: default !important; }' +
		'.echo-ui .ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; width: 16px; height: 16px; }' +
		'.echo-ui .ui-widget-header { font-weight: bold; border: 0px; }' +
		'.echo-ui, .echo-ui .ui-widget :active { outline: none; }' +
		'.echo-ui .ui-state-default { border: 1px solid #d3d3d3; background: #e6e6e6; color: #555555; }' +
		'.echo-ui .ui-state-default a, .echo-ui .ui-state-default a:link, .echo-ui .ui-state-default a:visited { color: #555555; text-decoration: none; }' +
		'.echo-ui .ui-state-hover, .echo-ui .ui-state-focus { border: 1px solid #999999; background: #dfebf2; color: #212121; }' +
		'.echo-ui .ui-state-hover a, .echo-ui .ui-state-hover a:hover { color: #212121; text-decoration: none; }' +
		'.echo-ui .ui-state-active { border: 1px solid #aaaaaa; background: #dfebf2; color: #212121; }' +
		'.echo-ui .ui-state-active a, .echo-ui .ui-state-active a:link, .echo-ui .ui-state-active a:visited { color: #212121; text-decoration: none; }' +

		'.echo-primaryBackgroundColor {  }' +
		'.echo-secondaryBackgroundColor { background-color: #F4F4F4; }' +
		'.echo-trinaryBackgroundColor { background-color: #ECEFF5; }' +
		'.echo-primaryColor { color: #3A3A3A; }' +
		'.echo-secondaryColor { color: #C6C6C6; }' +
		'.echo-primaryFont { font-family: Arial, sans-serif; font-size: 12px; font-weight: normal; line-height: 16px; }' +
		'.echo-secondaryFont { font-family: Arial, sans-serif; font-size: 11px; }' +
		'.echo-linkColor, .echo-linkColor a { color: #476CB8; }' +
		'.echo-clickable { cursor: pointer; }' +
		'.echo-relative { position: relative; }' +
		'.echo-clear { clear: both; }'
	, 'ui-general');
})();



Echo.UI.Button = function(element, states) {
	this.states = states || {};
	this.element = $(element);
	this.addCss();
	if (this.states.normal && !this.states.normal.label) {
		this.states.normal.label = $(element).html();
	}
	$(element).button(this.states.normal).wrap('<span class="echo-button"></span>');
	this.wrapper = $(element).parent();
};

Echo.UI.Button.prototype = new Echo.Object();

Echo.UI.Button.prototype.setState = function(name) {
	this.element.removeClass('ui-button-text-only ui-button-text-icons ui-button-text-icon');
	this.element.button('option', this.states[name]);
}

Echo.UI.Button.prototype.addCss = function() {
	$.addCss(
		'.echo-button .ui-button { display: inline-block; position: relative; padding: 0; margin-right: .1em; text-decoration: none !important; cursor: pointer; text-align: center; overflow: visible; }' +
		'.echo-button .ui-button-icon-only { width: 1.8em; }' +
		'.echo-button button.ui-button-icon-only { width: 2em; }' +
		'.echo-button .ui-button-icons-only { width: 3em; }' +
		'.echo-button button.ui-button-icons-only { width: 3.3em; }' +
		'.echo-button .ui-button .ui-button-text { display: block; }' +
		'.echo-button .ui-button-text-only .ui-button-text { padding: .4em .8em; }' +
		'.echo-button .ui-button-icon-only .ui-button-text, .echo-button .ui-button-icons-only .ui-button-text { padding: .4em; text-indent: -9999999px; }' +
		'.echo-button .ui-button-text-icon .ui-button-text, .echo-button .ui-button-text-icons .ui-button-text { padding: .4em .8em .4em 2.1em; }' +
		'.echo-button .ui-button-text-icons .ui-button-text { padding-left: 1.9em; padding-right: 1.9em; }' +
		'.echo-button input.ui-button { padding: .4em .8em; }' +
		'.echo-button .ui-button-icon-only .ui-icon, .echo-button .ui-button-text-icon .ui-icon, .echo-button .ui-button-text-icons .ui-icon, .echo-button .ui-button-icons-only .ui-icon { position: absolute; top: 50%; margin-top: -8px; }' +
		'.echo-button .ui-button-icon-only .ui-icon { left: 50%; margin-left: -8px; }' +
		'.echo-button .ui-button-text-icon .ui-button-icon-primary, .echo-button .ui-button-text-icons .ui-button-icon-primary, .echo-button .ui-button-icons-only .ui-button-icon-primary { left: .3em; }' +
		'.echo-button .ui-button-text-icons .ui-button-icon-secondary, .echo-button .ui-button-icons-only .ui-button-icon-secondary { right: .3em; }' +
		'.echo-button button.ui-button::-moz-focus-inner { border: 0; padding: 0; }' +
		'.echo-button .ui-state-default { border: 1px solid #d3d3d3; background: #e6e6e6; color: #555555; }' +
		'.echo-button .ui-state-default a, .echo-ui .ui-state-default a:link, .echo-button .ui-state-default a:visited { color: #555555; text-decoration: none; }' +
		'.echo-button .ui-state-hover, .echo-button .ui-state-focus { border: 1px solid #999999; background: #dfebf2; color: #212121; }' +
		'.echo-button .ui-state-active { border: 1px solid #aaaaaa; background: #dfebf2; color: #212121; }' +
		Echo.UI.cornersCss('4px', '.echo-button button')
	, 'ui-buttons');
	if ($.browser.msie) {
		$.addCss('.echo-button .ui-button { zoom: 1; }', 'ui-buttons-ie'); 
	}

	$.addCss(
		'.echo-button .ui-icon-arrow-right { background: no-repeat center url(//c0.echoenabled.com/images/curation/button/apply_normal.png); }' +
		'.echo-button .ui-icon-save { margin-right: 5px; background: no-repeat center url(//c0.echoenabled.com/images/curation/button/save_normal.png); }' +
		'.echo-button .ui-icon-waiting { margin-right: 5px; background: no-repeat center url(//c0.echoenabled.com/images/loading.gif); }'
	, 'ui-buttons-icons');
};


})(jQuery);


(function($) {
Echo.Localization.extend({
	"apply": "Apply",
	"cancel": "Cancel",
	"delete" : "Delete",
	"deleteQueryConfirmMessage" : "Are you sure you want to delete the \"{Data:name}\" query?",
	"edit" : "Edit",
	"save" : "Save",
	"saving": "Saving...",
	"textFieldEmptyError": "Query field can not be empty!",
	"titleFieldEmptyError": "Title field can not be empty!"
}, "Query");

Echo.Query = function(data) {
	this.vars = {};
	this.mode = "view"; // or "edit"
	this.init(data);
};

Echo.Query.prototype = new Echo.Object();

Echo.Query.prototype.namespace = "Query";

Echo.Query.prototype.cssPrefix = "echo-query-";

Echo.Query.prototype.template = function() {
return '<div class="echo-query-container echo-curation-primary-font">' +
		'<div class="echo-query-quickButton echo-query-applyButton echo-clickable" title="{Label:apply}"></div>' +
		'<div class="echo-query-controls">'+
			'<div class="echo-query-quickButton echo-query-deleteButton echo-clickable" title="{Label:delete}"></div>' +
			'<div class="echo-query-quickButton echo-query-editButton echo-clickable" title="{Label:edit}"></div>' +
			'<div class="echo-clear"></div>' +
		'</div>' +
		(this.mode == "view"
		?
		'<div class="echo-query-content echo-query-content-view">' +
			'<span>{Data:title}</span>' +
		'</div>'
		:
		'<div class="echo-query-content echo-query-content-edit">' +
			'<div class="echo-query-title-container">' +
				'<input class="echo-query-title echo-curation-primary-font echo-curation-input" value="{Data:title}">' +
			'</div>' +
			'<div>' +
				'<textarea class="echo-query-text echo-curation-primary-font echo-curation-input" spellcheck="false">' +
					'{Data:query}' +
				'</textarea>' +
			'</div>' +
		'</div>' +
		'<div class="echo-query-buttons">' +
			'<button type="button" class="echo-query-saveButton echo-curation-secondary-font">{Label:save}</button>' +
			'<button type="button" class="echo-query-cancelButton echo-curation-secondary-font">{Label:cancel}</button>' +
			'<div class="echo-clear"></div>' +
		'</div>'
		) +
		'<div class="echo-clear"></div>' +
	'</div>';
};

Echo.Query.prototype.renderers = {};

Echo.Query.prototype.renderers.container = function(element) {
	var self = this;
	element.bind({
		"mouseleave": function() {
			if (self.mode == "edit") return;
			self.dom.get("controls").hide();
		},
		"mouseenter": function() {
			if (self.mode == "edit") return;
			self.dom.get("controls").show();
		}
	});
	if (this.mode == "view"){
		element.addClass("echo-clickable").click(function() {
			self.publish("QueryPalette.onApply", {
				"title": self.data.title,
				"query": self.data.query
			});
		})
	}
};

Echo.Query.prototype.renderers.editButton = function(element) {
	var self = this;
	element.click(function() {
		self.publish("internal.Query.onEdit", self.data);
		self.mode = "edit";
		self.rerender();
	});
};

Echo.Query.prototype.renderers.deleteButton = function(element) {
	var self = this;
	element.click(function(){
		if (confirm(
			self.substitute(
				self.label("deleteQueryConfirmMessage"), 
				{"name": self.data.title}
			)
		)){
			self.dom.remove("container");
			self.publish("internal.Query.onDelete", self.data);
		}
	})
};

Echo.Query.prototype.renderers.applyButton = function(element) {
	var self = this;
	var get = function(field) {
		return self.mode == "edit"
			? self.dom.get(field == "query" ? "text" : field).val()
			: self.data[field];
	};
	element.click(function(event) {
		self.publish("QueryPalette.onApply", {
			"title": get("title"),
			"query": get("query")
		});
		event.stopPropagation();
	});
};

Echo.Query.prototype.renderers.saveButton = function(element) {
	var self = this;
	var button = new Echo.UI.Button(element, {
		"normal": {
			"icons": {
				"primary": "ui-icon-save"
			},
			"disabled": false
		},
		"saving": {
			"icons": {
				"primary": "ui-icon-waiting"
			},
			"disabled": true,
			"label": self.label('saving')
		}
	});
	element.click(function() {
		var data = {};
		$.each(["title", "text"], function(id, name) {
			var value = $.trim($.stripTags(self.dom.get(name).val()));
			if (!value) {
				alert(self.label(name + "FieldEmptyError"));
				self.dom.get(name).focus();
				return false;
			}
			data[name] = value;
		});
		if (!data.title || !data.text) return false;
		button.setState('saving');
		self.data.title = data.title;
		self.data.query = data.text;
		self.publish("internal.Query.onSave", {
			"query": self.data,
			"callback": function() {
				self.mode = "view";
				self.rerender();
			}
		});
	});
};

Echo.Query.prototype.renderers.cancelButton = function(element) {
	var self = this;
	new Echo.UI.Button(element);
	element.click(function() {
		self.mode = "view";
		self.rerender();
	});
};

Echo.Localization.extend({
	"advancedBuilderSwitch" : "Quick Editor",
	"apply": "Apply",
	"chronological" : "Chronological",
	"editMore": "Edit More...",
	"emptyQueriesList": "No saved queries...",
	"itemsPerPage": "Items per page",
	"help": "Help",
	"loadingQueriesList": "Loading...",
	"path": "Path",
	"query": "Query",
	"queryBuilder": "Query Builder",
	"quickBuilderSwitch" : "Advanced Editor",
	"repliesDescending": "Replies Count (descending)",
	"likesDescending": "Likes Count (descending)",
	"flagsDescending": "Flags Count (descending)",
	"reverseChronological" : "Reverse Chronological",
	"savedQueries": "Saved Queries",
	"saveToList": "Save to list",
	"saving": "Saving...",
	"sortOrder": "Sort Order",
	"states": "States",
	"stateCommunityFlagged": "Flagged by Community",
	"stateModeratorApproved": "Approved by Moderator",
	"stateModeratorDeleted": "Deleted by Moderator",
	"stateModeratorFlagged": "Flagged by Moderator",
	"stateSystemFlagged": "Flagged by System",
	"stateUntouched": "New",
	"textFieldEmptyError": "Query field can not be empty!",
	"viewingOptions": "Viewing Options"
}, "QueryPalette");

Echo.QueryPalette = function(config) {
	if (!config || !config.target) return;
	var self = this;
	this.vars = {};
	this.queries = [];
	this.queryById = {};
	this.builders = {};
	this.builderMode = "quick"; // or "advanced"
	this.states = [
		"Untouched",
		"ModeratorApproved",
		"ModeratorDeleted",
		"CommunityFlagged",
		"ModeratorFlagged",
		"SystemFlagged"
	];
	this.initConfig(config, {
		"query": {
			"path": window.location.protocol + "//" + window.location.host + "/*",
			"states": ["Untouched", "SystemFlagged", "CommunityFlagged", "ModeratorFlagged"],
			"itemsPerPage": 12,
			"sortOrder": "reverseChronological"
		},
		"domain": window.location.host,
		"autoRequest": false,
		"queriesAppURL": window.location.protocol + "//apps.echoenabled.com/v2/query"
	});
	this.initApplication(function() {
		self.addCss();
		self.prepareQuery();
		self.listenEvents();
		self.config.get("target").empty().append(self.render());
		if (self.config.get("autoRequest")) {
			self.requestSavedQueries();
		}
	});
};

Echo.QueryPalette.prototype = new Echo.Application();

Echo.QueryPalette.prototype.namespace = "QueryPalette";

Echo.QueryPalette.prototype.cssPrefix = "echo-curation-queries-";

Echo.QueryPalette.prototype.template =
'<div class="echo-curation-queries">' +
	'<div class="echo-curation-queries-header">' +
		'<div class="echo-curation-queries-header-left echo-curation-secondary-font">' +
			'{Label:queryBuilder}' +
		'</div>' +
		'<div class="echo-curation-queries-header-right">' +
			'<a class="echo-curation-queries-builderModeSwitcher echo-clickable echo-linkColor"></a>' +
		'</div>' +
		'<div class="echo-clear"></div>' +
	'</div>' +
	'<div class="echo-curation-queries-builder"></div>' +
	'<div class="echo-curation-queries-buttons">' +
		'<button type="button" class="echo-curation-queries-helpButton echo-curation-secondary-font">{Label:help}</button>' +
		'<button type="button" class="echo-curation-queries-applyButton echo-curation-secondary-font">{Label:apply}</button>' +
		'<button type="button" class="echo-curation-queries-editButton echo-curation-secondary-font">{Label:editMore}</button>' +
		'<button type="button" class="echo-curation-queries-saveButton echo-curation-secondary-font">{Label:saveToList}</button>' +
		'<div class="echo-clear"></div>' +
	'</div>' +
	'<div class="echo-curation-queries-header echo-curation-secondary-font">{Label:savedQueries}</div>' +
	'<div class="echo-curation-queries-savedQueries"></div>'
'</div>';

Echo.QueryPalette.prototype.renderers = {};

Echo.QueryPalette.prototype.renderers.quickEditor = function() {
	var self = this;
	var assembleStates = function(states) {
		var template = 
			'<div class="{Data:prefix}">' + 
				'<input type="checkbox" id="{Data:prefix}{Data:name}" class="{Data:prefix}{Data:name}"{Data:checked}>' +
				'<label for="{Data:prefix}{Data:name}" class="echo-clickable">' +
					'<span class="{Data:prefix}{Data:name}Label echo-curation-primary-font">' +
						'{Data:label}' +
					'</span>' +
				'</label>' +
			'</div>';
		return $.map(states, function(name){
			return self.substitute(template, {
				"checked": self.query.states[name] ? " checked" : "",
				"prefix": "echo-curation-queries-state", 
				"name": name, 
				"label": self.label("state" + name)});
		}).join("\n");
	};
	var template =
	'<div class="echo-curation-queries-wrapper">' +
		'<div class="echo-curation-queries-subheader echo-curation-secondary-font">{Label:path}</div>' +
		'<div>' +
			'<input class="echo-curation-primary-font echo-curation-queries-path echo-curation-input">' +
		'</div>' +
		'<div class="echo-curation-queries-subheader echo-curation-secondary-font">{Label:states}</div>' +
		'<div class="echo-curation-queries-content">' +
			'<div class="echo-curation-queries-block echo-curation-queries-left">' +
				assembleStates(["Untouched", "ModeratorApproved", "ModeratorDeleted"]) +	
			'</div>' +
			'<div class="echo-curation-queries-block">' +
				assembleStates(["CommunityFlagged", "ModeratorFlagged", "SystemFlagged"]) +
			'</div>' +
			'<div class="echo-clear"></div>' +
		'</div>' +
		'<div class="echo-curation-queries-subheader echo-curation-secondary-font">' +
			'{Label:viewingOptions}' +
		'</div>' +
		'<div class="echo-curation-queries-viewOptions-itemsPerPage echo-curation-primary-font">' +
			'<span class="echo-curation-queries-view-option">{Label:itemsPerPage}:</span>' +
			'<input class="echo-curation-queries-itemsPerPage echo-curation-primary-font">' +
		'</div>' +
		'<div class="echo-curation-queries-viewOptions-sortOrder echo-curation-primary-font">' +
			'<span class="echo-curation-queries-view-option">{Label:sortOrder}:</span>' +
			'<select class="echo-curation-queries-sortOrder echo-curation-primary-font">' +
				'<option value="chronological">{Label:chronological}</option>' +
				'<option value="reverseChronological">{Label:reverseChronological}</option>' +
				'<option value="repliesDescending">{Label:repliesDescending}</option>' +
				'<option value="likesDescending">{Label:likesDescending}</option>' +
				'<option value="flagsDescending">{Label:flagsDescending}</option>' +
			'</select>' +
		'</div>' +
	'</div>';
	var descriptors = $.foldl({}, ["path", "itemsPerPage", "sortOrder"], function(name, acc) {
		acc[name] = function(element) {
			element.val(self.query[name]);
		};
	});
	this.builders.quick = $.toDOM(this.substitute(template), "echo-curation-queries-", descriptors);
	return this.builders.quick.content;
};

Echo.QueryPalette.prototype.renderers.advancedEditor = function() {
	var self = this;
	var template = 
	'<div class="echo-curation-queries-wrapper">' +
		'<div class="echo-curation-queries-subheader echo-curation-secondary-font">{Label:query}</div>' +
		'<div class="echo-curation-queries-content">' +
			'<textarea class="echo-curation-queries-query echo-curation-input" spellcheck="false"></textarea>' +
		'</div>' +
	'</div>';
	var descriptors = {
		"query": function(element) {
			element.val(self.query.text);
		}
	};
	this.builders.advanced = $.toDOM(this.substitute(template), "echo-curation-queries-", descriptors);
	return this.builders.advanced.content;
};

Echo.QueryPalette.prototype.renderers.builder = function(element) {
	var content = this.render(this.builderMode + "Editor");
	(element || this.dom.get("builder")).empty().append(content);
};

Echo.QueryPalette.prototype.renderers.builderModeSwitcher = function(element) {
	var self = this;
	(element || this.dom.get("builderModeSwitcher"))
		.empty()
		.append(this.label(this.builderMode + "BuilderSwitch"))
		.unbind("click")
		.one("click", function() {
			self.toggleBuilderView();
		});
};

Echo.QueryPalette.prototype.renderers.helpButton = function(element) {
	new Echo.UI.Button(element);
	element.click(function() {
		window.open('http://wiki.aboutecho.com/API-method-search');
	});
};

Echo.QueryPalette.prototype.renderers.editButton = function(element) {
	var self = this;
	new Echo.UI.Button(element);
	element.click(function() {
		self.toggleBuilderView(true);
	});
};

Echo.QueryPalette.prototype.renderers.saveButton = function(element) {
	var self = this;
	var button = new Echo.UI.Button(element, {
		"normal": {
			"icons": {
				"primary": "ui-icon-save"
			},
			"disabled": false
		},
		"saving": {
			"icons": {
				"primary": "ui-icon-waiting"
			},
			"disabled": true,
			"label": self.label('saving')
		}
	});
	element.hide().click(function() {
		var id = self.config.get("appkey") + "-" +
			window.location.host + "-" +
			(new Date().getTime()) + "-" +
			Math.round(Math.random() * 1000);
		var container = self.dom.get("savedQueries");
		var query = self.initQuery({
			"id": id,
			"title": "Query #" + (self.queries.length + 1),
			"query": self.builders.advanced.get("query").val() || ""
		});
		if (!$.trim(query.data.query)) {
			alert(self.label("textFieldEmptyError"));
			self.builders.advanced.get("query").focus();
			return false;
		}
		button.setState('saving');
		self.queryById[id] = query;
		if (!self.queries.length) {
			container.empty();
		}
		self.queries.unshift(query);

		self.sendRequest({
			"action": "save",
			"id": id,
			"title": query.data.title,
			"query": query.data.query
		}, function() {
			button.setState('normal');
			var content = query.render();
			container.prepend(content);
			content.hide()
				.css({backgroundColor: "#ffff99"})
				.slideDown(700)
				.animate({backgroundColor: "#ffffff"}, 4000, 'easeInOutExpo');
		});
	});
};

Echo.QueryPalette.prototype.renderers.applyButton = function(element) {
	var self = this;
	new Echo.UI.Button(element, {
		"normal": {
			"icons": {
				"primary": "ui-icon-arrow-right"
			}
		}
	});
	element.click(function() {
		self.query.text = self.builderMode == "quick"
			? self.assembleQuery()
			: self.builders.advanced.get("query").val() || "";
		if (self.builderMode == "quick") {
			self.saveQuickView();
		}
		self.publish("QueryPalette.onApply", {"query": self.query.text});
	});
};

Echo.QueryPalette.prototype.prepareQuery = function() {
	this.query = this.config.get("query");
	if (this.query) {
		this.query.states = $.foldl({}, this.query.states || [], function(state, acc) {
			acc[state] = true;
		});
	}
};

Echo.QueryPalette.prototype.listenEvents = function() {
	var self = this;
	this.subscribe("internal.Query.onEdit", function(event, data) {
		self.collapseQueriesExcept(data.id);
	});
	this.subscribe("internal.Query.onDelete", function(event, data) {
		self.deleteQuery(data.id);
		if (!self.queries.length) {
			self.renderQueriesMessage("empty");
		}
		self.sendRequest({
			"id": data.id,
			"action": "delete"
		});
	});
	this.subscribe("internal.Query.onSave", function(event, data) {
		self.sendRequest({
			"action": "save",
			"id": data.query.id,
			"title": data.query.title,
			"query": data.query.query
		}, data.callback);
	});
};

Echo.QueryPalette.prototype.toggleBuilderView = function(assembleQuery) {
	var mode = "quick";
	var buttons = {
		"edit": this.dom.get("editButton"),
		"save": this.dom.get("saveButton")
	};
	if (this.builderMode == "quick") {
		mode = "advanced";
		buttons.edit.hide();
		buttons.save.show();
		if (assembleQuery || !this.query.text) {
			this.query.text = this.assembleQuery();
		}
		this.saveQuickView();
	} else {
		buttons.edit.show();
		buttons.save.hide();
	}
	this.builderMode = mode;
	this.rerender(["builder", "builderModeSwitcher"]);
};

Echo.QueryPalette.prototype.deleteQuery = function(id) {
	if (this.queryById[id]){
		this.queries = $.foldl([], this.queries, function(query, acc){
			if (query.data.id != id) {
				acc.push(query);
			}
		});
	}
};

Echo.QueryPalette.prototype.collapseQueriesExcept = function(id) {
	if (this.queryById[id]){
		$.map(this.queries, function(query) {
			if (query.mode == "edit" && query.data.id != id) {
				query.mode = "view";
				query.rerender();
			}
		});
	}
};

Echo.QueryPalette.prototype.assembleQuery = function() {
	var components = [], form = this.builders.quick;
	if (form.get("path") && $.trim(form.get("path").val()) != "") {
		components.push("scope:" + $.trim(form.get("path").val()));
	}
	var states = $.foldl([], this.states, function(state, acc) {
		if (form.get("state" + state).attr("checked")) {
			acc.push(state);
		}
	});
	if (states.length) {
		components.push("state:" + states.join(','));
	}
	components.push("sortOrder:" + form.get("sortOrder").val());
	if (form.get("itemsPerPage").val() > 0) {
		components.push("itemsPerPage:" + form.get("itemsPerPage").val());
	}
	return components.join(" ");
};

Echo.QueryPalette.prototype.saveQuickView = function() {
	var form = this.builders.quick;
	this.query.path = form.get("path").val();
	this.query.states = $.foldl({}, this.states, function(state, acc) {
		if (form.get("state" + state).attr("checked")) acc[state] = true;
	});
	this.query.sortOrder = form.get("sortOrder").val();
	this.query.itemsPerPage = form.get("itemsPerPage").val() || 0;
};

Echo.QueryPalette.prototype.sendRequest = function(query, callback) {
	query.appkey = this.config.get("appkey");
	query.domain = this.config.get("domain");
	callback = callback || function() {};
	$.get(this.config.get("queriesAppURL"), query, callback, "jsonp");
};

Echo.QueryPalette.prototype.requestSavedQueries = function() {
	var self = this;
	this.renderQueriesMessage("loading");
	this.sendRequest({
		"action": "list"
	}, function(data) {
		self.handleSavedQueriesResponse(data);
	});
};

Echo.QueryPalette.prototype.handleSavedQueriesResponse = function(data) {
	var self = this;
	data = data || [];
	if (!data.length) {
		self.renderQueriesMessage("empty");
		return;
	}
	var container = self.dom.get("savedQueries").empty();
	this.queries = $.foldl([], data, function(item, acc) {
		var query = self.initQuery(item);
		self.queryById[item.id] = query;
		container.append(query.render());
		acc.push(query);
	});
};

Echo.QueryPalette.prototype.refresh = function() {
	this.requestSavedQueries();
};

Echo.QueryPalette.prototype.renderQueriesMessage = function(type) {
	this.showMessage({
		"type": type,
		"message": this.label(type + "QueriesList")
	}, this.dom.get("savedQueries"));
};

Echo.QueryPalette.prototype.initQuery = function(data) {
	return new Echo.Query({
		"data": data,
		"config": new Echo.Config(this.config.getAsHash())
	});
};

Echo.QueryPalette.prototype.addCss = function() {
	var self = this;
	$.addCss(
	'.echo-curation-queries {}' +
	'.echo-curation-queries-wrapper { margin: 0px 5px; }' +
	'.echo-curation-primary-font { font-family: Arial; font-size: 12px; color: #393939; }' +
	'.echo-curation-secondary-font { font-family: Arial; font-weight: bold; font-size: 11px; color: #4a4a4a; }' +
	'.echo-curation-input { width: 100%; border: 1px solid #e1e1e1; }' +
	'.echo-curation-queries-header { height: 25px; line-height: 25px; padding: 0px 5px; background-color: #e8e8e8; }' +
	'.echo-curation-queries-header-left { float: left; }' +
	'.echo-curation-queries-header-right { float: right; }' +
	'.echo-curation-queries-builderModeSwitcher { font-family: Arial; font-size: 11px; text-decoration: underline; }' +
	'input.echo-curation-queries-itemsPerPage { width: 48px; height: 20px; border: 1px solid #e1e1e1; }' +
	'.echo-curation-queries-subheader { margin: 10px 0px; }' +
	'.echo-curation-queries-block { float: left; }' +
	'.echo-curation-queries-left { margin-right: 40px; }' +
	'textarea.echo-curation-queries-query { height: 200px; }' +
	'.echo-curation-queries-state { margin-bottom: 10px; line-height: 18px; }' +
	'.echo-curation-queries-state input { margin: 0px; }' +
	'.echo-curation-queries-state span { display: inline-block; margin-left: 5px; padding-left: 18px; }' +
	'.echo-curation-queries-buttons { margin: 20px 5px; }' +
	'.echo-curation-queries-helpButton { float: left; }' +
	'.echo-curation-queries-editButton, .echo-curation-queries-saveButton { float: right; }' +
	'.echo-curation-queries-applyButton { float: right; margin-left: 10px; }' +
	'.echo-curation-queries-viewOptions-itemsPerPage { margin-bottom: 10px; }' +
	'.echo-curation-queries-view-option { padding-right: 5px; }' +
	'.echo-curation-queries .echo-application-message { border: 0px; }' +
	$.map(self.states, function(name){
		return self.substitute('.echo-curation-queries-state{Data:name}Label { background: url("{Data:img}") no-repeat; }', {"name": name, "img": "//c0.echoenabled.com/images/curation/status/" + name.toLowerCase() + ".png"});
	}).join("\n")

	, 'curation');
	if ($.browser.msie) {
		$.addCss('.echo-curation-input { width: 99%; }', 'curation-ie');
	}

	$.addCss(
		'.echo-query-container { margin: 5px; line-height: 25px; border-bottom: 1px solid #e1e1e1; }' +
		'.echo-query-controls { float: right; width: 40px; display: none; }' +
		'.echo-query-quickButton { height: 16px; width: 16px; margin-top: 4px; }' +
		'.echo-query-applyButton { float: left; margin-right: 5px; background: url(//c0.echoenabled.com/images/curation/apply.png) no-repeat; }' +
		'.echo-query-deleteButton { float: right; background: url(//c0.echoenabled.com/images/curation/delete.png) no-repeat; }' +
		'.echo-query-editButton { float: right; background: url(//c0.echoenabled.com/images/curation/edit.png) no-repeat; margin-right: 5px; }' +
		'.echo-query-content { margin-left: 21px; }' +
		'.echo-query-content-view { margin-right: 40px; }' +
		'.echo-query-buttons { margin: 5px 0px; }' +
		'.echo-query-saveButton { float: right; margin-left: 5px; }' +
		'.echo-query-cancelButton { float: right }' +
		'.echo-query-text { height: 80px; }' +
		'.echo-query-title-container { margin-bottom: 5px; }' +
		'.echo-query-title { margin-top: 4px; }'
	, 'query');
};

Echo.Localization.extend({
	"title": "Bulk Actions",
	"itemsCount": "Apply the following transformation to the <strong>{count}</strong> selected item(s)",
	"actionBlockIP": "Block IP",
	"actionBlockUser": "Block User",
	"actionCommunityFlagged": "Flag",
	"actionModeratorApproved": "Approve",
	"actionModeratorDeleted": "Delete",
	"actionModeratorFlagged": "Spam"
}, "BulkActions");

Echo.BulkActions = function(config) {
	if (!config || !config.target) return;
	var self = this;
	this.vars = {};
	this.init({"data": config.data});
	this.initConfig(config);
	this.initApplication(function() {
		self.addCss();
		self.config.get("target").empty().append(self.render());
	});
};

Echo.BulkActions.prototype = new Echo.Application();

Echo.BulkActions.prototype.namespace = "BulkActions";

Echo.BulkActions.prototype.cssPrefix = "echo-bulk-actions-";

Echo.BulkActions.prototype.template =
	'<div class="echo-bulk-actions">' +
		'<div class="echo-bulk-actions-header echo-curation-secondary-font">{Label:title}</div>' +
		'<div class="echo-bulk-actions-info echo-curation-primary-font"></div>' +
		'<div class="echo-bulk-actions-buttons"></div>' +
	'</div>';

Echo.BulkActions.prototype.renderers = {};

Echo.BulkActions.prototype.renderers.info = function(element) {
	(element || this.dom.get("info"))
		.empty()
		.append(this.label("itemsCount", {
			"count": this.data.items.length
		}));
};

Echo.BulkActions.prototype.renderers.buttons = function(element) {
	var self = this;
	var template = '<div class="echo-bulk-actions-button echo-curation-primary-font echo-bulk-actions-{Data:class}">{Data:label}</div>';
	$.map(this.actions(), function(action) {
		var data = {
			"class": action.name,
			"label": self.label("action" + action.name)
		};
		var button = $(self.substitute(template, data))
				.click(function() { action.callback(); });
		element.append(button);
	});
};

Echo.BulkActions.prototype.refresh = function(items) {
	this.data.items = items;
	this.rerender("info");
};

Echo.BulkActions.prototype.actions = function() {
	var self = this;
	var actions = $.map([
		"ModeratorApproved",
		"ModeratorDeleted",
		"CommunityFlagged",
		"ModeratorFlagged"
	], function(state) {
		return {
			"name": state,
			"callback": function() {
				self.publish("BulkActions.onStatusChange", {"state": state});
			}
		};
	});
	/*
	XXX: actions for future usage
	actions.push({
		"name": "BlockUser",
		"callback": function() {
			// block user action
		}
	});
	actions.push({
		"name": "BlockIP",
		"callback": function() {
			// block ip action
		}
	});
	*/
	return actions;
};

Echo.BulkActions.prototype.addCss = function() {
	var self = this;
	$.addCss(
		'.echo-bulk-actions-header { height: 25px; line-height: 25px; padding: 0px 5px; background-color: #e8e8e8; }' +
		'.echo-bulk-actions-info { margin: 20px 0px 10px; }' +
		'.echo-bulk-actions-button { padding-left: 23px; cursor: pointer; margin: 10px 0px 10px 10px; line-height: 18px; }' +
		$.map(self.actions(), function(data) {
			return self.substitute('.echo-bulk-actions-{Data:name} { background: url("//c0.echoenabled.com/images/curation/actions/{Data:img}.png") no-repeat; }', {"name": data.name, "img": data.name.toLowerCase()});
		}).join("\n")
	, 'bulk-actions')
};
})(jQuery);

