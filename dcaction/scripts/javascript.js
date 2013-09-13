$(document).ready(function() {
//  var map = L.map('map', {
//	center: [38.9049,-77.0128],
//	zoom: 11,
//	minZoom: 12,
//	maxZoom: 13,
//	zoomControl: false
//  });
//  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
//  var zoomControl = new L.Control.Zoom({ position: 'topright'} );
//  zoomControl.addTo(map);
  var map = L.mapbox.map('map', 'mapbox.dc-bright')
	.setView([38.9049,-77.0128], 11);
	map.addLayer(L.mapbox.tileLayer('newamerica.dc-action-neighborhoods'));
	
	$.get('data/combined_nick.json', function(schools){

		var allocs_kg_5 = _.pluck(schools['elementary'], 'alloc_per_student')
		var scale = d3.scale.linear()
		  .domain([_.min(allocs_kg_5), _.max(allocs_kg_5)])
		  .range([2,20])
		  		  
		var allocs_6_8 = _.pluck(schools['middle'], 'alloc_per_student')
		var scale2 = d3.scale.linear()
		  .domain([_.min(allocs_6_8), _.max(allocs_6_8)])
		  .range([2,20])
		  		  
		var allocs_9_12 = _.pluck(schools['high'], 'alloc_per_student')
		var scale3 = d3.scale.linear()
		  .domain([_.min(allocs_9_12), _.max(allocs_9_12)])
		  .range([2,20])
		 	 							
		schools.elementary.forEach(function(school){
			if ( school.lat !== undefined && school.long !== undefined){
				var marker = new L.CircleMarker([school.lat, school.long], {fillColor: '#FF0000',color: 'black'}).setRadius(scale(school.alloc_per_student)).addTo(map)
			}
		});
		
		schools.middle.forEach(function(school){
			if ( school.lat !== undefined && school.long !== undefined){
				var marker = new L.CircleMarker([school.lat, school.long], {fillColor: '#00FF00',color: 'black'}).setRadius(scale2(school.alloc_per_student)).addTo(map)
			}
		});
		
		schools.high.forEach(function(school){
			if ( school.lat !== undefined && school.long !== undefined){
				var marker = new L.CircleMarker([school.lat, school.long], {fillColor: '#0000FF',color: 'black'}).setRadius(scale3(school.alloc_per_student)).addTo(map)
			}
		});
		
	})
//  var layer = L.mapbox.tileLayer('newamerica.dc-action-neighborhoods')
//  .on('load', function() {
//    // get TileJSON data from the loaded layer
//    var TileJSON = layer.getTileJSON();
//});
});