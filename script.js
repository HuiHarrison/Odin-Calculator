const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".numbers");
const acBtn = document.querySelector("#ac");
const changeSignBtn = document.querySelector("#changeSignBtn");
const percentBtn = document.querySelector("#percentBtn");


function exceedMaxLength(innerText) {
    return innerText.length > 10
}

function addToScreen(num){
    if (!exceedMaxLength(screen.innerText)) {
        screen.innerText += num;
    }
}

// Event listeners for number buttons to add to screen
for (number of numbers) {
    let numToDisplay = number.innerText;
    number.addEventListener("click", e => {addToScreen(numToDisplay)});
}

// AC Button for clearing screen
acBtn.addEventListener("click", e => {screen.innerText = ""});


// +/- Button for changing sign
changeSignBtn.addEventListener("click", e=> {screen.innerText *= -1;})


// % Button for dividing the number by 100
percentBtn.addEventListener("click", e => {
    let answer = (screen.innerText / 100).toString();
    if (!exceedMaxLength(answer)) {
        screen.innerText = answer;
    }
})