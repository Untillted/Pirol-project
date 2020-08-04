document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".icon-menu"),
    menu = document.querySelector(".menu__body");
  console.log(burger);
  burger.addEventListener("click", () => {
    burger.classList.toggle("icon-menu_active");
    menu.classList.toggle("menu__body_active");
  });
});
