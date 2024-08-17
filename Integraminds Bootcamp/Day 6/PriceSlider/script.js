const slider = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

slider.addEventListener('input', function() {
    priceValue.textContent = this.value;
});
