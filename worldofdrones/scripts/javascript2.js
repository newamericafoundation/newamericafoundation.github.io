$(document).ready(function() {
  var packer = sm.packer();
  
  projection = d3.geo.equirectangular()
//	.scale(200)
//	.translate([465, 450]);
  path = d3.geo.path().projection(projection)
  
  svg = d3.select("#content")
	.append("svg:svg")
	.attr("width", 960)
	.attr("height", 500)
  
  d3.json("data/countries.geo.json", function(json) {
	svg.append("svg:g")
	.selectAll("path")
	  .data(json.features)
	.enter().append("svg:path")
	  .attr("d", path)
	  .attr("fill-opacity", 0.5)
	  .attr("fill", "#000")
	  .attr("stroke", "#000")
  });	
  
  $.get('data/speed.json', function(point){
	  var scale = d3.scale.linear().domain([0,1000]).range([1,10])
	  point.rows.forEach(function(point){
  //	  svg.append("circle")
  //		.attr("r",scale(point.download))
  //		.attr("fill-opacity", 0.5)
  //		.attr("fill", "#FF0000")
  //		.attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";});
  //	  svg.append("text")
  //		.attr('y', 3)
  //		.text(point.name)
		var element = d3.select('svg').append('g')
		  .attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";})
		  .attr("r",scale(point.download))
		  .attr('class', 'city')
		  .attr("fill-opacity", 0.5)
		  .attr("fill", "#FF0000")
		
		element.append('circle')
		  .attr("r",scale(point.download))
		
		var useName = point.name;
		
		var t = element.append('text')
		  .attr('y', 3)
		  .text(useName);
		packMetros();
	  })
  })
  
  $('button#speed').click(function (e) {
	$.get('data/speed.json', function(point){
	  var scale = d3.scale.linear().domain([0,1000]).range([1,50])
	  point.rows.forEach(function(point){
		d3.select('circle')
		.attr("r",scale(point.download))
	  })
	})
  });
  $('button#cost').click(function (e) {
	$.get('data/speed.json', function(point){
	  var scale = d3.scale.linear().domain([0,1000]).range([1,50])
	  point.rows.forEach(function(point){
		d3.select('circle')
		.attr("r",scale(point.price))
	  })
	})
  });
  
  function packMetros() {
	var elements = d3.selectAll('#content g.city')[0];
	packer.elements(elements).start();
  }

});		
