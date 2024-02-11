const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".numbers");
const acBtn = document.querySelector("#ac");
const changeSignBtn = document.querySelector("#changeSignBtn");
const percentBtn = document.querySelector("#percentBtn");
const operators = document.querySelectorAll(".operation");

let selectedOperator = null;
let selectedOperatorFlag = false;
let num1 = null;
let num2 = null;


function selectNextNum() {
    operators.forEach(operator => {
        operator.removeAttribute("id");
        selectedOperatorFlag = false;
        num1 = screen.innerText;
        screen.innerText = "";
    });
}

function exceedMaxLength(innerText) {
    return innerText.length > 10
}

function addToScreen(num){
    if (!exceedMaxLength(screen.innerText)) {
        screen.innerText += num;
    }
}

// Event listeners for number buttons to add to screen
for (const number of numbers) {
    let numToDisplay = number.innerText;
    number.addEventListener("click", e => {
        addToScreen(numToDisplay);
        if (selectedOperatorFlag) {
            selectNextNum();
        }
    });
}

// AC Button for clearing screen
acBtn.addEventListener("click", e => {
    screen.innerText = "";
    selectedOperator = null;
    selectedOperatorFlag = false;
    if (selectedOperatorFlag) {
        selectNextNum();
    }
});


// +/- Button for changing sign
changeSignBtn.addEventListener("click", e=> {
    screen.innerText *= -1;
    if (selectedOperatorFlag) {
        selectNextNum();
    }
})


// % Button for dividing the number by 100
percentBtn.addEventListener("click", e => {
    let answer = (screen.innerText / 100).toString();
    if (!exceedMaxLength(answer)) {
        screen.innerText = answer;
        if (selectedOperatorFlag) {
            selectNextNum();
        }
    }
})

// Highlight operation button if clicked
for (const operator of operators) {
    let selectedOperation = operator;
    operator.addEventListener("click", e => {
        if (selectedOperatorFlag) {
            selectNextNum();
        }
        selectedOperation.setAttribute("id", "selected-operation");
        selectedOperatorFlag = true;
        selectedOperator = selectedOperation.innerText;
    });
}