const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".numbers");
const acBtn = document.querySelector("#ac");
const changeSignBtn = document.querySelector("#changeSignBtn");
const percentBtn = document.querySelector("#percentBtn");
const operators = document.querySelectorAll(".operation");
const equalBtn = document.querySelector(".equal");

let selectedOperator = null;
let selectedOperatorFlag = false;
let num1 = null;
let num2 = null;

// Unhightlight operators and clear screen
function selectNextNum() {
    if (selectedOperatorFlag) {
        operators.forEach(operator => {
            operator.removeAttribute("id");
            selectedOperatorFlag = false;
            if (num1 === null) {
                num1 = screen.innerText;
            }
            
            console.log(num1);
            screen.innerText = "";
        });
    }
}

function calculate() {
    switch (selectedOperator) {
        case "+":
            return +num1 + +num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

function exceedMaxLength(innerText) {
    return innerText.length > 10
}

function addToScreen(num){
    // Check if "." is already on screen and not exceed max length
    if ((num === "." && screen.innerText.includes(".")) || exceedMaxLength(screen.innerText)) {
        return;
    }

    screen.innerText += num;
}

// Event listeners for number buttons to add to screen
for (const number of numbers) {
    let numToDisplay = number.innerText;
    number.addEventListener("click", e => {
        selectNextNum();
        addToScreen(numToDisplay);
        console.log(num1);
    });
}

// AC Button for clearing screen
acBtn.addEventListener("click", e => {
    selectNextNum();
    screen.innerText = "";
    selectedOperator = null;
    selectedOperatorFlag = false;
    num1 = null;
    num2 = null;
});


// +/- Button for changing sign
changeSignBtn.addEventListener("click", e=> {
    selectNextNum();
    screen.innerText *= -1;
})


// % Button for dividing the number by 100
percentBtn.addEventListener("click", e => {
    selectNextNum();
    let answer = (screen.innerText / 100).toString();
    if (!exceedMaxLength(answer)) {
        screen.innerText = answer;
    }
})

// Highlight operation button if clicked
for (const operator of operators) {
    let selectedOperation = operator;
    operator.addEventListener("click", e => {
        selectNextNum();
        selectedOperation.setAttribute("id", "selected-operation");
        selectedOperatorFlag = true;
        selectedOperator = selectedOperation.innerText;
    });
}

// = Button for calculating answer
equalBtn.addEventListener("click", () => {
    num2 = screen.innerText;
    screen.innerText = calculate();
    console.log(num1);
    console.log(selectedOperator);
    console.log(num2);
})