// WapoLabs client footer scripts
//document.write("<div id='fb-root'></div>");
$wpjQ("div:last").after("<div id='fb-root'></div>");



window.fbAsyncInit = function() {
  FB.init({appId: wapoEnv.fb_app_id, status: true,
	   cookie: true, xfbml: true
  });

    /* All the events registered */
    FB.Event.subscribe('auth.login', function(response) {
	// do something with response
	if(typeof(fbLoginCallback) !== 'undefined'){
	    fbLoginCallback();
	}
    });
    FB.Event.subscribe('auth.logout', function(response) {
	// do something with response
	if(typeof(fbLogoutCallback) !== 'undefined'){
	    fbLogoutCallback();
	}
    });
    
    FB.getLoginStatus(function(response) {
	if (response.session) {
	    // logged in and connected user, someone you know
	    if(typeof(fbLoginCallback) !== 'undefined'){
		fbLoginCallback();
	    }
	} else {
	    if(typeof(fbLogoutCallback) !== 'undefined'){
		fbLogoutCallback();
	    }
	}
    });

  if(typeof(wapoVisitor) != 'undefined'){
    wapoVisitor.loginFacebook();
  }
};

(function() {
  var e = document.createElement('script');
  e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
  e.async = true;
  document.getElementById('fb-root').appendChild(e);
}());
