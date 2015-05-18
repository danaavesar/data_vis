var canvas;
var numberOfBuildings
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('map');
  leaflet();
  //loadstrings("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.csv", parseSource)
  loadStrings("skyscraper_data.csv", parseSource);
}

function draw(){
  ellipse(mouseX, mouseY, 10, 10); //check whats going on in the p5 canvas layer
}

function parseSource(data){
  for(var i =1; i<data.length; i++){
    var column = split(data[i], ",");
    console.log(column[16]);
    // L.marker([row[1], row[2]]).addTo(map).bindPopup(row[0]+ "| "+row[13]).openPopup();
  }
  // numberOfBuildings = data;
  // console.log(numberOfBuildings);

}

function Building (addressB, architectB, buildingNameB, buildingHeightB, useB, yearB, floorsB){

}