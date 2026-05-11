/* FAVORITES SYSTEM */

function getFavorites(){

return JSON.parse(
localStorage.getItem('favorites') || '[]'
);

}

function saveFavorites(data){

localStorage.setItem(
'favorites',
JSON.stringify(data)
);

}

function toggleFavorite(place){

let favorites = getFavorites();

/* CHECK EXISTS */

const exists = favorites.find(
p => p.name === place.name
);

if(exists){

alert(
place.name + ' already saved'
);

return;

}

/* SAVE */

favorites.push(place);

saveFavorites(favorites);

alert(
place.name + ' saved to favorites'
);

console.log(
localStorage.getItem('favorites')
);

}