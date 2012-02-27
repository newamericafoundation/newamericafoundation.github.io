	var cycleMap, userCenter, userZoom;
	var urls = {
		'2011':'http://a.tiles.mapbox.com/v3/newamerica.gssp.jsonp'
	};
	// buildMap(urls[2011], 'layerMain');
	
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
				
	    		wax.mm.interaction(m, tilejson);
		wax.mm.legend(m, tilejson).appendTo(m.parent);
		wax.mm.zoomer(m, tilejson).appendTo(m.parent);	
		if(userCenter && userZoom){
			m.setCenterZoom(userCenter, userZoom);
		}else{
			// m.setCenterZoom(new mm.Location(38.457303314891604, -93.99900468749993), 2);
			m.setCenterZoom(new mm.Location(0, 0), 2);
			easey.slow(m,{location:new mm.Location(0, 0),time: 2000,zoom:2 });
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