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
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operator) {
        case '/':
            return divide(num1, num2);
        case 'x':
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
const equal = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');
const currentScreen = document.querySelector('.current');
const previousScreen = document.querySelector('.previous')
const zero = document.querySelector('.zero');

let operator = '';
let previousValue = '';
let currentValue = '';

numbers.forEach(number => number.addEventListener('click', function (e) {
    handleNumber(e.target.innerText)
    currentScreen.innerText = currentValue;
}));

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

operators.forEach(op => op.addEventListener('click', function (e) {
    if (currentValue != '' && previousValue != '') {
        if (operator === '/' && currentValue === '0') {
            currentScreen.innerText = 'Dividing by 0';
            currentValue = '';
            previousValue = '';
            previousScreen.innerText = '';
        } else {
            previousValue = operate(previousValue, currentValue, operator);
            handleOperator2(e.target.innerText)
            previousScreen.innerText = previousValue + ' ' + operator;
            currentScreen.innerText = currentValue;
        }
    } else {
        handleOperator(e.target.innerText)
        previousScreen.innerText = previousValue + ' ' + operator;
        currentScreen.innerText = currentValue;
    }
}))

function handleOperator(op) {
    operator = op;
    previousValue = roundNumber(currentValue);
    currentValue = '';
}

function handleOperator2(op) {
    operator = op;
    previousValue = roundNumber(previousValue);
    currentValue = '';
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000
}

equal.addEventListener('click', function () {
    if (currentValue != '' && previousValue != '') {
        if (operator === '/' && currentValue === '0') {
            currentScreen.innerText = 'Dividing by 0';
            previousValue = '';
            previousScreen.innerText = '';
        } else {
            currentValue = operate(previousValue, currentValue, operator);
            currentScreen.innerText = roundNumber(currentValue);
            previousValue = '';
            previousScreen.innerText = '';
        }
    }
})


clear.addEventListener('click', () => {
    previousScreen.innerText = '';
    currentScreen.innerText = '';
    currentValue = '';
    previousValue = '';
    operator = '';
})

dot.addEventListener('click', function (e) {
    if (currentScreen.innerText === '' || currentScreen.innerText.includes('.') || currentScreen.innerText.length > 5) return;
    handleNumber(e.target.innerText);
    currentScreen.innerText = currentValue;
})
