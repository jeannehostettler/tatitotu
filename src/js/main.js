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
var field = document.getElementById("field");
var score = 0;
btn.onclick = function () {
  var answer = field.value;
  var solution = "faire";

  if (answer == solution) {
    alert("juste");
    score += 10;
  } else {
    alert("faux");
  }
  progress.value = score;
};

var checkAllTrigger = document.querySelector(".check-all");
var buttons = document.querySelectorAll(".added");
console.log(checkAllTrigger, buttons);
var checkAll = function () {
  buttons.forEach((added) => {
    added.classList.toggle("is-active");
  });
};
checkAllTrigger.addEventListener("click", checkAll);
