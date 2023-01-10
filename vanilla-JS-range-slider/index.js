const inputRange = document.querySelector('input[name="inputRange"]');
const amount = document.querySelector('#amount');

inputRange.addEventListener('change', function (event) {
    console.log(event.target.value);
    inputRange.style.backgroundSize = `${(event.target.value * 100) / 20}% 100%`;
    amount.innerHTML= event.target.value;
});