
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var spancor = document.getElementsByTagName('span')[0];

function negativo() {
    spancor.style.color = 'red';
    spancor.style.fontWeight = 'bold';
}

function positivo() {
    spancor.style.color = 'blue';
    spancor.style.fontWeight = 'bold';
}

function neutro() {
    spancor.style.color = 'black';
    spancor.style.fontWeight = '100';
}

function valueColor() {
    currentNumber > 0 ? positivo() : currentNumber < 0 ? negativo() : neutro();
}

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    valueColor();
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    valueColor();
}