const button = document.querySelectorAll('button')
const display = document.querySelector('.display');
const clear = document.getElementById('clear');
const addBtn = document.getElementById('add');
const result = document.getElementById('result');
const multiplyBtn = document.getElementById('multiply');
const substractBtn = document.getElementById('sustract');
const divideBtn = document.getElementById('divide');
let displayValue = ''
let Operator = null;
let firstN = null;
let sign = null;


button.forEach(button => button.addEventListener('click', (e) => {
    (display.innerText == 0)? display.innerText = e.target.value:
    display.innerText += e.target.value
    displayValue += e.target.value })
)

clear.addEventListener('click', () => {
    display.innerText = 0;
    displayValue = '';
    firstN = null;
    
})
result.addEventListener('click', () =>{
    operatorOP()
})

addBtn.addEventListener('click', () =>{
    operatorOP();
    displayValue += '+';
    display.innerText += '+';
    sign = '+';

    Operator = add;
    
    
})
substractBtn.addEventListener('click', () =>{
    operatorOP();
    Operator = substract;
    sign = '-';
    display.innerText += '-';
    displayValue += '-';
})
divideBtn.addEventListener('click', () =>{
    operatorOP();
    sign = '/';
    Operator = divide;
    displayValue += '/';
    display.innerText += '/';
})
multiplyBtn.addEventListener('click', () =>{
    operatorOP();
    Operator = multiply;
    sign = '*';
    displayValue += '*';
    display.innerText += '*';
})

function operatorOP(){
    if (firstN === null){
        firstN = Number(displayValue);}
        else if (firstN !== null && displayValue == ''){
            return;

        }
        else{
        const secondN = Number(displayValue.split(sign)[1]);
        firstN = Operator(firstN, secondN);
        }
        
        displayValue  = '';
        sign = null;

}


function add(n1, n2){
   const total = n1 + n2;
    display.innerText = total;
    return total;
}

function substract (n1, n2){
    total = n1 - n2;
    display.innerText = total;
    return n1 - n2;
}

function multiply (n1, n2){
    total = n1 * n2
    display.innerText = total;
    return n1 * n2;
}

function divide (n1, n2){
    (n2 == 0)? total = 'cannot divide by 0':
    total = n1 / n2;
    display.innerText = total;
    return n1 / n2;
}


