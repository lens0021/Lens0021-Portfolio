"strict";

function hide(element) {
  element.style.display = "none";
}
function show(element) {
  element.style.display = "";
}

function sticky() {
  const nav = document.getElementById("nav");

  if (window.pageYOffset >= document.documentElement.clientHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const ko = document.querySelectorAll(".ko");
const en = document.querySelectorAll(".en");
const ja = document.querySelectorAll(".ja");

document.querySelector("#language-ko-button").onclick = event => {
  event.preventDefault();
  ko.forEach(show);
  en.forEach(hide);
  ja.forEach(hide);
};
document.querySelector("#language-en-button").onclick = event => {
  event.preventDefault();
  ko.forEach(hide);
  en.forEach(show);
  ja.forEach(hide);
};
document.querySelector("#language-ja-button").onclick = event => {
  event.preventDefault();
  ko.forEach(hide);
  en.forEach(hide);
  ja.forEach(show);
};

window.addEventListener("scroll", sticky);
sticky();
