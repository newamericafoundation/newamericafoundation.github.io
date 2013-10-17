$(document).ready(function() {
//			
			var packer = sm.packer();
//			
//var projection = d3.geo.albersUsa()
//
//			var svg = d3.select('#content').append('svg')
//					.attr('width', 960)
//					.attr('height', 500);
//			
//			var neighborhoods = svg.append('g')
//					.attr('width', 960)
//					.attr('height', 500)
//					.attr('id', 'states');
//									
//
//			var path = d3.geo.path();
//			d3.json("data/dc.json", function(json) {
//				neighborhoods.selectAll("path")
//					.data(json.features)
//					.enter().append("path")
//					.attr("d", path);
//			});
//			
//	  svg.append("circle").attr("r",5).attr("transform", function() {return "translate(" + projection([-75, 43]) + ")";});
//			
//$.get('data/health.json', function(health){
//	var scale = d3.scale.linear().domain([0,200]).range([1,40])
//	health.states.forEach(function(point){
//		if (point.min_21 !== null){
//	  svg.append("circle").attr("r",scale(point.min_21)).attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";});
//	  packMetros();
//		}
//	})
//})
//
//			function packMetros() {
//			
//				var elements = d3.selectAll('#content circle')[0];
//				
//				packer.elements(elements).start();
//			
//			}


projection = d3.geo.albers()
path = d3.geo.path().projection(projection)

svg = d3.select("#content")
  .append("svg:svg")
  .attr("width", 960)
  .attr("height", 500)

//d3.json("data/dc.json", function(json) {
//  svg.append("svg:g")
//  .selectAll("path")
//    .data(json.features)
//  .enter().append("svg:path")
//    .attr("d", path)
//    .attr("fill-opacity", 0.5)
//	.attr("fill", "#000")
//    .attr("stroke", "#000")
//});	

$.get('data/speed.json', function(point){
	var scale = d3.scale.linear().domain([0,1000]).range([1,20])
	point.rows.forEach(function(point){
	  svg.append("circle").attr("r",scale(point.download)).attr("fill-opacity", 0.5).attr("fill", "#FF0000").attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";});
	  packMetros();
	})
})

			function packMetros() {
			
				var elements = d3.selectAll('#content circle')[0];
				
				packer.elements(elements).start();
			
			}

//	  svg.append("circle").attr("r",5).attr("transform", function() {return "translate(" + projection([-77.01, 38.91]) + ")";});

});		
