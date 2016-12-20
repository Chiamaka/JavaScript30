/**
 * Created by chiamaka on 12/18/16.
 */

"use strict";

const submitBtn = document.querySelector('button[type=submit]');
const resultBtn = document.getElementById('results');
const calculateField = document.getElementById('calculate');

function App() {
    this.all = [];
};

App.prototype = {
    calculate: function (num1, num2) {
        let sum = num1 + num2;
        this.all.push(sum);
        return sum;
    },
    allResults: function () {
        return this.all.join("\n");
    }
};

const calcInstance = new App();

submitBtn.addEventListener('click', function () {
    calcInstance.textContent = '';
    const numberOne = parseInt(document.getElementById('number1').value);
    const numberTwo = parseInt(document.getElementById('number2').value);
    calculateField.textContent = calcInstance.calculate(numberOne, numberTwo);
});

resultBtn.addEventListener('click', () => {
    const p = document.querySelector('#showResults p');
    const h2 = document.querySelector('#showResults h2');
    h2.style.display = 'block';
    p.innerText = calcInstance.allResults();
});