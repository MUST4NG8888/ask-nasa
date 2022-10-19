let root = document.getElementById("root");

let space = document.createElement("div");
space.id = "space";
document.querySelector("body").prepend(space);

let star = document.createElement("div");
document.getElementById("space").append(star);
star.id = "stars";
let star2 = document.createElement("div");
star2.id = "stars2";
document.getElementById("space").append(star2);
let star3 = document.createElement("div");
star3.id = "stars3";
document.getElementById("space").append(star3);

let shootingStar1 = document.createElement("span");
document.getElementById("space").append(shootingStar1);
shootingStar1.id = "shootingStar1";

let shootingStar2 = document.createElement("span");
document.getElementById("space").append(shootingStar2);
shootingStar2.id = "shootingStar2";

let shootingStar3 = document.createElement("span");
document.getElementById("space").append(shootingStar3);
shootingStar3.id = "shootingStar3";

let shootingStar4 = document.createElement("span");
document.getElementById("space").append(shootingStar4);
shootingStar4.id = "shootingStar4";

let shootingStar5 = document.createElement("span");
document.getElementById("space").append(shootingStar5);
shootingStar5.id = "shootingStar5";

let shootingStar6 = document.createElement("span");
document.getElementById("space").append(shootingStar6);
shootingStar6.id = "shootingStar6";

let shootingStar7 = document.createElement("span");
document.getElementById("space").append(shootingStar7);
shootingStar7.id = "shootingStar7";

let shootingStar8 = document.createElement("span");
document.getElementById("space").append(shootingStar8);
shootingStar8.id = "shootingStar8";

let planet = document.createElement("div");
planet.id = "planet";
space.after(planet);