"use strict";

let lampadina = document.getElementById("lampadina");
let interruttore = document.getElementById("switch");

function onOff() {
    if (lampadina.src.includes("white_lamp.png")) {
        lampadina.src = "img/yellow_lamp.png";
    } else {
        lampadina.src = "img/white_lamp.png";
    }
}


interruttore.addEventListener("click", onOff);