$(document).ready(function() {
  var sliderControl = null;
  var airLayer = new L.LayerGroup();
  var droneLayer = new L.LayerGroup();
  var layer02 = new L.LayerGroup();
  var layer09 = new L.LayerGroup();
  var layer10 = new L.LayerGroup();
  var layer11 = new L.LayerGroup();
  var layer12 = new L.LayerGroup();
  var layer13 = new L.LayerGroup();
  
  var map = L.map('map', {
	center: [13.5,47],
	zoom: 6,
	minZoom: 6,
	maxZoom: 10,
	zoomControl: false,
	layers: [airLayer, droneLayer],
  });
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  var zoomControl = new L.Control.Zoom({ position: 'topright'} );	
  zoomControl.addTo(map);  
  $.getJSON('data/yemen.json', function(yemen){
	  yemen.strikes.forEach(function(strike){
		var scale = d3.scale.linear()
		  .domain([0,67])
		  .range([2,100])
		var date = new Date(strike.time).getFullYear();
		var location = new L.LatLng(strike.lat, strike.lon);
		if (strike.field_strike_type=="Drone Strike"){
		  droneMarker = new L.circleMarker(location, {
			weight: 1,
			color: 'black',
			fillOpacity: 0.3,
			fillColor: '#4C4C40',
		  })
		  droneMarker.addTo(droneLayer)
		  droneMarker.setRadius(scale(strike.total_avg));
		  droneMarker.bindPopup('<h2><a href="http://natsec.newamerica.net/drones/yemen/' + strike.guid + '"> ' + strike.date + ' </a></h2><ul><li><strong>Target</strong>: ' + strike.target_org + '</li><li><strong>Location</strong>: ' + strike.village + ' in ' + strike.province + '</li><li>Between ' + strike.total_low + ' and ' + strike.total_high + ' killed.</li></ul>')
		  if (date == 2002) {
			droneMarker.addTo(layer02)  
		  }
		  if (date == 2009) {
			droneMarker.addTo(layer09)  
		  }
		  if (date == 2010) {
			droneMarker.addTo(layer10)  
		  }
		  if (date == 2011) {
			droneMarker.addTo(layer11)  
		  }
		  if (date == 2012) {
			droneMarker.addTo(layer12)  
		  }
		  if (date == 2013) {
			droneMarker.addTo(layer13)  
		  }
		}
		else if (strike.field_strike_type=="Air Strike"){
		  airMarker = new L.circleMarker(location, {
			weight: 1,
			color: 'black',
			fillOpacity: 0.3,
			fillColor: '#FFFF00',
		  })
		  airMarker.addTo(airLayer)
		  airMarker.setRadius(scale(strike.total_avg));
		  airMarker.bindPopup('<h2><a href="http://natsec.newamerica.net/drones/yemen/' + strike.guid + '"> ' + strike.date + ' </a></h2><ul><li><strong>Target</strong>: ' + strike.target_org + '</li><li><strong>Location</strong>: ' + strike.village + ' in ' + strike.province + '</li><li>Between ' + strike.total_low + ' and ' + strike.total_high + ' killed.</li></ul>')
		  if (date == 2002) {
			airMarker.addTo(layer02)  
		  }
		  if (date == 2009) {
			airMarker.addTo(layer09)  
		  }
		  if (date == 2010) {
			airMarker.addTo(layer10)  
		  }
		  if (date == 2011) {
			airMarker.addTo(layer11)  
		  }
		  if (date == 2012) {
			airMarker.addTo(layer12)  
		  }
		  if (date == 2013) {
			airMarker.addTo(layer13)  
		  }
		}
		
//		$("#slider").slider({
//			value: 1304553600,
//			min: 1304553600,
//			max: 1377806400,
//			step: 86400,
//			slide: function (e, ui) {
//				yemen.features.forEach(function(feature){
//				  var scale = d3.scale.linear()
//					.domain([0, 67])
//					.range([2,100])
//				  var date = new Date(feature.properties.date).getFullYear();
//				  var location = new L.LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
//				  if (feature.properties.time > ui.value){
//					droneMarker = new L.circleMarker(location, {
//					  weight: 1,
//					  color: 'black',
//					  fillOpacity: 0.3,
//					  fillColor: '#4C4C40',
//					})
//					droneMarker.addTo(droneLayer)
//					droneMarker.setRadius(scale(feature.properties.total_avg));
//					console.log(location)
//				  }
//				});
//			}
//		});
		
		
	  })
	  
	  
  });
  
  $('button#air').click(function (e) {
	map.removeLayer(droneLayer);
	map.addLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#drone').click(function (e) {
	map.addLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#all').click(function (e) {
	map.addLayer(droneLayer);
	map.addLayer(airLayer);
	map.addLayer(layer02);
	map.addLayer(layer09);
	map.addLayer(layer10);
	map.addLayer(layer11);
	map.addLayer(layer12);
	map.addLayer(layer13);
  });
  $('button#btn02').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.addLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#btn09').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.addLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#btn10').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.addLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#btn11').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.addLayer(layer11);
	map.removeLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#btn12').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.addLayer(layer12);
	map.removeLayer(layer13);
  });
  $('button#btn13').click(function (e) {
	map.removeLayer(droneLayer);
	map.removeLayer(airLayer);
	map.removeLayer(layer02);
	map.removeLayer(layer09);
	map.removeLayer(layer10);
	map.removeLayer(layer11);
	map.removeLayer(layer12);
	map.addLayer(layer13);
  });
    
});