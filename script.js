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
numberBtn.forEach((btn) => 
    btn.addEventListener("click", () => addNumber(btn.textContent))
);

operatorBtn.forEach((btn) =>
    btn.addEventListener("click", () => setOperator(btn.textContent))
);

equalBtn.addEventListener("click", () => getEqual());

clearBtn.addEventListener("click", () => restart());

deleteBtn.addEventListener("click", () => delNumber());

//
const addNumber = ((number) => {
    if (display.textContent === "0" || clearDisplay) clear();
    display.textContent += number; 
});    

const setOperator = ((operator) => {
    if (currOperator != 0) getEqual ();
    currOperator = operator;
    clearDisplay = true;
    firstNumber = display.textContent;
});

//delete 

const delNumber = () => {
    display.textContent = display.textContent.slice(0, -1);
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
    
    secondNumber = display.textContent;
    console.log(secondNumber);
    display.textContent = operate(currOperator, firstNumber, secondNumber);
    clearDisplay = true;
    currOperator = 0;
};

restart();
    

