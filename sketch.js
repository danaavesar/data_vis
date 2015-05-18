/*
 * sketch.js
 */

//var data;
var buildingArray = [];
var images = new Array();
var pp;
 
  
$(function() {
	for(var i=2; i<254; i++){
		if(i<10){
			pp = "building_images/" + "00" + i + '.png';
			images.push(pp);
		} else if(i>9 && i<100){
			pp = "building_images/" + "0" + i + '.png';
			images.push(pp);
		} else if(i>100){
			pp = "building_images/" + i + '.png';
			images.push(pp);
		}
	}


	//get data and put it all in building array
	$.get("skyscraper_data.csv", function(file) {
		data = $.csv.toArrays(file);
		// console.log(data);
		for(var i=1; i<data.length; i++){
			
			buildingArray[i] = Building(data[i],images[i+1]);
		}
		leaflet();

	});

	//make blue div resizable
   $("#canvas").resizable({
   	handles: "n"
   });

   //date slider
   $( "#slider" ).slider({
      min: 1874,
      max: 1900,
      slide: function( event, ui ) {
        $( "#amount" ).html( "year:  " + ui.value );
        year = ui.value;
        for(var i=1; i<buildingArray.length; i++){
	        if(buildingArray[i].marker != null){	
	        	if(buildingArray[i].year <= ui.value){
	        		buildingArray[i].marker.setOpacity(1);
	        	}else{
	        		buildingArray[i].marker.setOpacity(0);
	        	}
	    	}
	    }
      }
   });

   //make ticks under slider
	var newSpan = [] ;
	var leftCSS = [];
   for (var i = 1; i < 28; i++) {
   	var number = 1873 + i;
   	newSpan[i] = document.createElement('span');
   	$(newSpan[i]).attr('id','tick'+i).html('<span style="color: white; font-size:30;"> | <br> <br> </span>' + number);
   	$("#ticks").append(newSpan[i]);
   	$('#tick'+i).css({"left": 3.84*i + "%", "position": "absolute"});
   };


   //make floor selection slider
   $("#slider2").slider({
   		min: 4,
   		max: 28,
   		orientation: "vertical",
   		slide: function(event, ui) {
	        var delay = function() {
	            var handleIndex = $(ui.handle).data('index.uiSliderHandle');
	            $('#max').html( ui.value).position({
	                my: 'right',
	                at: 'left',
	                of: ui.handle,
	                
	            });
	        };       
        // wait for the ui.handle to set its position
        	setTimeout(delay, 5);

         for(var i=1; i<buildingArray.length; i++){
	        if(buildingArray[i].marker != null){	
	        	 if(buildingArray[i].floors <= ui.value){
	        		buildingArray[i].marker.setOpacity(1);
	        	 }else{
	        	 	buildingArray[i].marker.setOpacity(0);
	        	 }
	    	}
	    }
    }
   });


   

	$('#max').html( $('#slider2').slider('values', 1) ).position({
	    my: 'right',
	    at: 'left',
	    of: $('#slider2 a'),
	    
	});
});




function Building(data, img){
	var address = data[2];
	var use = data[11];
	if(data[10] != ""){
		var structure = data[10];
	}
	var year = data[12];
	var show = 0;
	var marker;
	var image = img;
	var floors = data[13];


	return {
		year: year,
		address: address,
		structure: structure,
		use: use,
		floors: floors,
		show: show,
		marker: marker,
		image: image
	}
}


