console.log("script.js online");

const nav = document.querySelector("nav");
console.log(nav);

window.addEventListener("scroll", () => {
  nav.classList.toggle("whitening", window.scrollY > 350);
});
