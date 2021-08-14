const btn = document.getElementById("nav_toggle");
const links = document.querySelector(".nav_links");
const navbar = document.querySelector(".navs");
const scroll_link = document.querySelectorAll(".scroll_link");

// toggle links
btn.addEventListener("click", () => {
    links.classList.toggle("show_links");
});