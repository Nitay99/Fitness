import Swiper, {Navigation} from '../vendor/swiper';

const infoCoaches = document.querySelectorAll('.coach__info');

const initCoachesSlider = () => {
  // createSlider('.coaches__slider', true, 4, 2, 1);

  Swiper.use([Navigation]);
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
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
};

for (let infoCoach of infoCoaches) {
  infoCoach.addEventListener('click', (evt) => {
    evt.preventDefault();
    infoCoach.focus();
  });
}

export {initCoachesSlider};
