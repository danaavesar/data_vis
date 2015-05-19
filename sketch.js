/*
 * sketch.js
 */

//var data;
var buildingArray = [];
var images = new Array();
var pp;
var yearSelection;
var floorSelection = 28;
var useSelection = [];
var hotelIcons = [];
var apartmentIcons =[];
var officeIcons = [];
var manufacturingIcons =[];
var otherIcons = [];
  
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
        yearSelection = ui.value;
        updateMarkers();
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
        	floorSelection = ui.value;
        	updateMarkers();
       
    }
   });


   

	$('#max').html( $('#slider2').slider('values', 1) ).position({
	    my: 'right',
	    at: 'left',
	    of: $('#slider2 a'),
	    
	});

	// $(".icon").click(function(){
	// 	src = 
	// 	$(this).attr("src",src);
	// })
		
	$("#apt_icon").click(function(){
		useSelection.push("Apartment");
		updateMarkers();
	})
	$("#hotel_icon").click(function(){
		useSelection.push("Hotel");
	})
	//if toggled
	$("#office_icon").click(function(){
		useSelection.push("Office");
	})
	$("#manuf_icon").click(function(){
		useSelection.push("Factory");
		useSelection.push("Warehouse");
		useSelection.push("Loft");
	})
	$("#other_icon").click(function(){
		useSelection.push("Public");
		useSelection.push("Store");
	})

	console.log($.inArray("Public", useSelection));
});


function updateMarkers(){
	for (var i = 1; i < buildingArray.length; i++) {
		
		if(buildingArray[i].marker != null){
					if(buildingArray[i].year <= yearSelection && buildingArray[i].floors <= floorSelection && $.inArray(buildingArray[i].use, useSelection) ){

						buildingArray[i].marker.setOpacity(1);
						console.log(buildingArray[i].floors);
						console.log(buildingArray[i].address);
					}else{
						buildingArray[i].marker.setOpacity(0);
						
					}
			
			

		}
	};
}

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
	var icon;


	return {
		year: year,
		address: address,
		structure: structure,
		use: use,
		floors: floors,
		show: show,
		marker: marker,
		image: image,
		icon: icon
	}
}


