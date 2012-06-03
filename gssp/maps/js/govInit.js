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
								var govText =$('#gov', this._currentTooltip).html()
								switch(govText){
									case '5': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-5');
										break;
									case '4': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-4');
										break;
									case '3': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-3');
										break;
									case '2': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-2');
										break;
									case '1': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-1');
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
								$('#toolTipContainer').append("<h3>About the Map</h3><p>This map shows 6 different variables mapped at the country level. Each variable is used to compute a composite 'Governance' score. <strong>Roll over or click a country to view individual indicators. Use the buttons above to switch between map layers for each indicator.</strong></p><p>Easy and convenient access to a variety of financial services is necessary in order to truly enable asset building among participants in social safety net programs. Over the past month, we have looked at the financial infrastructure and its utilization in countries with cash-transfer social protection programs - including Commercial Banks, Microfinance Institutions, ATMs and Point of Service terminals - as well as the extent to which national governments are committed to promoting financial inclusion. Altogether, these maps form a holistic picture of these countries' potential to successfully implement savings-linked social protection programs.</p><p>This fourth 'heat-mapping' looks at the ability of national governments to formulate and implement policies, as well as the level of stability and accountability within its borders. These variables and definitions are taken from the World Bank's 'Worldwide Governance Indicators.' Countries that are shaded more darkly have stronger governance scores, and the composite of these individual factors led to a country's overall score.</p>");							
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
									$('#toolTipContainer').append("<h3>About the Map</h3><p>This map shows 6 different variables mapped at the country level. Each variable is used to compute a composite 'Governance' score. <strong>Roll over or click a country to view individual indicators. Use the buttons above to switch between map layers for each indicator.</strong></p><p>Easy and convenient access to a variety of financial services is necessary in order to truly enable asset building among participants in social safety net programs. Over the past month, we have looked at the financial infrastructure and its utilization in countries with cash-transfer social protection programs - including Commercial Banks, Microfinance Institutions, ATMs and Point of Service terminals - as well as the extent to which national governments are committed to promoting financial inclusion. Altogether, these maps form a holistic picture of these countries' potential to successfully implement savings-linked social protection programs.</p><p>This fourth 'heat-mapping' looks at the ability of national governments to formulate and implement policies, as well as the level of stability and accountability within its borders. These variables and definitions are taken from the World Bank's 'Worldwide Governance Indicators.' Countries that are shaded more darkly have stronger governance scores, and the composite of these individual factors led to a country's overall score.</p>");									
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
								var govText =$('#gov', this._currentTooltip).html()
								switch(govText){
									case '5': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-5');
										break;
									case '4': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-4');
										break;
									case '3': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-3');
										break;
									case '2': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-2');
										break;
									case '1': 
										$('#gov', this._currentTooltip).addClass('numberAlert numberAlert-1');
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
		$('#toolTipContainer').append("<h3>About the Map</h3><p>This map shows 6 different variables mapped at the country level. Each variable is used to compute a composite 'Governance' score. <strong>Roll over or click a country to view individual indicators. Use the buttons above to switch between map layers for each indicator.</strong></p><p>Easy and convenient access to a variety of financial services is necessary in order to truly enable asset building among participants in social safety net programs. Over the past month, we have looked at the financial infrastructure and its utilization in countries with cash-transfer social protection programs - including Commercial Banks, Microfinance Institutions, ATMs and Point of Service terminals - as well as the extent to which national governments are committed to promoting financial inclusion. Altogether, these maps form a holistic picture of these countries' potential to successfully implement savings-linked social protection programs.</p><p>This fourth 'heat-mapping' looks at the ability of national governments to formulate and implement policies, as well as the level of stability and accountability within its borders. These variables and definitions are taken from the World Bank's 'Worldwide Governance Indicators.' Countries that are shaded more darkly have stronger governance scores, and the composite of these individual factors led to a country's overall score.</p>");
	}