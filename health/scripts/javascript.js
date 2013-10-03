	var min_21_layer = new L.LayerGroup();
	var min_22_layer = new L.LayerGroup();
	var min_23_layer = new L.LayerGroup();
	var min_24_layer = new L.LayerGroup();
	var min_25_layer = new L.LayerGroup();
	var min_26_layer = new L.LayerGroup();
	var min_27_layer = new L.LayerGroup();
	var min_28_layer = new L.LayerGroup();
	var min_29_layer = new L.LayerGroup();
	var min_30_layer = new L.LayerGroup();
	var min_31_layer = new L.LayerGroup();
	var min_32_layer = new L.LayerGroup();
	var min_33_layer = new L.LayerGroup();
	var min_34_layer = new L.LayerGroup();
	var min_35_layer = new L.LayerGroup();
	var min_36_layer = new L.LayerGroup();
	var min_37_layer = new L.LayerGroup();
	var min_38_layer = new L.LayerGroup();
	var min_39_layer = new L.LayerGroup();
	var min_40_layer = new L.LayerGroup();
	var min_41_layer = new L.LayerGroup();
	var min_42_layer = new L.LayerGroup();
	var min_43_layer = new L.LayerGroup();
	var min_44_layer = new L.LayerGroup();
	var min_45_layer = new L.LayerGroup();
	var min_46_layer = new L.LayerGroup();
	var min_47_layer = new L.LayerGroup();
	var min_48_layer = new L.LayerGroup();
	var min_49_layer = new L.LayerGroup();
	var min_50_layer = new L.LayerGroup();
	var min_51_layer = new L.LayerGroup();
	var min_52_layer = new L.LayerGroup();
	var min_53_layer = new L.LayerGroup();
	var min_54_layer = new L.LayerGroup();
	var min_55_layer = new L.LayerGroup();
	var min_56_layer = new L.LayerGroup();
	var min_57_layer = new L.LayerGroup();
	var min_58_layer = new L.LayerGroup();
	var min_59_layer = new L.LayerGroup();
	var min_60_layer = new L.LayerGroup();
	var min_61_layer = new L.LayerGroup();
	var min_62_layer = new L.LayerGroup();
	var min_63_layer = new L.LayerGroup();
	var min_64_layer = new L.LayerGroup();

	$.get('data/health.json', function(health){
		var scale = d3.scale.linear().domain([0,200]).range([0,40])
		  
		health.states.forEach(function(point){
			if (point.min_21 !== null){
				var marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_21)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_21+"</strong></p>").addTo(min_21_layer)
//				var min_22_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_22)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_22+"</strong></p>").addTo(min_22_layer)
//				var min_23_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_23)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_23+"</strong></p>").addTo(min_23_layer)
//				var min_24_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_24)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_24+"</strong></p>").addTo(min_24_layer)
//				var min_25_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_25)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_25+"</strong></p>").addTo(min_25_layer)
//				var min_26_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_26)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_26+"</strong></p>").addTo(min_26_layer)
//				var min_27_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_27)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_27+"</strong></p>").addTo(min_27_layer)
//				var min_28_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_28)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_28+"</strong></p>").addTo(min_28_layer)
//				var min_29_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_29)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_29+"</strong></p>").addTo(min_29_layer)
//				var min_30_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_30)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_30+"</strong></p>").addTo(min_30_layer)
//				var min_31_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_31)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_31+"</strong></p>").addTo(min_31_layer)
//				var min_32_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_32)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_32+"</strong></p>").addTo(min_32_layer)
//				var min_33_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_33)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_33+"</strong></p>").addTo(min_33_layer)
//				var min_34_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_34)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_34+"</strong></p>").addTo(min_34_layer)
//				var min_35_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_35)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_35+"</strong></p>").addTo(min_35_layer)
//				var min_36_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_36)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_36+"</strong></p>").addTo(min_36_layer)
//				var min_37_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_37)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_37+"</strong></p>").addTo(min_37_layer)
//				var min_38_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_38)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_38+"</strong></p>").addTo(min_38_layer)
//				var min_39_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_39)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_39+"</strong></p>").addTo(min_39_layer)
//				var min_40_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_40)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_40+"</strong></p>").addTo(min_40_layer)
//				var min_41_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_41)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_41+"</strong></p>").addTo(min_41_layer)
//				var min_42_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_42)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_42+"</strong></p>").addTo(min_42_layer)
//				var min_43_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_43)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_43+"</strong></p>").addTo(min_43_layer)
//				var min_44_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_44)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_44+"</strong></p>").addTo(min_44_layer)
//				var min_45_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_45)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_45+"</strong></p>").addTo(min_45_layer)
//				var min_46_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_46)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_46+"</strong></p>").addTo(min_46_layer)
//				var min_47_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_47)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_47+"</strong></p>").addTo(min_47_layer)
//				var min_48_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_48)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_48+"</strong></p>").addTo(min_48_layer)
//				var min_49_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_49)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_49+"</strong></p>").addTo(min_49_layer)
//				var min_50_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_50)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_50+"</strong></p>").addTo(min_50_layer)
//				var min_51_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_51)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_51+"</strong></p>").addTo(min_51_layer)
//				var min_52_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_52)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_52+"</strong></p>").addTo(min_52_layer)
//				var min_53_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_53)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_53+"</strong></p>").addTo(min_53_layer)
//				var min_54_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_54)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_54+"</strong></p>").addTo(min_54_layer)
//				var min_55_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_55)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_55+"</strong></p>").addTo(min_55_layer)
//				var min_56_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_56)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_56+"</strong></p>").addTo(min_56_layer)
//				var min_57_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_57)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_57+"</strong></p>").addTo(min_57_layer)
//				var min_58_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_58)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_58+"</strong></p>").addTo(min_58_layer)
//				var min_59_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_59)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_59+"</strong></p>").addTo(min_59_layer)
//				var min_60_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_60)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_60+"</strong></p>").addTo(min_60_layer)
//				var min_61_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_61)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_61+"</strong></p>").addTo(min_61_layer)
//				var min_62_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_62)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_62+"</strong></p>").addTo(min_62_layer)
//				var min_63_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_63)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_63+"</strong></p>").addTo(min_63_layer)
//				var min_64_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_64)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_64+"</strong></p>").addTo(min_64_layer)
			}
		});
	
$(document).ready(function() {

  function clearMap() {
	  for(i in map._layers) {
		  if(map._layers[i]._path != undefined) {
			  try {
				  map.removeLayer(map._layers[i]);
			  }
			  catch(e) {
			  }
		  }
	  }
  }
  
  function newMapLayer(layer) {
	map.addLayer(layer)  
  }
  
  var map = L.map('map', {
	center: [38.36,-92.48],
	zoom: 4,
	minZoom: 4,
	maxZoom: 7,
	layers: [min_21_layer],
	zoomControl: true
  });
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
  var zoomControl = new L.Control.Zoom({ position: 'topright'} );	
  $( "#slider" ).slider({
			value:21,
			min: 21,
			max: 64,
			step: 1,
			slide: function(event, ui) {
				var scale = d3.scale.linear().domain([0,200]).range([0,40])
				clearMap(map);
//				newMapLayer(min_33_layer)
//				console.log(mapLayers[ui.value])
				if (ui.value == 21){
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_21_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_21)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if (ui.value == 22){
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_22_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_22)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 23) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_23_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_23)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 24) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_24_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_24)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 25) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_25_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_25)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 26) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_26_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_26)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 27) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_27_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_27)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 28) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_28_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_28)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 29) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_29_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_29)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 30) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_30_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_30)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 31) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_31_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_31)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 32) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_32_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_32)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 33) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_33_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_33)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_34+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 34) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_34_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_34)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_34+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 35) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_35_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_35)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 36) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_36_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_36)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 37) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_37_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_37)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 38) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_38_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_38)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 39) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_39_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_39)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 40) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_40_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_40)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 41) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_41_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_41)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 42) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_42_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_42)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 43) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_43_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_43)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 44) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_44_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_44)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 45) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_45_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_45)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 46) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_46_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_46)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 47) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_47_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_47)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 48) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_48_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_48)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 49) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_49_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_49)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 50) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_50_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_50)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 51) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_51_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_51)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 52) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_52_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_52)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 53) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_53_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_53)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 54) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_54_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_54)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 55) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_55_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_55)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 56) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_56_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_56)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 57) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_57_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_57)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 58) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_58_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_58)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 59) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_59_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_59)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 60) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_60_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_60)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 61) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_61_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_61)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 62) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_62_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_62)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 63) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_63_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_63)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else if(ui.value == 64) {
				  health.states.forEach(function(point){
					  if (point.min_21 !== null){
						  var min_64_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.min_64)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.min_33+"</strong></p>").addTo(min_21_layer)
					  }
				  });
				}
				else {
				}
			},
		});
});		
	})


