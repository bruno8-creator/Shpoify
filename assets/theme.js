document.addEventListener('DOMContentLoaded', () => {
  const variantSelectors = document.querySelectorAll('[data-variant-selector]');

  variantSelectors.forEach((selector) => {
    selector.addEventListener('change', (event) => {
      const form = event.target.closest('form');
      const priceTarget = document.querySelector('[data-product-price]');
      const option = event.target.selectedOptions[0];

      if (!form || !option) return;
      form.querySelector('[name="id"]').value = option.value;

      if (priceTarget && option.dataset.price) {
        priceTarget.textContent = option.dataset.price;
      }
    });
  });
});
