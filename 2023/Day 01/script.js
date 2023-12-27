import input from './input.js';

let text = document.querySelector('textarea'),
    value = document.querySelector('span'),
    button = document.querySelector("button"),
    sum=0;

text.innerHTML = input;

button.addEventListener('click', () => {
    text.value.split("\n").map(e => {
    e != ''&& e != ' ' ? getDigit(e) : null;  
    }
    )
    value.innerHTML = sum;  
    sum = 0;
})
function getDigit(text) {
    let firstOne = firstDigit(text);
    let secondOne = secondDigit(text);
    sum += firstOne * 10 + secondOne;
    console.log(sum);
}
function firstDigit(text) {
    let num = 0, first = true;
    text.split("").map(e => {
        if(Number.isInteger(+e) && e != "\n") {
            if (num == 0 && first) {
                num = parseInt(e);
                first = false;
            }
            return parseInt(e);
        }
    })
    return num;
}
function secondDigit(text) {
    let num = 0;
    text.split("").map(e => {
        if(Number.isInteger(+e) && e != "\n") {
            num = parseInt(e);
        }
    })
    return num;
}