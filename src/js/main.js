const { Button } = require("bootstrap");

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var focus = document.querySelectorAll(".focus");
focus.forEach((element) => {
  element.onclick = function () {
    element.classList.toggle("is-active");
  };
});

var progress = document.querySelector(".progress");
var btn = document.getElementById("verification");
var score = 0;
btn.onclick = function () {
  score += 10;
  progress.value = score;
};
