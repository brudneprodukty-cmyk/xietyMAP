/* LIVE NOTIFICATIONS */

const notifications = [

"🔥 Neon Club getting busy",

"☕ Café now quiet",

"📚 Library packed",

"🎉 Student bar active tonight",

"🏋️ Gym currently calm"

];

function randomNotification(){

const text = notifications[
Math.floor(
Math.random()*notifications.length
)
];

console.log(text);

}

/* AUTO */

setInterval(()=>{

randomNotification();

},10000);