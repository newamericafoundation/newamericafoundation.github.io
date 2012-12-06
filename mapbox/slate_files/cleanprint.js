var FDCPLoader = {

	tmax: 30000,
	logging: 'false'=='true',
	loaded: false, // TODO: rename to printSpecLoaded?
	pubKey: 0,
	articleId: 0,
	name: null,
	logo: null,
	buttons: null,
	category: null,
	dynamic: false, // a switch to indicate fetch from DOM or fetch from URL
	cpJsLoaded: false,
	cpJsCalled: false,
	headNode: document.getElementsByTagName("head")[0],
	googleAnalytics: false,
	customCss: null,
	printerFriendly: null,
	
	loadcpjs: function() {

		this.cpJsCalled = true;
		 
		var viewboxCssNode   = document.createElement('link');
		viewboxCssNode.href  = 'http://cache-02.cleanprint.net/media/pfviewer/css/viewbox.css';
		viewboxCssNode.type  = 'text/css';
		viewboxCssNode.rel   = 'stylesheet';
		viewboxCssNode.media = 'screen';
		this.headNode.appendChild(viewboxCssNode);
		
		if (this.customCss != null && this.customCss.length > 0) {
			var customCssNode   = document.createElement('link');
			customCssNode.href  = this.customCss;
			customCssNode.type  = 'text/css';
			customCssNode.rel   = 'stylesheet';
			customCssNode.media = 'screen';
			this.headNode.appendChild(customCssNode);
		}
		
		this.loadHelper();
	},
	
	
	xpathJsLoaded:navigator.appName != "Microsoft Internet Explorer",
	
	
	registerModuleLoaded: function(moduleName){
		if(moduleName == "cpjs"){
			this.cpJsLoaded = true;
		}
	},
	
	loadHelper: function(){
		var jsloc = 'http://cache-02.cleanprint.net/cpf/cpjs' +
		    "?bn=" + FDCPLoader.browserDetect.browser +
			"&bv=" + FDCPLoader.browserDetect.version +
			"&fs=" + (FDCPLoader.hasFlash() ? "true" : "false");
			
		var e = document.createElement('script');
		    e.id = 'cpf_cpjs';
			e.src = jsloc;
			e.type = 'text/javascript';
			this.headNode.appendChild(e);
		
	},
    fdPrintWrapper: function(theContext){
        if(this.browserDetect.browser == "Explorer"){
            if(theContext && this.browserDetect.version >= 7){
              theContext.focus();
              theContext.document.execCommand('print', false, null);
            }
            else if(theContext) {
              theContext.print();
            }
            else{
              window.print();
            }
        }
        else{
            theContext = typeof theContext == "undefined" ? window : theContext;
            theContext.print();
        }
    },

	getFlashVersion : function(desc){
    	var matches = desc.match(/[\d]+/g);
    	matches.length = 1;  // To standardize IE vs FF
    	return matches.join('.');
    },
	
	hasFlash : function() {

		// Flash Player Version Detection - Rev 1.6
		// Detect Client Browser type
		// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
		var nn = navigator;
		var np = nn.plugins;
		var isIE  = (nn.appVersion.indexOf("MSIE") != -1) ? true : false;
		var isWin = (nn.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
		var isOpera = (nn.userAgent.indexOf("Opera") != -1) ? true : false;

		// NS/Opera version >= 3 check for Flash plugin in plugin array
		var flashVer;

		if (nn.plugins != null && np.length > 0) {
			if (np["Shockwave Flash 2.0"] || np["Shockwave Flash"]) {
				var swVer2 = np["Shockwave Flash 2.0"] ? " 2.0" : "";
				var descArray = np["Shockwave Flash" + swVer2].description.split(" ");
				var tempArrayMajor = descArray[2].split(".");			
				flashVer = tempArrayMajor[0] > 5 ? tempArrayMajor[0] : -1;
			}
		}
		else if ( isIE && isWin && !isOpera ) {
			var axo;
			var e;

			// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry
			try {
				// version will be set for 7.X or greater players
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
				flashVer = axo.GetVariable("$version");
			} catch (e) {
			}

			if (!flashVer)
			{
				try {
					// version will be set for 6.X players only
					axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					flashVer = "6";
				} catch (e) {
				}
			}
		}
		
		if (flashVer) {
			flashVer = this.getFlashVersion(flashVer);
		}

		return flashVer && flashVer > 0;
	},

	browserDetect : {
			init: function () {
				this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
				this.version = this.searchVersion(navigator.userAgent)
					|| this.searchVersion(navigator.appVersion)
					|| "an unknown version";
				this.OS = this.searchString(this.dataOS) || "an unknown OS";
			},
			searchString: function (data) {
				for (var i=0;i<data.length;i++)	{
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					this.versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},
			searchVersion: function (dataString) {
				var index = dataString.indexOf(this.versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
			},
			dataBrowser: [
				{
					string: navigator.userAgent,
					subString: "Chrome",
					identity: "Chrome"
				},
				{ 	string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				},
				{
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari",
					versionSearch: "Version"
				},
				{
					prop: window.opera,
					identity: "Opera"
				},
				{
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				},
				{
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				},
				{
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				},
				{
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				},
				{		// for newer Netscapes (6+)
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				},
				{
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				},
				{
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}
			],
			dataOS : [
				{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows"
				},
				{
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac"
				},
				{
					   string: navigator.userAgent,
					   subString: "iPhone",
					   identity: "iPhone/iPod"
			    },
				{
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux"
				}
			]

		},
		
		logServletLocation : 'http://cpf.cleanprint.net/cpf/cpf',
		
		logMessage : function(level, message, additionalParams) {
			
			try {
				if (this.logging) {
					var url    = window.location.href;
					var params = "action=logging&";
					
					if(typeof message != "undefined" && message != null){				
						params += "msg=" + encodeURIComponent(message) + "&"; 
					}
					
					params += "level=" + level + "&";
					params += "url=" + encodeURIComponent(url) + "&";
					
					var instanceUniq = (new Date).getTime();
					var instanceStr = String(instanceUniq++);
					
					params += "cacheKill=" + instanceStr;
					
					if(typeof additionalParams != 'undefined' && additionalParams != null) {
		
						for(var p in additionalParams) {
							params += '&' + encodeURIComponent(p) + '=' + encodeURIComponent(additionalParams[p]);
						}
					}
					
					var imageUrl = this.logServletLocation + "?" + params ;
					var log_image = new Image();
					log_image.src = imageUrl;
				}
			}
			catch (e)
			{
				// don't let a logging error kill the cleanprint
			}
		}
}

FDCPLoader.browserDetect.init();

function CleanPrintPrintHtml(pfLink, articleId) {
	return FDCPUrl(pfLink, true, 'text/html', 'printViewer', null, articleId);
}

function CleanPrintGeneratePdf(pfLink, articleId) {
	return FDCPUrl(pfLink, true, 'application/pdf', 'pdfViewer', null, articleId);
}

function CleanPrintSendEmail(pfLink, articleId) {
	return FDCPUrl(pfLink, true, 'email/html', 'emailViewer', null, articleId);
}

function FDCPUrl(pfLink, isViewer, mimeType, action, args, articleId) {
    try {
    	
    	if (typeof pfLink == "undefined" || pfLink == null || pfLink == "null") {
    		pfLink = window.location.href;
    	} else {
    		FDCPLoader.printerFriendly = 1;
    	}
    	
        isViewer  = typeof isViewer  == "undefined" ? true        				: isViewer;
        mimeType  = typeof mimeType  == "undefined" ? "text/html" 				: mimeType;
        action    = typeof action    == "undefined" ? "printViewer"				: action;
        args      = typeof args      == "undefined" ? ""          				: args;
        
        if (typeof articleId != "undefined" && articleId != null) {
        	 FDCPLoader.articleId = articleId;
       	}

        if(typeof cpbridge != 'undefined' && cpbridge != null) {
        	cpbridge.cleanPrint(pfLink, mimeType, action, FDCPLoader.tmax, null);
        }
        
    } catch(e) {
    	var str = "";
		for (var prop in e) { 
			str += prop+ "["+ e[prop]+ "], ";
		}
		str += "[" + e.toString() + "]";
    	FDCPLoader.logMessage("INFO", "FDCPUrl: "+str);
    	alert(e.message);
    }
    
    return false;
}

function onReady(handler){

	var called = false;

	function ready() {
		if (called) {
			return; 
		}
		
		called = true;
		handler();
	}

	// Bookmarklet
    if (document.getElementById("FDCPFBookmarklet") != null) {
		ready();
    }
        
	if (document.addEventListener) { // native event
		document.addEventListener("DOMContentLoaded", ready, false);
		
	} else if (document.attachEvent) {  // IE
		var isFrame = false; 
		try {
			isFrame = window.frameElement != null;
		} catch(e) {}

		// IE, the document is not inside a frame
		if ( document.documentElement.doScroll && !isFrame ) {
			function tryScroll(){
				if (called) {
					return; 
				}
				
				try {
					document.documentElement.doScroll("left");
					ready();
				} catch(e) {
					setTimeout(tryScroll, 10);
				}
			}
			tryScroll();
		}
	}

	// Old browsers
    if (window.addEventListener)
        window.addEventListener('load', ready, false);
    else if (window.attachEvent)
        window.attachEvent('onload', ready);
    else {
		var fn = window.onload; // very old browser, copy old onload
		window.onload = function() { // replace by new onload and call the old one
			fn && fn();
			ready();
		}
    }
    
    // force it to try after 8 seconds
    setTimeout(ready,8000);
}
FDCPLoader.pubKey = 'slate';
FDCPLoader.googleAnalytics = true;
onReady(function(){ FDCPLoader.loadcpjs(); });