"use strict";

const nav = document.getElementById("nav");
const langElements = {
  ko: document.querySelectorAll(".ko"),
  en: document.querySelectorAll(".en"),
  ja: document.querySelectorAll(".ja")
};

function sticky() {
  if (window.pageYOffset >= document.documentElement.clientHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

function setLanguage(lang) {
  for (let code in langElements) {
    langElements[code].forEach(element => {
      element.style.display = code == lang ? "" : "none";
    });
  }
}

document.querySelectorAll(".language-button").forEach(btn => {
  btn.addEventListener("click", event => {
    event.preventDefault();
    setLanguage(btn.lang);
  });
});
window.addEventListener("scroll", sticky);
sticky();

switch (window.navigator.language || window.navigator.userLanguage) {
  case "ko":
  case "ko-KR":
    setLanguage("ko");
    break;
  case "ja":
  case "ja-JP":
    setLanguage("ja");
    break;
  default:
    setLanguage("en");
    break;
}
