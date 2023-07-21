import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {setPlayClickHandler} from './modules/video';
import './modules/price';
import {initTabs} from './vendor/init-tabs';
import Swiper, {Navigation} from './vendor/swiper';
import {setBuyButtonHandler} from './utils/scroll-to-buy';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Vendor
  // ---------------------------------
  Swiper.use([Navigation]);
  const swiper = new Swiper('.slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  initTabs();

  // Utils
  // ---------------------------------

  iosVhFix();
  setPlayClickHandler();
  setBuyButtonHandler();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const swiper = new Swiper('.reviews__slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 1,
      spaceBetween: 10,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
