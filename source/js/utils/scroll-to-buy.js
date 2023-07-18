const buySection = document.querySelector('.buy');
const button = document.querySelector('.main-header__btn');

function scrollToBuy(evt) {
  evt.preventDefault();
  buySection.scrollIntoView();
}

const setBuyButtonHandler = () => {
  button.addEventListener('click', scrollToBuy);
};

export {setBuyButtonHandler};
