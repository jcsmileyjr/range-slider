const inputRange = document.querySelector('input[name="inputRange"]');
const amount = document.querySelector('#amount');

/***
 * Function to update the dollar amount and input range when user moves the range slider.d
 */
inputRange.addEventListener('change', function (event) {
    amount.innerHTML= event.target.value;
    inputRange.style.backgroundSize = `${(event.target.value * 100) / 20}% 100%`;
});