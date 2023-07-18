const priceWraps = document.querySelectorAll('.subscription-card__price-wrap');

for (let priceWrap of priceWraps) {
  const price = priceWrap.querySelector('.subscription-card__price');
  priceWrap.setAttribute('data-parent', price.textContent);
}
