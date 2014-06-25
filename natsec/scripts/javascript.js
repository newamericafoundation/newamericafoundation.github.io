(function ($) {
    $(document).ready(function() {
      var packer = sm.packer();
      var width  = 470;
      var height = 300;


      var vis = d3.select("#content").append("svg")
          .attr("width", width).attr("height", height)
      
      d3.json("data/yemen.geojson", function(json) {
          // create a first guess for the projection
          var center = d3.geo.centroid(json)
          var scale  = 150;
          var offset = [width/2, height/2];
          var projection = d3.geo.mercator().scale(scale).center(center)
              .translate(offset);

          // create the path
          var path = d3.geo.path().projection(projection);

          // using the path determine the bounds of the current map and use 
          // these to determine better values for the scale and translation
          var bounds  = path.bounds(json);
          var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
          var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
          var scale   = (hscale < vscale) ? hscale : vscale;
          var offset  = [width - (bounds[0][0] + bounds[1][0])/2,
                            height - (bounds[0][1] + bounds[1][1])/2];

          // new projection
          projection = d3.geo.mercator().center(center)
            .scale(scale).translate(offset);
          path = path.projection(projection);

          // add a rectangle to see the bound of the svg
          vis.append("rect").attr('width', width).attr('height', height)
            .style('stroke', 'black').style('fill', 'none');

          vis.selectAll("path").data(json.features).enter().append("path")
            .attr("d", path)
            .style("fill", "#999493")
            .style("stroke-width", 0.5)
            .style("stroke", "black")

        $.get('data/yemen_speed.json', function(point){
            var scale = d3.scale.linear().domain([0,25]).range([8,32]);
            point.rows.forEach(function(point){
              if(point.strikes > 1){

                var element = d3.select('svg').append('g')
                  .attr("transform", function() {return "translate(" + projection([point.lon, point.lat]) + ")";})
                  .attr("r",scale(point.strikes))
                  .attr('class', 'city')
                  .attr("fill-opacity", 0.5)
                  .attr("fill", "#79CCC6")
                
                element.append('circle')
                  .attr("r",scale(point.strikes))
                
                var useName = point.name ;
                var useTotal = point.strikes + " strikes";
                
                var t = element.append('text')
                  .attr('y', 3)
                  .attr('text-anchor','middle')
                  .attr('font-family','platformmedium')
                  .attr('font-size', 15)
                  .attr('fill','black')
                  .attr("fill-opacity", 1)
                  .text(useName)

                var n = element.append('text')
                  .attr('y', 14)
                  .attr('text-anchor','middle')
                  .attr('font-family','platformbold')
                  .attr('font-size', 12)
                  .attr('fill','black')
                  .attr("fill-opacity", 0.5)
                  .text(useTotal)

                packMetros();
              }
            })
        })        
      });	
      

        
      function packMetros() {
    	var elements = d3.selectAll('#content g.city')[0];
    	packer.elements(elements).start();
      }

    });
}(jQuery));