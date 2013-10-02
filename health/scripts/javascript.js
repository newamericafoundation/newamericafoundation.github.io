$(document).ready(function() {
var min_21_layer = new L.LayerGroup();
var min_35_layer = new L.LayerGroup();
var min_50_layer = new L.LayerGroup();
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
	$.get('data/health.json', function(health){
		var scale = d3.scale.linear().domain([0,200]).range([10,40])
		  
		health.states.forEach(function(point){
			if (point.diff_21 < 0){
				var min_21_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(point.diff_21)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_21+"</strong></p>").addTo(min_21_layer)
			}
			else if (point.diff_21 > 0){
				var min_21_marker = new L.CircleMarker([point.lat, point.lon], {fillColor: '#FF0000',color: 'black'}).setRadius(scale(point.diff_21)).bindPopup("<h2>"+point.name+"</h2><p>Premium: <strong>"+point.diff_21+"</strong></p>").addTo(min_21_layer)
			}
		});
		health.states.forEach(function(point_35){
			if (point_35.diff_35 < 0){
				var min_35_marker = new L.CircleMarker([point_35.lat, point_35.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(Math.abs(point_35.diff_35))).bindPopup("<h2>"+point_35.name+"</h2><p>Premium: <strong>"+point_35.diff_35+"</strong></p>").addTo(min_35_layer)
			}
			else if (point_35.diff_35 > 0){
				var min_35_marker = new L.CircleMarker([point_35.lat, point_35.lon], {fillColor: '#FF0000',color: 'black'}).setRadius(scale(point_35.diff_35)).bindPopup("<h2>"+point_35.name+"</h2><p>Premium: <strong>"+point_35.diff_35+"</strong></p>").addTo(min_35_layer)
			}
		});
		health.states.forEach(function(point_50){
			if (point_50.diff_50 < 0){
				var min_50_marker = new L.CircleMarker([point_50.lat, point_50.lon], {fillColor: '#0000FF',color: 'black'}).setRadius(scale(Math.abs(point_50.diff_50))).bindPopup("<h2>"+point_50.name+"</h2><p>Premium: <strong>"+point_50.diff_50+"</strong></p>").addTo(min_50_layer)
			}
			else if (point_50.diff_50 > 0){
				var min_50_marker = new L.CircleMarker([point_50.lat, point_50.lon], {fillColor: '#FF0000',color: 'black'}).setRadius(scale(point_50.diff_50)).bindPopup("<h2>"+point_50.name+"</h2><p>Premium: <strong>"+point_50.diff_50+"</strong></p>").addTo(min_50_layer)
			}
		});
	})
$('button#min_21').click(function (e) {
  map.addLayer(min_21_layer);
  map.removeLayer(min_35_layer);
  map.removeLayer(min_50_layer);
});
$('button#min_35').click(function (e) {
  map.removeLayer(min_21_layer);
  map.addLayer(min_35_layer);
  map.removeLayer(min_50_layer);
});
$('button#min_50').click(function (e) {
  map.removeLayer(min_21_layer);
  map.removeLayer(min_35_layer);
  map.addLayer(min_50_layer);
});});