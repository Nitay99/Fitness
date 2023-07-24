const buySection = document.querySelector('.buy');
const button = document.querySelector('.main-header__btn');

const scrollToBuy = () => {
  buySection.scrollIntoView();
};

const setBuySectionButtonHandler = () => {
  button.addEventListener('click', scrollToBuy);
};

export {setBuySectionButtonHandler};
