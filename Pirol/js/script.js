// BURGER
const burger = document.querySelector(".icon-menu"),
  menu = document.querySelector(".menu__body");
burger.addEventListener("click", () => {
  burger.classList.toggle("icon-menu_active");
  menu.classList.toggle("menu__body_active");
});
;
const slider = document.querySelector(".slider__row"),
  slides = document.querySelectorAll(".slider__content"),
  dots = document.querySelectorAll(".dots__item"),
  size = slides[0].clientWidth;

dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    slider.style.transform = `translateX(${-size * i}px)`;
  });
});
;