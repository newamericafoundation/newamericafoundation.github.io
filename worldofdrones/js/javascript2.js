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

//https://github.com/johan/world.geo.json
d3.json("data/world.json", function(error, json) {

    d3.csv("data/wod.csv", function(error, _csv) {

        csv = _csv

        var world = topojson.feature(json, json.objects.countries).features;

        _csv.forEach(function(d, i) {
            world.forEach(function(e, j) {
                if (d.id === e.id) {
                    e.name = d.name
                }
            })
        })

        // calculate bounds, scale and transform 
        // see http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object
        // var b = path.bounds(data),
        //     s = .95 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h),
        //     t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];

        // projection.scale(s)
        //     .translate(t);

        svg.append("g").selectAll("path")
            .data(world)
            .enter()
            .append("svg:path")
            .attr("d", path)
            .on("mouseover", function(d, i) {
                reporter(d);
            });
    })

    function reporter(x) {
        console.log(x)
        d3.select("#map1 .panel-title").text(function() {
            return x.name;
        });

    }

})

function drawTierI() {
  csv.forEach(function(d) { tierById.set(d.id, +d.tier_i); });

  function ready(error, json, _csv) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path)
        // .on("mouseover", function(d) {
        //   for (var i=0;i<csv.length;i++) {
        //     if (csv[i]['id'] === d.id) {
        //       // Not sure what to do here
        //     }
        //   }
        // });
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