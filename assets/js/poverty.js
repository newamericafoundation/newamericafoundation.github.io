(function ($) { 
$(document).ready(function() {
	var cycleMap, userCenter, userZoom;
	var urls = {
		'2004':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.county-poverty04',
		'2005':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.county-poverty05',
		'2006':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.county-poverty06',
		'2007':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.county-poverty07',
		'2008':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.county-poverty08',
		'2009':'http://tiles.mapbox.com/newamerica/api/Tileset/mapbox.world-light,newamerica.us-poverty09'
	};
	buildMap(urls[2009]);
	cycleMap = setTimeout(mapFade, 6000);
	// build the navigation
	for(url in urls){
		if(url == '2009'){
			$('#mapControls').append('<div class="layerButton"><span class="activeMap" id="'+url+'"><button>'+url+'</button></span></div>');
		}else{
			$('#mapControls').append('<div class="layerButton"><span id="'+url+'"><button>'+url+'</button></span></div>');
		}
		
	};
	$('#pauseButton').click(function() { 
		clearTimeout(cycleMap);
		$('#pauseButton').toggle();
	 	$('#resumeButton').toggle();				
	});
	$('#resumeButton').click(function() { 
		cycleMap = setTimeout(mapFade, 6000);
	    // $('#mainSlider').cycle('resume');
   		$('#resumeButton').toggle();
   	 	$('#pauseButton').toggle();				
	});
	$('#mainMap').bind({
		mouseenter:function(){
			clearTimeout(cycleMap);
		},
		mouseleave:function(){
			cycleMap = setTimeout(mapFade, 6000);
		}
	});
	$('#mapControls').bind({
		mouseenter:function(){
			clearTimeout(cycleMap);
		},
		mouseleave:function(){
			cycleMap = setTimeout(mapFade, 6000);
		}
	});
	$('div.layerButton').click(function(){
		buildMap(urls[$(this).children('span').text()]);
		$('span').removeClass('activeMap');
		$(this).children('span').addClass('activeMap');
	});

	function mapFade(){
		var newMapIndex;
		var currentMap = $('.activeMap').attr('id');
		currentMap = currentMap-1;
		if(currentMap != '2003'){
			$('span').removeClass('activeMap');
			$('span#'+currentMap).addClass('activeMap');
			// this will cycle
			buildMap(urls[currentMap]);
			cycleMap = setTimeout(mapFade, 6000);
		}else{
			currentMap = '2003';
			buildMap(urls[2009]);
			$('span').removeClass('activeMap');
			$('#2009').addClass('activeMap');
			cycleMap = setTimeout(mapFade, 6000);
		}
	}
	
	//separate this out into an initialize and a refresh
	function buildMap(url){	
		$('#mainMap-layers').fadeOut(2000, function(){
			$(this).remove();
		});	
		$('.wax-legends').remove();
		$('.zoomer').remove();	
		$('.wax-popup').remove();
			
		wax.tilejson(url, function(tilejson) {
			var mm = com.modestmaps;
			var m = new mm.Map('mainMap',
				new wax.mm.connector(tilejson));
		tilejson.minzoom = 3;
	    tilejson.maxzoom = 9;
		wax.mm.interaction(m, tilejson).remove();
		wax.mm.interaction(m, tilejson)
		wax.mm.legend(m, tilejson).appendTo(m.parent);
		wax.mm.zoomer(m, tilejson).appendTo(m.parent);	
		if(userCenter && userZoom){
			m.setCenterZoom(userCenter, userZoom);
		}else{
			m.setCenterZoom(new mm.Location(38.457303314891604, -93.99900468749993), 2);
			//add the slow zoom in using easey
			easey.slow(m,{location:new mm.Location(38.457303314891604, -93.99900468749993),time: 2000,zoom:4 });
		}
			m.addCallback('drawn', function(m) {
			    // respond to new center: set vars so map will stay put as the layers change
				userCenter = m.getCenter();
				userZoom = m.getZoom();
			});
		});
		// $('#mainMap').fadeIn('fast');	
	}
});
}(jQuery));