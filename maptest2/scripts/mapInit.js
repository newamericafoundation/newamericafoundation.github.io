$(document).ready(function() {
	var cycleMap, userCenter, userZoom;
	var urls = {
		'2011':'http://a.tiles.mapbox.com/v3/newamerica.map-of-the-week-poverty-change.jsonp'
	};
	buildMap(urls[2011]);
	
	function buildMap(url){	
		var m;	
		console.log(url)
		$('#mainMap-layers').fadeOut(2000, function(){
			$(this).remove();
		});	
		$('.wax-legends').remove();
		$('.zoomer').remove();
		$('.wax-tooltip .wax-tooltip-0 .wax-popup').remove();
		
		wax.tilejson(url, function(tilejson) {
			tilejson.minzoom = 4;
			tilejson.maxzoom = 6;
			var mm = com.modestmaps;
			m = new mm.Map('mainMap',
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
							buildChart()
							$('#chartContainer').show();
						$('.debt-gdp-timeline').children('span.chart').empty();
						},
						out: function(context) {
						    context.style.cursor = 'default';

						    if (this.isPopup(this._currentTooltip)) {
						        return;
						    } else if (this._currentTooltip) {
						        this.hideTooltip(this._currentTooltip);
						        this._currentTooltip = undefined;
						    }
						$('.mainLegend >.mainToolTip').empty();
						$('#chartContainer').hide();

						},
						isPopup: function(el) {
						    return el && el.className.indexOf('wax-popup') !== -1;
						},
						getTooltip: function(feature, context) {
						    var tooltip = document.createElement('div');
						    tooltip.className = 'wax-tooltip wax-tooltip-0';
						    tooltip.innerHTML = feature;
							$('.intro').css('display','none');
						
						$(tooltip.innerHTML).children('.debt-gdp-timeline').children('span.chart').empty();
						$('.mainLegend').append(tooltip);
						    // context.appendChild(tooltip);
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
								$('.intro').css('display','block');
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
						    close.innerHTML = 'Close';
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
						buildChart()
						$('.debt-gdp-timeline').children('span.chart').empty();
						$('#chartContainer').show();
						}
					}
		});
		$('span.chart').css('display', 'none');
		wax.mm.legend(m, tilejson).appendTo(m.parent);
		wax.mm.zoomer(m, tilejson).appendTo(m.parent);	
		if(userCenter && userZoom){
			m.setCenterZoom(userCenter, userZoom);
		}else{
			m.setCenterZoom(new mm.Location(38.457303314891604, -93.99900468749993), 2);
			easey.slow(m,{location:new mm.Location(50, 20),time: 2000,zoom:4 });
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
	}
	
	var chart;
	
	function buildChart(){
		var chartData = new Array;
		var dataHolder = $('#graphMain').text();
		dataHolder = dataHolder.replace('[','');
		dataHolder = dataHolder.replace(']','');
		var dataSplit = dataHolder.split(",");
		
		for(val in dataSplit){
			chartData.push(parseFloat(dataSplit[val]))
		}
		// console.log($('.wax-tooltip .waxtooltip-0'))
		chart = new Highcharts.Chart({
			chart: {
				renderTo: 'chartContainer',
				defaultSeriesType: 'area',
				animation: false,
				zoomType: 'y'
			},
			title: {
				text: 'Debt to GDP, 2000-2016'
			},
			subtitle: {
				// text: 'Source:'
			},
			xAxis: {
				categories: ['2000', '2001', '2002', '2003', '2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'],
				tickmarkPlacement: 'on',
				startOnTick: true,
				endOnTick: true,
				labels: {
					step: 5	
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				labels: {
					formatter: function() {
						return this.value+'%';
					}
				},
				plotLines: [{
					color: '#EC1C24',
					value: 100,
					label: {
						text: "100% of GDP",
						style: {
							color: '#EC1C24',
							fontWeight: 'bold'
						},
					},
					width: 1,
					zIndex: 90,
					dashString: 'dash'
				}],
				max:130
			},
			tooltip: {
				formatter: function() {
					return ''+
						 this.x +': '+ Highcharts.numberFormat((this.y), 2, '.')+'%';
				}
			},
			legend:{
				enabled:false
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
				}
			},
			series: [{
				animation: false,
				name: 'Sovereign Debt',
				data: chartData
			}]
		});
	}
});