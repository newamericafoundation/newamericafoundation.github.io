var w = 845

var h = 555

var svg = d3.select('#content').append('svg').attr('width', w).attr('height', h);

var projection = d3.geo.mercator().scale(150).translate([w/2, h/2]);

var path = d3.geo.path().projection(projection);

var quantize = d3.scale.quantize()
    .domain([0, 1])
    .range(d3.range(2).map(function(i) { return "tier" + i; }));

var tierById = d3.map();

var csv;

d3.json("data/countries.geo.json", function(error, json) {

    d3.csv("data/wod.csv", function(error, _csv) {

        csv = _csv

        var world = json.features;

        // var world = topojson.feature(json, json.objects.countries).features;

        _csv.forEach(function(d, i) {
            world.forEach(function(e, j) {
                if (d.name === e['properties']['name']) {
                    e['properties']['desc'] = d.desc;
                    e['properties']['num'] = d.old_id;
                }
            })
        })

        svg.append("g").selectAll("path")
            .data(world)
            .enter()
            .append("svg:path")
            .attr("d", path)
            .attr("class", function(d,i) { return "country" + d['properties']['num']; })
            .on("mouseover", function(d, i) {
                reporter(d);
            });

        states2.selectAll("path")
            .data(world)
          .enter().append("svg:path")
            .attr("d", path)
            .attr("class", function(d,i) { return "country" + d['properties']['num']; });

        states3.selectAll("path")
            .data(world)
          .enter().append("svg:path")
            .attr("d", path)
            .attr("class", function(d,i) { return "country" + d['properties']['num'] });

    })

    function reporter(x) {
        d3.select("#map1 .panel-title").text(function() {
            return x['properties']['name'];
        });
        d3.select("#map1 .panel-body").text(function() {
            return x['properties']['desc'];
        });
    }

})

function drawTierI() {
  csv.forEach(function(d) { console.log(d.tier_i); tierById.set(d.id, +d.tier_i); });

  function ready(error, json, _csv) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path)
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
});

$('button#tier_ii').click(function (e) {
  drawTierII();
});

$('button#tier_ii_plus').click(function (e) {
  drawTierIIPlus();
});

var w2 = 970,
    h2 = 555;

var svg2 = d3.select("#content2").insert("svg:svg", "h2")
    .attr("width", w2)
    .attr("height", h2);

var states2 = svg2.append("svg:g")
    .attr("id", "countries");

var circles2 = svg2.append("svg:g")
    .attr("id", "circles");

var cells2 = svg2.append("svg:g")
    .attr("id", "cells");

var w3 = 970,
    h3 = 555;

var svg3 = d3.select("#content3").insert("svg:svg", "h2")
    .attr("width", w3)
    .attr("height", h3);

var states3 = svg3.append("svg:g")
    .attr("id", "countries");

var circles3 = svg3.append("svg:g")
    .attr("id", "circles");

var cells3 = svg3.append("svg:g")
    .attr("id", "cells");

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
        .attr("class", function(d,i) { return "circle" + d.old_id; })
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
        .attr("class", function(d,i) { return "circle" + d.old_id; })
        .sort(function(a, b) { return countByAirport[b.name] - countByAirport[a.name]; });
  });
});