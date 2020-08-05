// BURGER
const burger = document.querySelector(".icon-menu"),
  menu = document.querySelector(".menu__body");
burger.addEventListener("click", () => {
  burger.classList.toggle("icon-menu_active");
  menu.classList.toggle("menu__body_active");
});

// SLIDER

const slider = document.querySelector(".slider__row"),
    const slides = document.querySelectorAll('.slider__content');
    console.log(slides)
    alert(1)