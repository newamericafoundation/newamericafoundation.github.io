var width = 945

var height = 550

var svg = d3.select('#content').append('svg').attr('width', width).attr('height', height);

var projection = d3.geo.mercator().scale(175);

var path = d3.geo.path().projection(projection);

var all_data = {};

var tierById = d3.map();

var quantize = d3.scale.quantize()
    .domain([0, 1])
    .range(d3.range(2).map(function(i) { return "tier" + i; }));

queue()
  .defer(d3.json, "data/world.json")
  .defer(d3.csv, "data/wod.csv")
  .await(setUpChoropleth);

var csv;

function setUpChoropleth(error, json, _csv) {
  csv = _csv;
  svg.append("g")
     .attr("class", "countries")
  .selectAll("path")
    .data(topojson.feature(json, json.objects.countries).features)
  .enter().append("svg:path")
    .attr("d", path);

} 

function drawTierI() {
  csv.forEach(function(d) { tierById.set(d.id, +d.tier_i); });

  function ready(error, json) {
    svg.selectAll("path")
        .attr("class", function(d) { return quantize(tierById.get(d.id)); })
        .attr("d", path);

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