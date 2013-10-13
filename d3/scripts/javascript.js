$(document).ready(function() {
			
			var packer = sm.packer();
			
var projection = d3.geo.albers()

			var svg = d3.select('#content').append('svg')
					.attr('width', 960)
					.attr('height', 500);
			
			var states = svg.append('g')
					.attr('width', 960)
					.attr('height', 500)
					.attr('id', 'states');
									

			var path = d3.geo.path();
			d3.json("data/us_states_shapes.json", function(json) {
				states.selectAll("path")
					.data(json.features)
					.enter().append("path")
					.attr("d", path);
			});
			
	  svg.append("circle").attr("r",5).attr("transform", function() {return "translate(" + projection([-75, 43]) + ")";});
			
$.get('data/health.json', function(health){
	var scale = d3.scale.linear().domain([0,200]).range([1,40])
	health.states.forEach(function(point){
		if (point.min_21 !== null){
	  svg.append("circle").attr("r",scale(point.min_21)).attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";});
	  packMetros();
		}
	})
})

			function packMetros() {
			
				var elements = d3.selectAll('#content circle')[0];
				
				packer.elements(elements).start();
			
			}


});		
