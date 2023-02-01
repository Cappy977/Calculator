function add(num1, num2) {
    return num1 + num2
}

function substract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '-':
            return substract(num1, num2);
        case '+':
            return add(num1, num2);
    }
}

const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const dot = document.querySelector('.dot');
const operators = document.querySelectorAll('operator');
const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous')

currentScreen.innerText = ''
previousScreen.innerText = '';
let displayValue = ''

numbers.forEach(number => number.addEventListener('click', function () {
    storeNumber(this.innerText)
    currentScreen.innerText = displayValue;
}));

function storeNumber(num) {
    displayValue += num;
}

clear.addEventListener('click', () => {
    previousScreen.innerText = '';
    displayValue = ''
    currentScreen.innerText = '';
})

dot.addEventListener('click', function() {
    if (currentScreen.innerText === '' || currentScreen.innerText.includes('.')) return
    storeNumber(this.innerText)
    currentScreen.innerText = displayValue;
})

