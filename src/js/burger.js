// BURGER
const burger = document.querySelector(".icon-menu"),
  menu = document.querySelector(".menu__body");
burger.addEventListener("click", () => {
  burger.classList.toggle("icon-menu_active");
  menu.classList.toggle("menu__body_active");
});
