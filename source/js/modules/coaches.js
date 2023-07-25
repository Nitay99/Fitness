// eslint-disable-next-line
import Swiper, {Navigation} from '../vendor/swiper';

const infoCoaches = document.querySelectorAll('.coach__info');

const initCoachesSlider = () => {
  Swiper.use([Navigation]);
  // eslint-disable-next-line
  const swiper = new Swiper('.coaches__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

if (infoCoaches.length >= 1) {
  infoCoaches.forEach((infoCoach) => {
    infoCoach.addEventListener('click', (evt) => {
      evt.preventDefault();
      infoCoach.focus();
    });
  });
}

export {initCoachesSlider};
