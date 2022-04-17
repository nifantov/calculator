//Math functions 
const add = (x, y) => (x + y);
const subtract = (x, y) => (x - y); 
const multiply = (x, y) => (x * y);
const devide = (x, y) => (x / y);

//DOM
const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const plusminusBtn = document.getElementById("plusminus");
const commaBtn = document.getElementById("comma");
const display = document.getElementById("result");


//get operator and two numbers => call appropriate functions
const operate = (operator, x, y) => {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "x":
            return multiply(x, y);
        case "÷":
            return devide(x, y);
    }
};

//button listeners

window.addEventListener("keydown", keyListener);
numberBtn.forEach((btn) => 
    btn.addEventListener("click", () => addNumber(btn.textContent))
);

operatorBtn.forEach((btn) =>
    btn.addEventListener("click", () => setOperator(btn.textContent))
);

equalBtn.addEventListener("click", () => getEqual());
clearBtn.addEventListener("click", () => restart());
deleteBtn.addEventListener("click", () => delNumber());
plusminusBtn.addEventListener("click", () => plusminus());
commaBtn.addEventListener("click", () => addComma());

//key listener
function keyListener(e) {
    if (e.key >= 0 && e.key <= 9) addNumber(e.key);
    if (e.key === ".") addComma();
    if (e.key === "=" || e.key === "Enter") getEqual();
    if (e.key === "Backspace" || e.key === "Delete") delNumber();
    if (e.key === "Escape") restart();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') setOperator(convertOperator(e.key));
  };

function convertOperator(operator) {
    if (operator === '/') return '÷'
    if (operator === '*') return 'x'
    if (operator=== '-') return '-'
    if (operator === '+') return '+'
};

//add a number to display
function addNumber(number) {
    if (display.textContent === "0" || clearDisplay) clear();
    display.textContent += number; 
};

//get a operator
const setOperator = ((operator) => {
    if (currOperator != 0) getEqual ();
    currOperator = operator;
    clearDisplay = true;
    firstNumber = display.textContent;
});

//delete 
const delNumber = () => {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") display.textContent = "0"; 
};

//clear screen
const clear = () => { 
    display.textContent = "";
    clearDisplay = false;
};

//restart
const restart = () => {
    clearDisplay = false;
    currOperator = 0;
    firstNumber = 0;
    secondNumber = 0;
    display.textContent = "0";
};

//equal
const getEqual = () => {
    if (currOperator === 0 || clearDisplay) return;
    if (currOperator === "÷" && display.textContent === "0") {
        alert("OOPS! You can't devide by zero");
        return;
    } 
    secondNumber = display.textContent;
    display.textContent = roundResult(operate(currOperator, firstNumber, secondNumber));
    clearDisplay = true;
    currOperator = 0;
};

//change
const plusminus = () => {
    return display.textContent = - Number(display.textContent);
};

//add comma to number
const addComma = () => {
    if (clearDisplay) clear();
    if (display.textContent === "") display.textContent === "0";
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
};

function roundResult(number) {
    return (Math.round(number * 1000) / 1000);
};

restart();

    

