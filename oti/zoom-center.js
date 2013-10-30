var scale = 3,
    width = 400,
    height = 300,
    radius = 20,
    nodes = [{x: 150, y: 75}, {x:300, y:200}, {x: 40, y: 150}];

vis = d3.select("#vis").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "viewport")
    .append("g")

vis.selectAll(".circle").data(nodes).enter()
    .append("circle")
    .attr("r", radius)
    .attr("cx", function(node){return node.x})
    .attr("cy", function(node){return node.y})
    .attr("fill", "red")
    .on("click", function(node){

        var scale = height / (radius * 2)

        scaledCenterX = (width / scale) / 2
        scaledCenterY = (height / scale) / 2

        x = -(node.x - scaledCenterX)
        y = -(node.y - scaledCenterY)

        var transform = "scale(" + scale + ")";
        transform += " translate(" + x + "," + y + ")";

        vis.transition().duration(500).attr("transform", transform);
    })

function zoomOut() {
    vis.transition().duration(500).attr("transform", "scale(1) translate(0,0)");
}
