const button = document.querySelectorAll('button')
const display = document.querySelector('.display');
const clear = document.getElementById('clear');
const addBtn = document.getElementById('add');
const result = document.getElementById('result');
const multiplyBtn = document.getElementById('multiply');
let displayValue = display.innerText;
let sign = null;
let firstN = null;
let secondN = null;
let total = null;


button.forEach(button => button.addEventListener('click', (e) => {
    (display.innerText == 0)? display.innerText = e.target.value:
    display.innerText += e.target.value
    displayValue += e.target.value })
)

clear.addEventListener('click', () => {
    display.innerText = 0;
    displayValue = 0;
    firstN = 0;
    secondN = 0;
})

addBtn.addEventListener('click', () =>{
    firstN = Number(displayValue);
    sign = add;
    display.innerText += '+';
})
multiplyBtn.addEventListener('click', () =>{
    firstN = Number(displayValue);
    sign = multiply;
    display.innerText += 'x';
})

result.addEventListener('click', () =>{
    let holder = display.innerHTML.split(/[+|,|x]/);
    secondN = Number(holder[1]);

    operator(firstN, secondN);
    sign = null;
    firstN = null;
    secondN = null;
    displayValue = display.innerHTML;
    
    
})










function operator(n1, n2){
    sign(n1, n2);

}


function add(n1, n2){
    total = n1 + n2;
    display.innerText = total;
    return n1 + n2;
}

function sustract (n1, n2){
    return n1 - n2;
}

function multiply (n1, n2){
    total = n1 * n2
    display.innerText = total;
    return n1 * n2;
}

function divide (n1, n2){
    return n1 / n2;
}


