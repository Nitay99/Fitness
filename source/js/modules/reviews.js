import Swiper, {Navigation} from '../vendor/swiper';

const initReviewsSlider = () => {
  // createSlider('.reviews__slider', false, 1, 1, 1);

  Swiper.use([Navigation]);
  const swiper = new Swiper('.reviews__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
      disabledClass: 'reviews__slider-button-disabled',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
};

export {initReviewsSlider};
