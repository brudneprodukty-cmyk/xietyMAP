/* PLACE PHOTOS */

const placePhotos = [

"https://images.unsplash.com/photo-1514933651103-005eec06c04b",

"https://images.unsplash.com/photo-1552566626-52f8b828add9",

"https://images.unsplash.com/photo-1521017432531-fbd92d768814",

"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

];

function getRandomPhoto(){

return placePhotos[
Math.floor(
Math.random()*placePhotos.length
)
];

}