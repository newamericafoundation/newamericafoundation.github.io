/*
This contains the basic functions for initializing a Wax map.
Data sources are tilestream urls.

url = the url of the tileset to be rendered
mapContainer = the div that will hold the map
startLat = latitude of the starting center point for the map
startLng = longtitude of the starting cetner point for the map
minZoom = minimum zoom level for the map
maxZoom = maximum zoom level for the map

Last Updated 05/01/12 by Andy Hull
*/

function newWaxMap(url, mapContainer, startLat, startLng, minZoom, maxZoom){
minZoom = minZoom || 2;
maxZoom = maxZoom || 10;
startLat = startLat || 0;
startLng = startLng || 0;
var m;
var a ={};
wax.tilejson(url, function(tilejson) {
tilejson.minzoom = minZoom;
tilejson.maxzoom = maxZoom;
var mm = com.modestmaps;
m = new mm.Map(mapContainer,
new wax.mm.connector(tilejson));
    wax.mm.interaction(m, tilejson);
wax.mm.legend(m, tilejson).appendTo(m.parent);
wax.mm.zoomer(m, tilejson).appendTo(m.parent);
m.setCenterZoom(new mm.Location(startLat, startLng), minZoom);
			m.addCallback('panned', function(m) {
			    // respond to new center: set vars so map will stay put as the layers change
				//update the newWaxMap center and zoom so we can use them on our external pages
				newWaxMap.prototype.userCenter = m.getCenter();
				newWaxMap.prototype.userZoom = m.getZoom();				
			});
			
			m.addCallback('zoomed', function(m) {
			    // respond to new center: set vars so map will stay put as the layers change
				//update the newWaxMap center and zoom so we can use them on our external pages
				newWaxMap.prototype.userCenter = m.getCenter();
				newWaxMap.prototype.userZoom = m.getZoom();
				
			});
});
}; //end newWaxMap


