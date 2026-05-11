/* MAP */

const map = L.map('map',{
zoomControl:false
}).setView([51.5074,-0.1278],13);

/* DARK MAP */

L.tileLayer(
'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
{
attribution:'© OpenStreetMap © CARTO',
subdomains:'abcd',
maxZoom:20
}
).addTo(map);

/* STORAGE */



/* USER LOCATION */

navigator.geolocation.getCurrentPosition(

async(position)=>{

const lat = position.coords.latitude;
const lng = position.coords.longitude;

/* USER */

L.circleMarker(
[lat,lng],
{
radius:8,
fillColor:"#00ffd5",
color:"#ffffff",
weight:2,
fillOpacity:1
}
).addTo(map);

map.setView([lat,lng],15);

/* QUERY */

const query = `

[out:json];

(

node["amenity"="pub"](around:2500,${lat},${lng});
node["amenity"="bar"](around:2500,${lat},${lng});
node["amenity"="restaurant"](around:2500,${lat},${lng});
node["amenity"="cafe"](around:2500,${lat},${lng});
node["amenity"="fast_food"](around:2500,${lat},${lng});
node["amenity"="nightclub"](around:2500,${lat},${lng});
node["leisure"="fitness_centre"](around:2500,${lat},${lng});

);

out;

`;

/* FETCH */

const response = await fetch(
'https://overpass-api.de/api/interpreter',
{
method:'POST',
headers:{
'Content-Type':'text/plain'
},
body:query
}
);

const data = await response.json();

/* LOOP */

data.elements.forEach(place=>{

/* REDUCE MARKERS */

if(Math.random() > 0.28)return;

if(!place.lat || !place.lon)return;

/* NAME */

const name =
place.tags.name || "Unknown Place";

/* TYPE */

const type =
place.tags.amenity ||
place.tags.leisure ||
"Place";

/* SYSTEMS */

const crowd =
Math.floor(Math.random()*100);

const noise =
Math.floor(Math.random()*100);

const photo =
getRandomPhoto();

/* ICON */

let icon = "📍";

if(type === "restaurant"){
icon = "🍽️";
}

if(type === "cafe"){
icon = "☕";
}

if(type === "bar"){
icon = "🍸";
}

if(type === "nightclub"){
icon = "🎵";
}

if(type === "fast_food"){
icon = "🍔";
}

if(type === "fitness_centre"){
icon = "🏋️";
}

/* BACKGROUND */

let background =
"rgba(25,25,25,0.82)";

if(crowd > 70){

background =
"rgba(255,90,120,0.88)";

}else if(crowd > 40){

background =
"rgba(255,180,80,0.88)";

}

/* EMOJI MARKER */

const emojiIcon = L.divIcon({

className:"emojiMarker",

html:`

<div
style="

width:34px;
height:34px;

border-radius:50%;

display:flex;
align-items:center;
justify-content:center;

font-size:16px;

background:${background};

border:1px solid rgba(255,255,255,0.12);

"

>

${icon}

</div>

`,

iconSize:[34,34],
iconAnchor:[17,17]

});

/* MARKER */

const marker = L.marker(
[place.lat,place.lon],
{
icon:emojiIcon
}
).addTo(map);

/* SAVE */

allMarkers.push({
marker,
name
});

/* POPUP */

marker.bindPopup(`

<div class="modernPopup">

<div class="popupTop">

<div>

<h2>${name}</h2>

<p>${type}</p>

</div>

</div>

<div class="crowdBar">

<div
class="crowdFill"
style="width:${crowd}%"
></div>

</div>

<div class="popupInfo">

<span>
👥 ${crowd}%
</span>

<span>
🔊 ${noise}%
</span>

</div>

<div style="margin-top:14px;">

<img
src="${photo}"
style="
width:100%;
height:120px;
object-fit:cover;
border-radius:14px;
margin-bottom:12px;
"
/>

<div style="
font-size:13px;
margin-bottom:10px;
color:#888;
">

💬 ${getRandomComment()}

</div>

<button
class="minimalBtn"
onclick="reportPlace('${name}')"
>
Update vibe
</button>

<button
class="minimalBtn"
style="
margin-top:10px;
background:#00ffd5;
color:black;
"
onclick="toggleFavorite({
name: '${name}',
type: '${type}',
crowd: '${crowd}',
noise: '${noise}',
photo: '${photo}'
})"
>
♡ Save Place
</button>

</div>

</div>

`);

});

},

()=>{

alert(
'Please allow location access'
);

}

);