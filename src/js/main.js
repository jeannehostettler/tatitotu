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
  var solution = "vous faites";

  if (answer == solution) {
    alert("Correct!!");
    score += 10;
  } else {
    alert("Faux, la réponse était 'vous faites'");
  }
  progress.value = score;
};

var checkAllTrigger = document.querySelector(".check-all");
var buttons = document.querySelectorAll(".added");
var uncheckAllTrigger = document.querySelector(".unselect");
console.log(checkAllTrigger, buttons);
var checkAll = function () {
  buttons.forEach((added) => {
    added.classList.toggle("is-active");
  });
};
checkAllTrigger.addEventListener("click", checkAll);
console.log(uncheckAllTrigger, buttons);
var uncheckAll = function () {
  buttons.forEach((added) => {
    added.classList.remove("is-active");
  });
};
uncheckAllTrigger.addEventListener("click", uncheckAll);

var verbes = ["être", "dire", "avoir", "manger", "savoir"];
var textfield = document.querySelector(".textfield");
var suggestions = document.querySelector(".suggestions");
var autocomplete = function () {
  var items = verbes.filter((value) => value.includes(textfield.value));
  suggestions.innerHTML = items.join(", ");
};
textfield.addEventListener("keyup", autocomplete);

var radioWith = document.querySelector(".radio-with");
var options = document.querySelector(".more-options");
var radioWithout = document.querySelector(".radio-without");
var showoptions = function () {
  options.style.display = "block";
};
var hideoptions = function () {
  options.style.display = "none";
};
radioWith.addEventListener("change", showoptions);
radioWithout.addEventListener("change", hideoptions);
