document.addEventListener("DOMContentLoaded", () => {
  // BURGER
const burger = document.querySelector(".icon-menu"),
  menu = document.querySelector(".menu__body");
burger.addEventListener("click", () => {
  burger.classList.toggle("icon-menu_active");
  menu.classList.toggle("menu__body_active");
});
;
  // SLIDER
const slider = document.querySelector(".slider__row"),
  slides = document.querySelectorAll(".slider__content"),
  dots = document.querySelectorAll(".dots__item");
dots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    let size = slides[0].offsetWidth;
    slider.style.transform = `translateX(${-size * i}px)`;
    dotsActive(i);
  });
});

function dotsActive(index) {
  dots.forEach((dot) => {
    dot.classList.remove("dots__item_active");
    dots[index].classList.add("dots__item_active");
  });
}
;
});
