	var cycleMap, userCenter, userZoom;;
	
	function buildMap(url, container){	
		var m;	
		$('#'+container+'-layers').fadeOut(2000, function(){
			$(this).remove();
		});	
		$('.wax-legends').remove();
		$('.zoomer').remove();
		$('.wax-tooltip .wax-tooltip-0 .wax-popup').remove();
		
		wax.tilejson(url, function(tilejson) {
			tilejson.minzoom = 2;
			tilejson.maxzoom = 5;
			var mm = com.modestmaps;
			m = new mm.Map(container,
				new wax.mm.connector(tilejson));
				
	    		wax.mm.interaction(m, tilejson).remove();
				wax.mm.interaction(m, tilejson, {
				  callbacks:
							{	// Show a tooltip.
								over: function(feature, context) {

								    if (!feature) return;
								    context.style.cursor = 'pointer';

								    if (this.isPopup(this._currentTooltip)) {
								        return;
								    } else {
								        this._currentTooltip = this.getTooltip(feature, context)
								    }
									var newWidth=100;
									var piText =$('#piCat', this._currentTooltip).html()
									switch(piText){
										case 'High': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-high');
											break;
										case 'Medium': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-medium');
											break;
										case 'Low': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-low');
											break;
									}
									
									$('.catNumber', this._currentTooltip).each(function(k){
										var theNumber = Math.round($(this).html()).toFixed(0);
										$(this).parent('.numberWrapper').css('width','150px');
										var newWidth = Math.round(($(this).html()*3)*10);
										newWidth += 'px'
										$(this).addClass('span1')
										$(this).css({
											'width':newWidth
										});
										$(this).html(theNumber);
									});
								},
								out: function(context) {
								    context.style.cursor = 'default';

								    if (this.isPopup(this._currentTooltip)) {
								        return;
								    } else if (this._currentTooltip) {
								        this.hideTooltip(this._currentTooltip);
								        this._currentTooltip = undefined;
								    }
									$('#toolTipContainer').empty();
									$('#toolTipContainer').append("<h3>About the Map</h3><p><strong>Roll over or click a country. Use the buttons above to change the map layers.</strong></p><p>In order to truly enable asset building among participants in social safety net programs, we must provide easy and convenient access to electronic alternatives. To get an idea of the state of the financial infrastructure in countries around the world with social protection programs that include asset transfers, NAF's Global Asset Project has taken a helicopter view of their payment infrastructures - including Commercial Banks, Microfinance Institutions, ATMs, Point of Service terminals - in addition to the human infrastructure in place and the potential for banking via innovating mediums such as mobiles.  This is our first 'heat-mapping' of this composite analysis which illustrates whether these countries have low, medium, or highly developed infrastructure, in addition to the descriptions/definitions of each variable used. A country's score of 1-5 corresponds to its relative quintile; that is to say, India's score on ATM's per 100,000 adults is a '2' because it's data falls between the 20th and 40th percentile.</p>");
								},
								isPopup: function(el) {
								    return el && el.className.indexOf('wax-popup') !== -1;
								},
								getTooltip: function(feature, context) {
								    var tooltip = document.createElement('div');
								    tooltip.className = 'wax-tooltip wax-tooltip-0';
								    tooltip.innerHTML = feature;
									$('#toolTipContainer').empty();
									$('#toolTipContainer').append(tooltip);
								    return tooltip;
								},
								hideTooltip: function(el) {
								    if (!el) return;
								    var event,
								        remove = function() {
								        if (this.parentNode) this.parentNode.removeChild(this);
								    };

								    if (el.style['-webkit-transition'] !== undefined && this.animationOut) {
								        event = 'webkitTransitionEnd';
								    } else if (el.style.MozTransition !== undefined && this.animationOut) {
								        event = 'transitionend';
								    }

								    if (event) {
								        // This code assumes that transform-supporting browsers
								        // also support proper events. IE9 does both.
								        el.addEventListener(event, remove, false);
								        el.addEventListener('transitionend', remove, false);
								        el.className += ' ' + this.animationOut;
								    } else {
								        if (el.parentNode) el.parentNode.removeChild(el);
										// $('.intro').css('display','block');
								    }
								},
								click: function(feature, context) {
								    // Hide any current tooltips.
								    if (this._currentTooltip) {
								        this.hideTooltip(this._currentTooltip);
								        this._currentTooltip = undefined;
								    }

								    var tooltip = this.getTooltip(feature, context);
								    tooltip.className += ' wax-popup';
								    tooltip.innerHTML = feature;

								    var close = document.createElement('a');
								    close.href = '#close';
								    close.className = 'close';
								    close.innerHTML = '';
									tooltip.appendChild(close);
								    

								    var closeClick = wax.util.bind(function(ev) {
								        this.hideTooltip(tooltip);
								        this._currentTooltip = undefined;
								        ev.returnValue = false; // Prevents hash change.
								        if (ev.stopPropagation) ev.stopPropagation();
								        if (ev.preventDefault) ev.preventDefault();
								        return false;
								    }, this);

								    // IE compatibility.
								    if (close.addEventListener) {
								        close.addEventListener('click', closeClick, false);
								    } else if (close.attachEvent) {
								        close.attachEvent('onclick', closeClick);
								    }

								    this._currentTooltip = tooltip;
								
									var newWidth=100;
									var piText =$('#piCat', this._currentTooltip).html()
									switch(piText){
										case 'High': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-high');
											break;
										case 'Medium': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-medium');
											break;2
										case 'Low': 
											$('#piCat', this._currentTooltip).addClass('numberAlert numberAlert-low');
											break;
									}
									
									$('.catNumber', this._currentTooltip).each(function(k){
										var theNumber = Math.round($(this).html()).toFixed(0);
										$(this).parent('.numberWrapper').css('width','150px')
										var newWidth = Math.round(($(this).html()*3)*10);
										newWidth += 'px'
										$(this).addClass('span1')
										$(this).css({
											'width':newWidth
										});
										$(this).html(theNumber);
									});
									$(".scroll").click(function(event){
										var scrollId = $(this).attr('rel');
										event.preventDefault();
										if(scrollId == 'home'){
											$('html,body').animate({scrollTop:0}, 500);
										}else{
											$('html,body').animate({scrollTop:$('#'+scrollId).offset().top-50}, 500);
										}

									});
								}
							}
				});
		wax.mm.legend(m, tilejson).appendTo(m.parent);
		wax.mm.zoomer(m, tilejson).appendTo(m.parent);	
		if(userCenter && userZoom){
			m.setCenterZoom(userCenter, userZoom);
		}else{
			// m.setCenterZoom(new mm.Location(38.457303314891604, -93.99900468749993), 2);
			m.setCenterZoom(new mm.Location(0, 0), 2);
			//easey.slow(m,{location:new mm.Location(0, 0),time: 2000,zoom:2 });
		}
			m.addCallback('drawn', function(m) {
			    // respond to new center: set vars so map will stay put as the layers change
				userCenter = m.getCenter();
				userZoom = m.getZoom();
			});
		});			
	}
	// Share
	$('a.share').click(function(e){
		e.preventDefault();
		$('#embed-code-field textarea').attr('value',"<iframe width='650' height='500' frameBorder='0' src='http://a.tiles.mapbox.com/v3/newamerica.map-6erg384i.html#4/55/20'></iframe>");
		$('.wax-share').css('display', 'block');
		$('#embed-code')[0].tabindex = 0;
		$('#embed-code')[0].select();
	});
	
	$('a.close').click(function(e) {closer(e)});
	
	function closer(e) {
	        if (e) {e.preventDefault();}
	        $('.wax-share').css('display', 'none');
			$('#toolTipContainer').append("<h3>About the Map</h3><p><strong>Roll over or click a country. Use the buttons above to change the map layers.</strong></p><p>In order to truly enable asset building among participants in social safety net programs, we must provide easy and convenient access to electronic alternatives. To get an idea of the state of the financial infrastructure in countries around the world with social protection programs that include asset transfers, NAF's Global Asset Project has taken a helicopter view of their payment infrastructures - including Commercial Banks, Microfinance Institutions, ATMs, Point of Service terminals - in addition to the human infrastructure in place and the potential for banking via innovating mediums such as mobiles.  This is our first 'heat-mapping' of this composite analysis which illustrates whether these countries have low, medium, or highly developed infrastructure, in addition to the descriptions/definitions of each variable used. A country's score of 1-5 corresponds to its relative quintile; that is to say, India's score on ATM's per 100,000 adults is a '2' because it's data falls between the 20th and 40th percentile.</p>");
	
	}