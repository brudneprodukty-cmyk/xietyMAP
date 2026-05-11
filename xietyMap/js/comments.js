/* COMMENTS SYSTEM */

const comments = [

"Very quiet after 7pm",
"Good study spot",
"Packed tonight",
"Nice atmosphere",
"Too loud right now",
"Good for solo people"

];

function getRandomComment(){

return comments[
Math.floor(
Math.random()*comments.length
)
];

}