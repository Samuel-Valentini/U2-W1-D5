console.log("script.js online");

const nav = document.querySelector("nav");
const navButton = document.querySelector("nav button");
console.log(nav);

window.addEventListener("scroll", () => {
  nav.classList.toggle("whitening", window.scrollY > 350);
  navButton.classList.toggle("green-painter", window.scrollY > 350);
});
