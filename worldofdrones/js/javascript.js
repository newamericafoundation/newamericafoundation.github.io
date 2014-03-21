// $(window).load(function(){
//     $('#keyFindings').modal('show');
// });

var width = 945

var height = 550

var svg = d3.select('#content').append('svg').attr('width', width).attr('height', height);

var projection = d3.geo.mercator().scale(150).translate([width/2, height/2]);

var path = d3.geo.path().projection(projection);

var all_data = {};

var tierById = d3.map();

var tooltip = d3.select("#map").append("div")
    .attr("class", "tooltip");

var quantize = d3.scale.quantize()
    .domain([0, 1])
    .range(d3.range(2).map(function(i) { return "tier" + i; }));

var w2 = 945,
    h2 = 550;

var svg2 = d3.select("#content2").insert("svg:svg", "h2")
    .attr("width", w2)
    .attr("height", h2);

var states2 = svg2.append("svg:g")
    .attr("id", "countries");

var circles2 = svg2.append("svg:g")
    .attr("id", "circles");

var cells2 = svg2.append("svg:g")
    .attr("id", "cells");

var w3 = 945,
    h3 = 550;

var svg3 = d3.select("#content3").insert("svg:svg", "h2")
    .attr("width", w3)
    .attr("height", h3);

var states3 = svg3.append("svg:g")
    .attr("id", "countries");

var circles3 = svg3.append("svg:g")
    .attr("id", "circles");

var cells3 = svg3.append("svg:g")
    .attr("id", "cells");

queue()
  .defer(d3.json, "data/world.json")
  .defer(d3.csv, "data/wod.csv")
  .await(setUpChoropleth);

var csv;

function setUpChoropleth(error, json, _csv) {
  csv = _csv;

  svg.append("g")
  .selectAll("path")
    .data(topojson.feature(json, json.objects.countries).features)
  .enter().append("svg:path")
    .attr("d", path)
      .on("mouseover", function(d,i) {
        var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
        d3.select("#map1 h2 span").text(d);
        console.log(d.id);
      });

  states2.selectAll("path")
      .data(topojson.feature(json, json.objects.countries).features)
    .enter().append("svg:path")
      .attr("d", path)
      .attr("class", function(d,i) { return "country" + d.id; });
  states3.selectAll("path")
      .data(topojson.feature(json, json.objects.countries).features)
    .enter().append("svg:path")
      .attr("d", path)
      .attr("class", function(d,i) { return "country" + d.id; });

} 

function drawTierI() {
  csv.forEach(function(d) { tierById.set(d.id, +d.tier_i); });

  function ready(error, json, _csv) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path)
        .on("mouseover", function(d) {
          d3.select("#map1 h2 span").text(tierById.get(d.id));
          console.log(tierById.get(d))
          // d3.select("#map3 h4 span").text(d.imports_from);
        });
  }
  ready();
}

function drawTierII() {
  csv.forEach(function(d) { tierById.set(d.id, +d.tier_ii); });

  function ready(error, json) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

  }
  ready();
}

function drawTierIIPlus() {
  csv.forEach(function(d) { tierById.set(d.id, +d.tier_ii_plus); });

  function ready(error, json) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

  }
  ready();
}

$('button#tier_i').click(function (e) {
  drawTierI();
  d3.select("#map1 .panel-title").text("Drone equipted")
  d3.select("#map1 .panel-body").text("These countries are equipped with unmanned drones.")
});

$('button#tier_ii').click(function (e) {
  drawTierII();
  d3.select("#map1 .panel-title").text("Armed drones")
  d3.select("#map1 .panel-body").text("These countries are equipped with armed unmanned drones.")
});

$('button#tier_ii_plus').click(function (e) {
  drawTierIIPlus();
  d3.select("#map1 .panel-title").text("Drones in combat")
  d3.select("#map1 .panel-body").text("These countries have used armed unmanned drones in combat.")
});

d3.select("input[type=checkbox]").on("change", function() {
  cells2.classed("voronoi", this.checked);
});

d3.csv("data/wod_export.csv", function(flights) {
  var linksByOrigin = {},
      countByAirport = {},
      locationByAirport = {},
      positions = [];

  var arc2 = d3.geo.greatArc()
      .source(function(d) { return locationByAirport[d.source]; })
      .target(function(d) { return locationByAirport[d.target]; });

  flights.forEach(function(flight) {
    var origin = flight.origin,
        destination = flight.destination,
        links = linksByOrigin[origin] || (linksByOrigin[origin] = []);
    links.push({source: origin, target: destination});
    countByAirport[origin] = (countByAirport[origin] || 0) + 1;
    countByAirport[destination] = (countByAirport[destination] || 0) + 1;
  });

  d3.csv("data/wod.csv", function(airports) {

    // Only consider airports with at least one flight.
    airports = airports.filter(function(airport) {
      if (countByAirport[airport.name]) {
        var location = [+airport.lon, +airport.lat];
        locationByAirport[airport.name] = location;
        positions.push(projection(location));
        return true;
      }
    });

    // Compute the Voronoi diagram of airports' projected positions.
    var polygons2 = d3.geom.voronoi(positions);

    var g2 = cells2.selectAll("g")
        .data(airports)
      .enter().append("svg:g");

    g2.append("svg:path")
        .attr("class", "cell")
        .attr("d", function(d, i) { return "M" + polygons2[i].join("L") + "Z"; })
        .on("mouseover", function(d, i) {
          d3.select("#map2 h2 span").text(d.name);
          d3.select("#map2 h4 span").text(d.exports_to);
        });

    g2.selectAll("path.arc")
        .data(function(d) { return linksByOrigin[d.name] || []; })
      .enter().append("svg:path")
        .attr("class", "arc")
        .attr("d", function(d) { return path(arc2(d)); });

    circles2.selectAll("circle")
        .data(airports)
      .enter().append("svg:circle")
        .attr("cx", function(d, i) { return positions[i][0]; })
        .attr("cy", function(d, i) { return positions[i][1]; })
        .attr("r", "10")
        .attr("class", function(d,i) { return "circle" + d.id; })
        .sort(function(a, b) { return countByAirport[b.name] - countByAirport[a.name]; });
  });
});

d3.csv("data/wod_import.csv", function(flights) {
  var linksByOrigin = {},
      countByAirport = {},
      locationByAirport = {},
      positions = [];

  var arc3 = d3.geo.greatArc()
      .source(function(d) { return locationByAirport[d.source]; })
      .target(function(d) { return locationByAirport[d.target]; });

  flights.forEach(function(flight) {
    var origin = flight.origin,
        destination = flight.destination,
        links = linksByOrigin[origin] || (linksByOrigin[origin] = []);
    links.push({source: origin, target: destination});
    countByAirport[origin] = (countByAirport[origin] || 0) + 1;
    countByAirport[destination] = (countByAirport[destination] || 0) + 1;
  });

  d3.csv("data/wod.csv", function(airports) {

    // Only consider airports with at least one flight.
    airports = airports.filter(function(airport) {
      if (countByAirport[airport.name]) {
        var location = [+airport.lon, +airport.lat];
        locationByAirport[airport.name] = location;
        positions.push(projection(location));
        return true;
      }
    });

    // Compute the Voronoi diagram of airports' projected positions.
    var polygons3 = d3.geom.voronoi(positions);

    var g3 = cells3.selectAll("g")
        .data(airports)
      .enter().append("svg:g");

    g3.append("svg:path")
        .attr("class", "cell")
        .attr("d", function(d, i) { return "M" + polygons3[i].join("L") + "Z"; })
        .on("mouseover", function(d, i) {
          d3.select("#map3 h2 span").text(d.name);
          d3.select("#map3 h4 span").text(d.imports_from);
        });

    g3.selectAll("path.arc")
        .data(function(d) { return linksByOrigin[d.name] || []; })
      .enter().append("svg:path")
        .attr("class", "arc")
        .attr("d", function(d) { return path(arc3(d)); });

    circles3.selectAll("circle")
        .data(airports)
      .enter().append("svg:circle")
        .attr("cx", function(d, i) { return positions[i][0]; })
        .attr("cy", function(d, i) { return positions[i][1]; })
        // .attr("r", "6")
        .attr("r", "6")
        .attr("class", function(d,i) { return "circle" + d.id; })
        .sort(function(a, b) { return countByAirport[b.name] - countByAirport[a.name]; });
  });
});