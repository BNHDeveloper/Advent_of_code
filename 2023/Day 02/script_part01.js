import input from './input.js';

let text = document.querySelector('textarea'),
    value = document.querySelector('span'),
    button = document.querySelector("button"),
    sum=0;

text.innerHTML = input;

button.addEventListener('click', () => {
    text.value.split("\n").map((ele) => {
        let idGame = getGameId(ele);
        console.log(getId(ele, idGame, 12, 13, 14));
        sum += getId(ele, idGame, 12, 13, 14);
        console.log("the sum "+sum+"\n");
    })
    value.innerHTML = sum;
    sum=0;
})

function getGameId(text) {
    let num = parseInt(text.split(":")[0].split('')[5]);
    if(text.split(":")[0].split('')[7] != undefined) {
        num = parseInt(num+text.split(":")[0].split('')[6]+text.split(":")[0].split('')[7]);
    }else if (text.split(":")[0].split('')[6] != undefined) {
        num = parseInt(num+text.split(":")[0].split('')[6]);
    }
    return num;
}

// function somme of id that game will be possible
function getId(input, id, red, green, blue) {
    let redNumber = 0, greenNumber = 0, blueNumber = 0,possible=true;
    console.log("id = "+id);
    input.split(";").map(content => {
        let arr = [0,0,0];
        arr = cubColorNumber(content);
        redNumber = arr[0];
        greenNumber = arr[1];
        blueNumber = arr[2];
        redNumber <= red  && greenNumber <= green  && blueNumber <= blue ?null:possible=false;
    })
    console.log(possible);
    console.log("%cgreen  " + greenNumber + " %cred " + redNumber + " %cblue " + blueNumber, "color:green", "color:red", "color:blue");
    return  possible ? id : 0;
}

function cubColorNumber(round) {
    let green = 0, blue = 0, red = 0;
    console.log(round);
    green = getGreen(round);
    blue = getBlue(round);
    red = getRed(round);
    return [red, green, blue];
}
function getGreen(text) {
    let index = 0, back = false;
    text.indexOf('green') ? index = text.indexOf('green') - 2 : null;
    Number.isInteger(parseInt(text.split('')[index - 1])) ? back = true : 0;
    return index!=0 && index>0 && back!=true?parseInt(text.split('')[index]):twoNumber(text,index,'green');
}
function getBlue(text) {
    let index = 0, back = false;
    text.indexOf('blue') ? index = text.indexOf('blue') - 2 : null;
    Number.isInteger(parseInt(text.split('')[index - 1])) ? back = true : 0;
    return index!=0 && index>0 && back!=true?parseInt(text.split('')[index]):twoNumber(text,index,'blue');
}
function getRed(text) {
    let index = 0, back = false;
    text.indexOf('red') ? index = text.indexOf('red') - 2 : null;
    Number.isInteger(parseInt(text.split('')[index - 1])) ? back = true : 0;
    return index!=0 && index>0 && back!=true?parseInt(text.split('')[index]):twoNumber(text,index,'red');
}
function twoNumber(text,index,color) {
    let num = 0;
    if(text.indexOf(color) && index>0) {
        let arrText;
        arrText = text.split('');
        num = parseInt(arrText[index - 1] + arrText[index]);
    }
    return num
}