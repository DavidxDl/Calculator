const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b0 = document.getElementById('zero');
const display = document.querySelector('.display');
const clear = document.getElementById('clear');


b1.addEventListener('click', () => {
    display.innerText += '1';
})

clear.addEventListener('click', () => {
    display.innerText = '';
})

function add(n1, n2){
    return n1 + n2;
}

function sustract (n1, n2){
    return n1 - n2;
}

function multiply (n1, n2){
    return n1 * n2;
}

function divide (n1, n2){
    return n1 / n2;
}

function operator (op, n1, n2){

}

