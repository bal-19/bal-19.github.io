// script for navbar section
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

// scrolling animation
const homeElement = document.querySelector("#home");
const aboutElement = document.querySelector("#about");
const skillElement = document.querySelector("#skill");
const projectElement = document.querySelector("#project");
const contactElement = document.querySelector("#contact");

// #home
document
  .querySelector('a[href="#home"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(homeElement);
  });

// #about
document
  .querySelector('a[href="#about"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(aboutElement);
  });

// #skill
document
  .querySelector('a[href="#skill"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(skillElement);
  });

// #project
document
  .querySelector('a[href="#project"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(projectElement);
  });

// #contact
document
  .querySelector('a[href="#contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    scrollToElement(contactElement);
  });

function scrollToElement(element) {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
}
