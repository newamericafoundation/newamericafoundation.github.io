var w = 945

var h = 550

var svg = d3.select('#content').append('svg').attr('width', w).attr('height', h);

var projection = d3.geo.mercator().scale(150).translate([w / 2, h / 2]);

var colours = d3.scale.ordinal()
                .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

var path = d3.geo.path().projection(projection);

var csv;

//https://github.com/johan/world.geo.json
d3.json("data/countries.json", function(error, json) {

    d3.csv("data/wod.csv", function(error, _csv) {

      var tiers = ["tier_i", "tier_ii", "tier_ii_plus"];

        csv = _csv

        var world = topojson.feature(json, json.objects.countries).features;

        console.log(_csv)

        _csv.forEach(function(d, i) {
            world.forEach(function(e, j) {
                if (d.name === e.properties.name) {
                    e.desc = d.desc
                    e.tier_i = +d.tier_i,
                    e.tier_ii = +d.tier_ii,
                    e.tier_ii_plus = +d.tier_ii_plus
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
            .append("path")
            .attr("d", path)
            .attr("class", function(d, i) {
                if (d.tier_ii_plus > 0) { 
                    return tiers[2];
                } else if (d.tier_ii > 0) { 
                    return tiers[1];
                } else if (d.tier_i > 0) {
                    return tiers[0];
                } else {
                  return "tier_none"
                }
            })
            .on("mouseover", function(d, i) {
                reporter(d);
            });

      colours.domain(tiers);

      for (var i = 0; i < tiers.length; i++) {
        d3.select("#"+tiers[i])
          .on("click", change)
      };

    })

    function reporter(x) {
      console.log(x);
        d3.select("#map1 .panel-title").text(function() {
            return x.properties.name;
        });
        d3.select("#map1 .panel-body").text(function() {
            return x.desc;
        });

    }

})

function change () {
  var thisColour = colours(this.id);
  console.log(this.id)
  d3.selectAll("."+this.id)
            .style("fill", thisColour);
            //.attr("d", path);

}