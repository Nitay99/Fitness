const priceWraps = document.querySelectorAll('.subscription-card__price-wrap');

if (priceWraps.length >= 1) {
  priceWraps.forEach((priceWrap) => {
    const price = priceWrap.querySelector('.subscription-card__price');
    if (price) {
      priceWrap.setAttribute('data-parent', price.textContent);
    }
  });
}
