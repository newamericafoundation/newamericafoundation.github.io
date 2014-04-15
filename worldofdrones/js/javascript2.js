var w = 945

var h = 550

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
            .attr("class", function(d,i) { return "country" + d.id; });

        states3.selectAll("path")
            .data(world)
          .enter().append("svg:path")
            .attr("d", path)
            .attr("class", function(d,i) { return "country" + d.id; });

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