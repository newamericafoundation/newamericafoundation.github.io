var cycleMap, userCenter, userZoom;;

function buildMap(url, container){	
	var m;	
	// $('#'+container+'-layers').fadeOut(2000, function(){
	// 		$(this).remove();
	// 	});	
	$('.wax-legends').remove();
	$('.zoomer').remove();
	$('.wax-tooltip .wax-tooltip-0 .wax-popup').remove();
	
	wax.tilejson(url, function(tilejson) {
		tilejson.minzoom = 6;
		tilejson.maxzoom = 9;
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
								$('#toolTipContainer').append('<span class="span3 bigNumberHeader"><h2>Afghanistan</h2><span>Number of Incidents: <h5 id="iu">43</h5></span></span><span class="span2"><div class="row numberHeader"><span><h5>NATO Deaths:</h5><span class="span2 numberTooltip"><span>90</span></span></span></div><div class="row numberHeader"><span><h5>NATO Wounded:</h5><span class="span2 numberTooltip"><span>76</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Afghan Police:</h5><span class="span2 numberTooltip"><span>17</span></span></span></div><div class="row numberHeader"><span><h5>Incidents by Afghan Military:</h5><span class="span2 numberTooltip"><span>25</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Unknown:</h5><span class="span2 numberTooltip"><span>1</span></span></span></div>');
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
									$('#toolTipContainer').append('<span class="span3 bigNumberHeader"><h2>Afghanistan</h2><span>Number of Incidents: <h5 id="iu">34</h5></span></span><span class="span2"><div class="row numberHeader"><span><h5>NATO Deaths:</h5><span class="span2 numberTooltip"><span>81</span></span></span></div><div class="row numberHeader"><span><h5>NATO Wounded:</h5><span class="span2 numberTooltip"><span>55</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Afghan Police:</h5><span class="span2 numberTooltip"><span>12</span></span></span></div><div class="row numberHeader"><span><h5>Incidents by Afghan Military:</h5><span class="span2 numberTooltip"><span>22</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Unknown:</h5><span class="span2 numberTooltip"><span>1</span></span></span></div>');
							
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

		// m.setCenterZoom(new mm.Location(38.457303314891604, -93.99900468749993), 2);
		m.setCenterZoom(new mm.Location(34.2890,66.698), 6);
		//easey.slow(m,{location:new mm.Location(0, 0),time: 2000,zoom:2 });
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
		$('#toolTipContainer').append('<span class="span3 bigNumberHeader"><h2>Afghanistan</h2><span>Number of Incidents: <h5 id="iu">34</h5></span></span><span class="span2"><div class="row numberHeader"><span><h5>NATO Deaths:</h5><span class="span2 numberTooltip"><span>81</span></span></span></div><div class="row numberHeader"><span><h5>NATO Wounded:</h5><span class="span2 numberTooltip"><span>55</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Afghan Police:</h5><span class="span2 numberTooltip"><span>12</span></span></span></div><div class="row numberHeader"><span><h5>Incidents by Afghan Military:</h5><span class="span2 numberTooltip"><span>22</span></span></span></div></span><span class="span3"><div class="row numberHeader"><span><h5>Incidents by Unknown:</h5><span class="span2 numberTooltip"><span>1</span></span></span></div>');
}