const buySection = document.querySelector('.buy');
const button = document.querySelector('.main-header__btn');

const scrollToBuy = () => {
  if (buySection) {
    buySection.scrollIntoView();
  }
};

const setBuySectionButtonHandler = () => {
  if (button) {
    button.addEventListener('click', scrollToBuy);
  }
};

export {setBuySectionButtonHandler};
