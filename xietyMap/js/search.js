const searchInput =
document.getElementById(
'searchInput'
);

searchInput.addEventListener(
'keyup',
()=>{

const search =
searchInput.value.toLowerCase();

allMarkers.forEach(place=>{

if(
place.name.toLowerCase().includes(search)
){

map.setView(
place.marker.getLatLng(),
17
);

place.marker.openPopup();

}

});

}
);