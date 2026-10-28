const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const body = document.body;

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("overflow-auto");
  body.classList.toggle("overflow-hidden");
}
