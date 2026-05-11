/* NIGHTLIFE MODE */

let nightlifeEnabled = false;

function toggleNightlife(){

nightlifeEnabled =
!nightlifeEnabled;

if(nightlifeEnabled){

document.body.style.filter =
"saturate(1.2) brightness(0.9)";

alert(
"Nightlife Mode Enabled"
);

}else{

document.body.style.filter =
"none";

alert(
"Nightlife Mode Disabled"
);

}

}