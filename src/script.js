// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
var showResultBox = document.querySelector(".show-Result-Box");
var opretorBtns = document.querySelectorAll(".opretor-Btn");
var resultBtn = document.querySelector(".result-Btn");
var commaBtn = document.getElementsByClassName("comma-Btn")[0];
var clearBtn = document.getElementsByClassName("clear-Btn")[0];
// global variables
var stageCount = 0;
var firstNum;
var opratorVal;
var secondNum;
var valueOfBtn;
// functions
// get the first number function
var showData = function (valueOfBtn) {
    if (stageCount === 0) {
        // fixed: Added braces to clarify the if condition
        if (showResultBox.textContent === "0") {
            showResultBox.textContent = valueOfBtn;
        }
        else {
            showResultBox.textContent += valueOfBtn;
        }
    }
    else {
        if (showResultBox.textContent === "0") {
            showResultBox.textContent = valueOfBtn;
        }
        else {
            showResultBox.textContent += valueOfBtn;
        }
    }
};
// store operator function
var storeOperator = function (operatorVal) {
    var storedVal = parseFloat(showResultBox.textContent);
    opretorBtns.forEach(function (operatorBtns) {
        operatorBtns.disabled = true;
    });
    firstNum = storedVal;
    opratorVal = operatorVal;
    console.log(firstNum, opratorVal);
    showResultBox.textContent = "0";
    stageCount++;
};
// store second number function
var storeSecondNumber = function () {
    secondNum = parseFloat(showResultBox.textContent);
    console.log(firstNum, opratorVal, secondNum);
    showResult(firstNum, opratorVal, secondNum);
};
// show result function
var showResult = function (firstNum, opratorVal, secondNum) {
    opretorBtns.forEach(function (operatorBtns) {
        operatorBtns.disabled = false;
    });
    if (opratorVal === "-") {
        console.log(firstNum - secondNum);
        showResultBox.textContent = firstNum - secondNum;
    }
    else if (opratorVal === "+") {
        console.log(firstNum + secondNum);
        showResultBox.textContent = firstNum + secondNum;
    }
    else if (opratorVal === "*") {
        console.log(firstNum * secondNum);
        showResultBox.textContent = firstNum * secondNum;
    }
    else if (opratorVal === "/" && secondNum !== 0) {
        console.log(firstNum / secondNum);
        showResultBox.textContent = firstNum / secondNum;
    }
    else {
        console.log("Error: Invalid operator or division by zero");
        clearCalculator();
    }
    // reset variables
    stageCount = 0;
    secondNum = 0;
    firstNum = 0;
    opratorVal = null; // fixed: Set opratorVal to null for better reset
};
// this is add coma to nums if num does not contain comma
var addComaToNums = function () {
    if (stageCount === 0) {
        if (!showResultBox.textContent.includes(".")) {
            showResultBox.textContent += ".";
            firstNum = parseFloat(showResultBox.textContent);
        }
    }
    else {
        if (!showResultBox.textContent.includes(".")) {
            showResultBox.textContent += ".";
            secondNum = parseFloat(showResultBox.textContent);
        }
    }
};
// clear calculator this fires when error apears or C buttons clicked
var clearCalculator = function () {
    stageCount = 0;
    secondNum = 0;
    firstNum = 0;
    opratorVal = null;
    showResultBox.textContent = "0";
    opretorBtns.forEach(function (operatorBtns) {
        operatorBtns.disabled = false;
    });
};
// event listeners
// numbers clicks
numberBtns.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", function () {
        valueOfBtn = numberBtn.value;
        showData(valueOfBtn);
    });
});
// oprators clicks
opretorBtns.forEach(function (opretorBtn) {
    opretorBtn.addEventListener("click", function () {
        opratorVal = opretorBtn.value;
        storeOperator(opratorVal);
    });
});
// store second num event
resultBtn.addEventListener("click", storeSecondNumber);
// add comma event
commaBtn.addEventListener("click", addComaToNums);
// clear calculator event
clearBtn.addEventListener("click", clearCalculator);
