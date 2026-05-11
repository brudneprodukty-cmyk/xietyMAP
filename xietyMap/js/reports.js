function reportPlace(name){

document.getElementById(
'reportCount'
).innerText =

Number(
document.getElementById(
'reportCount'
).innerText
)+1;


alert(
'Thanks for updating ' + name
);

}

/* ONLINE USERS */

setInterval(()=>{

document.getElementById(
'onlineUsers'
).innerText =

Math.floor(
Math.random()*500
)+100;

},3000);