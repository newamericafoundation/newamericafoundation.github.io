$(document).ready(function() {
  var packer = sm.packer();
  
var width = 945,
    height = 500,
    centered;
  
  projection = d3.geo.equirectangular()
	.scale(175)
	.translate([450, 230]);
  path = d3.geo.path().projection(projection)
  
  svg = d3.select("#content")
	.append("svg:svg")
	.attr("width", width)
	.attr("height", height)
	
var g = svg.append("g");
g.append("g").attr("id", "countries");
g.append("g").attr("id", "plans");
  
  d3.json("data/countries.geo.json", function(json) {
  g.select("#countries")
    .selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path)
  });	
  
d3.csv('data/speed.csv', function(data){
  var scale = d3.scale.linear().domain([0,1000]).range([1,25])
  var scale_cost = d3.scale.linear().domain([0,500]).range([1,25])
  matchScaleToData(scale, function(d){return +d.download;})
  var plan = g.select("#plans").selectAll("circle").data(data).enter().append("g").attr("class", "plan").attr("r", function(d) {return scale(d.download)}).attr("transform", function(d) {return "translate(" + projection([d.lon, d.lat]) + ")";}).on("click", clicked)
  plan.append("circle")
      .attr("fill-opacity", 0.5)
      .attr("fill", "#000099")
      .on("mouseover", function(d) {
		 $(".field").empty();
		 $(".panel").removeClass("hidden");
        $("#sidebar-header").append(d.name);
        $("#selection-title").append(d.isp);
        $("#download-num").append(d.download);
        $("#cost-num").append(d.price);
      })
	  .attr("r", function(d) {return scale(d.download)})
  plan.append("text").text(function(d){return d.isp;}).attr('y', 3)
    g.select("#schools").selectAll("circle")
	packPlans();

  d3.select("#speed").on("click", function() {changeDownloadData("download")});
  d3.select("#cost").on("click", function() {changePriceData("price")});
//  d3.select("#school_location").on("click", noSchoolData);
//  function noSchoolData() {
//    g.select("#schools").selectAll("circle")
//      .transition().duration(600)
//      .attr("r", 4)
//  }
  function changeDownloadData(new_data_column) {
    matchScaleToData(scale, function(d){return +d[new_data_column];})
    g.select("#plans").selectAll("circle")
      .transition().duration(600)
      .attr("r", function(d) {return scale(d[new_data_column])})
    g.select("#plans").selectAll("g.plan")
      .transition().duration(600)
      .attr("r", function(d) {return scale(d[new_data_column])})
	packPlans();
  }
  function changePriceData(new_data_column) {
    matchScaleToData(scale, function(d){return +d[new_data_column];})
    g.select("#plans").selectAll("circle")
      .transition().duration(600)
      .attr("r", function(d) {return scale_cost(d[new_data_column])})
    g.select("#plans").selectAll("g.plan")
      .transition().duration(600)
      .attr("r", function(d) {return scale_cost(d[new_data_column])})
	packPlans();
  }
  function matchScaleToData(scale, fieldFunction) {
    var minimum = d3.min(data, fieldFunction),
        maximum = d3.max(data, fieldFunction);
    scale.domain([minimum, maximum]);
  }
  function packPlans() {
	var elements = d3.selectAll('#content g.plan')[0];
	packer.elements(elements).start();
  }

function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
//    var centroid = path.centroid(d);
//    x = centroid[0];
//    y = centroid[1];
    x = d.lat;
    y = d.lon;
    k = 2;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("circle")
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}


});

});		
