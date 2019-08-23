"strict";

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

document.querySelectorAll(".language-button").forEach(btn => {
  btn.addEventListener("click", event => {
    event.preventDefault();
    for (code in langElements) {
      langElements[code].forEach(element => {
        element.style.display = code == btn.lang ? "" : "none";
      });
    }
  });
});
window.addEventListener("scroll", sticky);
sticky();
