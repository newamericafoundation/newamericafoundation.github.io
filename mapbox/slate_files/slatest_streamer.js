/*
 * SlateStreamer Plugin - v.1.0.1
 * updated on: 04.28.2011
*/

(function($) {  
// Override item templating with streamer plugin
var plugin = Echo.createPlugin({
    // this is the name of the plugin
    "name": "slateStreamer",
    "applications": ["Stream"],
    "init": function(plugin, application) {
        Echo.Item.prototype.template =
			'<div class="echo-item-content">' +
			'<div class="echo-item-container">' +
				'<div class="echo-item-wrapper">' +
					'<div class="echo-item-subwrapper">' +
						'<div class="echo-item-subcontainer">' +
							'<div class="echo-item-frame">' +
								'<div class="echo-item-modeSwitch echo-clickable"></div>' +
								'<div class="echo-item-data">' +
									'<div class="echo-item-body echo-primaryColor {Data:source.name}"></div>' +
									'<div class="echo-item-markers echo-secondaryFont echo-secondaryColor"></div>' +
									'<div class="echo-item-tags echo-secondaryFont echo-secondaryColor"></div>' +
								'</div>' +
								'<div class="echo-item-metadata">' + 
									'<div class="echo-item-metadata-userID">' +
										'<span class="echo-item-metadata-title echo-item-metadata-icon echo-item-metadata-userID">' +
											'{Label:userID}' +
										'</span>' +
										'<span class="echo-item-metadata-value">{Data:actor.id}</span>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="echo-clear"></div>' +
					'</div>' +
				'</div>' +
				'<div class="echo-clear"></div>' +
				'<div class="echo-item-childrenMarker"></div>' +
			'</div>' +
			'<div class="echo-item-children"></div>' +
		'</div>';
		// insert item icons
		    plugin.extendTemplate("Item", "<div class=\"stream_icon\"></div>",
            "insertAsFirstChild", "echo-item-body");
            plugin.listenEvents(application);
    } 
		
  }); 
  	
  // When new items are loaded, replace them with their corresponding services
	plugin.listenEvents = function(application) {
		streamerCount = 0;
		
		plugin.subscribe(application, "Stream.onReady", function(topic, data) {
			// Set streamer animation in order
			var rate = setInterval(rollUp, 6000);
			function rollUp(){
				$(".echo-item-content:first").slideUp(400, function(){
					$(".echo-item-body").effect("highlight", { color: "#8EA7AE"}, 3000);
					$(".echo-item-content:last").after($(this)).fadeIn(200);
				});
			}

		});
		
		plugin.subscribe(application, "Stream.Item.onRender", function(topic, data) {
			var source = data.item.data.source.name;
			// Tag activity item copy container
			$(data.item.target).find(".echo-item-body > span").first("span").addClass("obj_copy");
			
			// Open all links in new window
			$(".echo-item-content").find("a").attr('target','_blank');
			
			// Paint each new item with a session load order number
			$(data.item.target).addClass(source + '-item-' + (streamerCount + 1));
			
			// Find activity container height to add top padding and vertically center
			var item_height = $(data.item.target).find(".echo-item-body > span").first("span").height();
			var item_padding = Math.ceil((73 - item_height)/1.85);
			$(data.item.target).find(".echo-item-body > span span").first("span").css("padding-top", item_padding);
			
			streamerCount += 1;
		});
		
		// Replace oldest service items when new ones come in
		plugin.subscribe(application, "Stream.Item.onReceive", function(topic, data) {
			var source = data.item.data.source.name;
			var item_age = [];
			var class_prefix = source + '-item-';
	
			$('div[class*="' + class_prefix + '"]').each(function(index){
				var item = /\d+/
				var age = item.exec('"' + this.className + '"');
				item_age.push(age);
			});
			// Find oldest existing item to replace of same service
			function filter(a,b){ return a - b;}
			item_age.sort(filter);
			oldest_item = '.' + class_prefix + item_age[0]; 
			
			// Not removing from DOM, but rather hiding for echo
			if(item_age.length >= 2){
				$(oldest_item).slideUp('slow').removeClass();
			};
			
		});	
	
		// 
	};
  
})(jQuery);