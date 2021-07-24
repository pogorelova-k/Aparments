const slider = () => {
    const sliderPrice = document.getElementById('slider-price'),
        sliderSquare = document.getElementById('slider-square'),
        inputPriceLow = document.getElementById('input-price-low'),
        inputPriceHigh = document.getElementById('input-price-high'),
        inputSquareLow = document.getElementById('input-square-low'),
        inputSquareHigh = document.getElementById('input-square-high');

    // SLIDER RANGE PRICE
    noUiSlider.create(sliderPrice, {
        start: [5500000, 18900000],
        connect: true,
        range: {
            'min': 0,
            'max': 37800000
        }
    });

    sliderPrice.noUiSlider.on('update', function (values, handle) {

        const value = values[handle];

        if (handle) {
            inputPriceHigh.value = Math.round(value).toLocaleString('ru');
        } else {
            inputPriceLow.value = Math.round(value).toLocaleString('ru');
        }
    });

    inputPriceLow.addEventListener('change', function () {
        sliderPrice.noUiSlider.set([this.value, null]);
    });

    inputPriceHigh.addEventListener('change', function () {
        sliderPrice.noUiSlider.set([null, this.value]);
    });

    // SLIDER RANGE SQUARE
    noUiSlider.create(sliderSquare, {
        start: [33, 123],
        connect: true,
        range: {
            'min': 0,
            'max': 246
        }
    });

    sliderSquare.noUiSlider.on('update', function (values, handle) {

        const value = values[handle];

        if (handle) {
            inputSquareHigh.value = Math.round(value).toLocaleString('ru');
        } else {
            inputSquareLow.value = Math.round(value).toLocaleString('ru');
        }
    });

    inputSquareLow.addEventListener('change', function () {
        sliderSquare.noUiSlider.set([this.value, null]);
    });

    inputSquareHigh.addEventListener('change', function () {
        sliderSquare.noUiSlider.set([null, this.value]);
    });
}

export default slider;