const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const myNav = document.querySelector("#myNav");

navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navItem.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  } else if (visibility === "false") {
  }
});

myNav.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navItem.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  } else if (visibility === "false") {
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
