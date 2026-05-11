/* FILTER SYSTEM */

let currentFilter = "all";

function filterPlaces(type){

currentFilter = type;

allMarkers.forEach(place=>{

const markerElement =
place.marker._path;

if(!markerElement)return;

if(type === "all"){

markerElement.style.display = "block";

}else{

if(
place.name.toLowerCase().includes(type)
){

markerElement.style.display = "block";

}else{

markerElement.style.display = "none";

}

}

});

}