var width = 960,
    height = 500,
    centered;

var projection = d3.geo.albersUsa()
    .scale(width)
    .translate([0, 0]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", click);

var g =
  svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .append("g")
    .attr("id", "states");

d3.json("states.json", function(json) {
  g.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path)
      .on("click", click);
});

function click(d) {
  var x = 0,
      y = 0,
      scale = 1;

  //Get rid of the reference points
  g.selectAll("circle").remove()

  if (d && centered !== d) {

    //We need to build a rectangle around the state that we'll base
    //the scaling off of.

    //Get the top left and bottom right points for this path aka state
    bounds = path.bounds(d);
    topLeft = bounds[0];
    bottomRight = bounds[1];

    //Calculate the height and width of the box
    stateHeight = Math.abs(topLeft[1] - bottomRight[1]);
    stateWidth = Math.abs(topLeft[0] - bottomRight[0]);

    //Find the center of the rectangle
    centerX = topLeft[0] + (stateWidth / 2);
    centerY = topLeft[1] + (stateHeight / 2)

    //This was just me drawing reference points so I could
    //see how the scaling and transform was working.
    //This isn't required
    drawDot(centerX, centerY);
    drawDot(topLeft[0], topLeft[1]);
    drawDot(bottomRight[0], bottomRight[1]);
    drawDot(topLeft[0] + stateWidth, topLeft[1]);
    drawDot(bottomRight[0] - stateWidth, bottomRight[1]);

    //Calculate the scale at 90%
    scale = (height / stateHeight) * 0.9

    x = -centerX
    y = -centerY

    centered = d;
  } else {
    centered = null;
  }

  g.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(1000)
      .attr("transform", "scale(" + scale + ")translate(" + x + "," + y + ")")
      .style("stroke-width", 1.5 / scale + "px");
}

function drawDot(x, y) {
  g.append("circle")
        .attr("r", 2)
        .attr("cx", x)
        .attr("cy", y)
        .attr("fill", "red")
}