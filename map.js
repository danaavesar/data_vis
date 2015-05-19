/*
 * leaflet.js
 */

var map;
var year = [];
var geocoder;




function leaflet() {
	ary = buildingArray;
	//console.log(ary);
	map = L.map('map').setView([40.7903, -73.9597], 13)
	geocoder = new L.Control.Geocoder.bing('AjgSz-sdEIb9J7N6U2fgyB4bva-LptVSe-BXYECeSV024c3qCNgFbYVOceTN1iZJ');
	//make building marker icons
	for(var i=0; i<6; i++){
		hotelIcons[i] = L.icon({ //light blue
			iconUrl: 'building_icons/blue'+[i]+".svg",
			// shadowUrl: 'shadow.png',
			iconAnchor: [21, 92],
			popupAnchor:  [-10, -76]		
	    	// shadowAnchor: [22, 94]
		});

		apartmentIcons[i] = L.icon({ //dark blue
			iconUrl: 'building_icons/blue_dark'+[i]+".svg",
			// shadowUrl: 'shadow.png',
			iconAnchor: [21, 92],
			popupAnchor:  [-10, -76]		
	    	// shadowAnchor: [22, 94]
		});

		officeIcons[i] = L.icon({ //red
			iconUrl: 'building_icons/red'+[i]+".svg",
			// shadowUrl: 'shadow.png',
			iconAnchor: [21, 92],
			popupAnchor:  [-10, -76]		
	    	// shadowAnchor: [22, 94]
		});
		manufacturingIcons[i] = L.icon({ //red
			iconUrl: 'building_icons/dark_grey'+[i]+".svg",
			// shadowUrl: 'shadow.png',
			iconAnchor: [21, 92],
			popupAnchor:  [-10, -76]		
	    	// shadowAnchor: [22, 94]
		});
		otherIcons[i] = L.icon({ //red
			iconUrl: 'building_icons/beige'+[i]+".svg",
			// shadowUrl: 'shadow.png',
			iconAnchor: [21, 92],
			popupAnchor:  [-10, -76]	
	    	// shadowAnchor: [22, 94]
		});
	}


		for(var i=1; i<ary.length; i++){
				if(ary[i].use == "Office"){ //office
					if(ary[i].floors <= 10){
						ary[i].icon = officeIcons[5];
					}	
					if(ary[i].floors <= 14 && ary[i].floors >10){
						ary[i].icon = officeIcons[4];
					}	
					if(ary[i].floors <= 18 && ary[i].floors >14){
						ary[i].icon = officeIcons[3];
					}
					if(ary[i].floors <= 22 && ary[i].floors >18){
						ary[i].icon = officeIcons[2];
					}
					if(ary[i].floors <= 26 && ary[i].floors >22){
						ary[i].icon = officeIcons[1];
					}
					if(ary[i].floors <= 30 && ary[i].floors >26){
						ary[i].icon = officeIcons[0];
					}
				}
				if(ary[i].use == "Apartment" ){ //residential
					if(ary[i].floors <= 10){
						ary[i].icon = apartmentIcons[5];
					}	
					if(ary[i].floors <= 14 && ary[i].floors >10){
						ary[i].icon = apartmentIcons[4];
					}	
					if(ary[i].floors <= 18 && ary[i].floors >14){
						ary[i].icon = apartmentIcons[3];
					}
					if(ary[i].floors <= 22 && ary[i].floors >18){
						ary[i].icon = apartmentIcons[2];
					}
					if(ary[i].floors <= 26 && ary[i].floors >22){
						ary[i].icon = apartmentIcons[1];
					}
					if(ary[i].floors <= 30 && ary[i].floors >26){
						ary[i].icon = apartmentIcons[0];
					}	
				}
				if(ary[i].use == "Hotel"){
					if(ary[i].floors <= 10){
						ary[i].icon = hotelIcons[5];
					}	
					if(ary[i].floors <= 14 && ary[i].floors >10){
						ary[i].icon = hotelIcons[4];
					}	
					if(ary[i].floors <= 18 && ary[i].floors >14){
						ary[i].icon = hotelIcons[3];
					}
					if(ary[i].floors <= 22 && ary[i].floors >18){
						ary[i].icon = hotelIcons[2];
					}
					if(ary[i].floors <= 26 && ary[i].floors >22){
						ary[i].icon = hotelIcons[1];
					}
					if(ary[i].floors <= 30 && ary[i].floors >26){
						ary[i].icon = hotelIcons[0];
					}	
				}
				if(ary[i].use == "Factory" || ary[i].use == "Warehouse" || ary[i].use == "Loft" ){ //manufacturing
					if(ary[i].floors <= 10){
						ary[i].icon = manufacturingIcons[5];
					}	
					if(ary[i].floors <= 14 && ary[i].floors >10){
						ary[i].icon = manufacturingIcons[4];
					}	
					if(ary[i].floors <= 18 && ary[i].floors >14){
						ary[i].icon = manufacturingIcons[3];
					}
					if(ary[i].floors <= 22 && ary[i].floors >18){
						ary[i].icon = manufacturingIcons[2];
					}
					if(ary[i].floors <= 26 && ary[i].floors >22){
						ary[i].icon = manufacturingIcons[1];
					}
					if(ary[i].floors <= 30 && ary[i].floors >26){
						ary[i].icon = manufacturingIcons[0];
					}
				}
				if(ary[i].use == "Public" || ary[i].use == "Store" ){ //other
					if(ary[i].floors <= 10){
						ary[i].icon = otherIcons[5];
					}	
					if(ary[i].floors <= 14 && ary[i].floors >10){
						ary[i].icon = otherIcons[4];
					}	
					if(ary[i].floors <= 18 && ary[i].floors >14){
						ary[i].icon = otherIcons[3];
					}
					if(ary[i].floors <= 22 && ary[i].floors >18){
						ary[i].icon = otherIcons[2];
					}
					if(ary[i].floors <= 26 && ary[i].floors >22){
						ary[i].icon = otherIcons[1];
					}
					if(ary[i].floors <= 30 && ary[i].floors >26){
						ary[i].icon = otherIcons[0];
					}
				}
			
		}

	
	
	for(var i=1; i<ary.length; i++){
		//console.log(i+ " " +ary[i] + " " +ary[i].address);
		
		geocoder.geocode(ary[i].address + ", Manhattan, NY", function( results ) {
			if( results.length < 1 ) return; // Skip buildings not found :-(

			this.marker = L.marker( L.latLng(results[0].center.lat,results[0].center.lng), {icon: this.icon, opacity: 1} ).addTo(map)
			this.marker.bindPopup("<img class=img src=" + this.image + ">" + "<br>Address: " + this.address + "<br> Built in: "+this.year + "<br> Structure: " + this.structure + "<br> Use: " + this.use + "<br> Number of Floors: " + this.floors);
			// console.log(this);
			
		}, ary[i] );

	}

				

			
			// 		map = L.map('map', {
			//     center: [51.505, -0.09],
			//     zoom: 13
			// });
		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);



		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}

		map.on('click', onMapClick);

		// var imageUrl = 'http://pngimg.com/upload/heart_PNG699.png',
  //   	imageBounds = [[51.52113, -0.06798], [51.51825, -0.02575]];

		//L.imageOverlay(imageUrl, imageBounds).addTo(map);

};
	