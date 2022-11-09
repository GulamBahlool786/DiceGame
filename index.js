var a = Math.floor(Math.random() * 6) + 1;
var i1 = "dice" + a + ".png";
var imgl = "images/" + i1;
var r = document.querySelectorAll("img")[0];
r.setAttribute("src", imgl);

var b = Math.floor(Math.random() * 6) + 1;
var i2 = "dice" + b + ".png";
var imgm = "images/" + i2;
var s = document.querySelectorAll("img")[1];
s.setAttribute("src", imgm);

if (a > b) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
} else if (b > a) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Their is Tie";
}
