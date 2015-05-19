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
					if(ary[i].floors <= i+4 && ary[i].floors > i){
						ary[i].icon = officeIcons[n];
					}		
				}
				if(ary[i].use == "Apartment" ){ //residential
					if(ary[i].floors <= i+4 && ary[i].floors > i){
						ary[i].icon = apartmentIcons[n];
					}	
				}
				if(ary[i].use == "Hotel"){
					if(ary[i].floors <= i+4 && ary[i].floors > i){
						ary[i].icon = hotelIcons[n];
					}
				}
				if(ary[i].use == "Factory" || ary[i].use == "Warehouse" || ary[i].use == "Loft" ){ //manufacturing
					if(ary[i].floors <= i+4 && ary[i].floors > i){
						ary[i].icon = manufacturingIcons[n];
					}
				}
				if(ary[i].use == "Public" || ary[i].use == "Store" ){ //other
					if(ary[i].floors <= i+4 && ary[i].floors > i){
						ary[i].icon = otherIcons[n];
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
	