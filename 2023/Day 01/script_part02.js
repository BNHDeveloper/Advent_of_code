import input from './input.js';
let number = [
    [{value: 1},{length: 3}, {firstLatter: 'o'}],
    [{value: 2}, {length: 3}, {firstLatter: 't'}],
    [{value: 3},{ length: 5}, {firstLatter: 't'}],
    [{value: 4}, {length: 4}, {firstLatter: 'f'}],
    [{value: 5}, {length: 4}, {firstLatter: 'f'}],
    [{value: 6}, {length: 3}, {firstLatter: 's'}],
    [{value: 7}, {length: 5}, {firstLatter: 's'}],
    [{value: 8}, {length: 5}, {firstLatter: 'e'}],
    [{value: 9}, {length: 4}, {firstLatter: 'n'}]
];
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
// concat the digit and do the sum 
function getDigit(text) {
    let firstOne = firstDigit(text);
    let secondOne = secondDigit(text);
    sum += firstOne * 10 + secondOne;
    console.log(text);
    console.log(firstOne);
    console.log(secondOne);
    console.log(firstOne * 10 + secondOne);
    console.log("the number is " + (firstOne * 10 + secondOne));
    // console.log("the sum "+sum);
    console.log("\n");
}
// find first digit 
function firstDigit(text) {
    let num = 0, first = true;
    text.split("").map((e, index) => {
        if(Number.isInteger(+e) && e != "\n") {
            if (num == 0 && first) {
                num = parseInt(e);
                first = false;
            }
            return parseInt(e);
        } else if(isNaN(e)) {
            number.map(letter => {
                if(letter[2].firstLatter == e && first) {
                    num = stringNumber(text, true, e,index);
                    num!=0?first = false:null;
                }
            })
        }
    })
    return num;
}
// find last digit 
function secondDigit(text) {
    let num = 0;
    text.split("").map((e, index) => {
        if(Number.isInteger(+e) && e != "\n") {
            num = parseInt(e);
        }else if(isNaN(e) && e != "\n") {
            number.map(letter => {
                if(letter[2].firstLatter == e) {
                    num = num != 0 && stringNumber(text, false, e,index) == 0 ? num : stringNumber(text, false, e,index);
                }
            })
        }
    })
    return num;
}
// find the string number 
function stringNumber(text, fisrt,latterShow,indexLater) {
    let regExp = new RegExp('(one|two|three|four|five|six|seven|eight|nine)', "g");
    let nombre = 0;
    if(text.match(regExp)?.length > 0) {
        if(fisrt) {
            let stringNumber = text.match(regExp)[0];
            if(indexLater == text.indexOf(stringNumber)) {
                nombre = latterShow == stringNumber.split('')[0] ?
                changeToInteger(text.match(regExp)[0])
                : 0;
            }
        } else {
            let stringNumber = text.match(regExp)[text.match(regExp).length - 1];
            if(stringNumber == 'eight') {
                if (text.includes('eightwo') && indexLater == text.lastIndexOf('eightwo')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('two'):0;
                } else if(text.includes('eighthree') && indexLater == text.lastIndexOf('eighthree')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('three'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }else if(stringNumber == 'one') {
                if (text.includes('oneight') && indexLater == text.lastIndexOf('oneight')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('eight'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }else if(stringNumber == 'three') {
                if (text.includes('threeight') && indexLater == text.lastIndexOf('threeight')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('eight'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }
            else if(stringNumber == 'two') {
                if (text.includes('twone') && indexLater == text.lastIndexOf('twone')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('one'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }
            else if(stringNumber == 'five') {
                if (text.includes('fiveight') && indexLater == text.lastIndexOf('fiveight')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('eight'):0;
                }else {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }
            else if(stringNumber == 'seven') {
                if (text.includes('sevenine') && indexLater == text.lastIndexOf('sevenine')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('nine'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            }
            else if(stringNumber == 'nine') {
                if (text.includes('nineight') && indexLater == text.lastIndexOf('nineight')) {
                    nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger('eight'):0;
                }else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
                }
            } else {
                nombre = latterShow == stringNumber.split('')[0] && text.includes(stringNumber) && indexLater == text.lastIndexOf(stringNumber) ?changeToInteger(text.match(regExp)[text.match(regExp).length - 1]):0;
            }
        }
    }
    return nombre;
}
// change the string number to integer
function changeToInteger(value) {
    let nombre = 0
    switch (value) {
        case "one":
            nombre= 1
            break;
        case "two":
            nombre= 2
            break;
        case "three":
            nombre= 3
            break;
        case "four":
            nombre= 4
            break;
        case "five":
            nombre= 5
            break;
        case "six":
            nombre= 6
            break;
        case "seven":
            nombre= 7
            break;
        case "eight":
            nombre= 8
            break;
        case "nine":
            nombre= 9
            break;
        default:
            nombre= 0
    }
    return parseInt(nombre);
}