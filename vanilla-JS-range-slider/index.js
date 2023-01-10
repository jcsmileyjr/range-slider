const test1 = document.querySelector('#test');
console.log(test1);

const inputRange = document.querySelector('input[name="inputRange"]');
console.log(inputRange)
inputRange.addEventListener('change', function (event) {
    console.log(event.target.value);
});