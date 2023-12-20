// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
var showResultBox = document.getElementsByClassName("show-Result-Box")[0];
var opretorBtns = document.querySelectorAll(".opretor-Btn");
var resultBtn = document.getElementsByClassName("result-Btn")[0];
// gelobal varibales
var stageCount = 0;
var secondNum;
var firstNum;
var opratorVal;
// functions
// get the first number function
var showData = function (valueOfBtn) {
    if (stageCount === 1) {
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
            secondNum = showResultBox.textContent;
        }
    }
};
// start oprating functions
var startOprating = function (opratorVal) {
    stageCount++;
    firstNum = showResultBox.textContent;
    showResultBox.textContent = "".concat(opratorVal);
    opratorVal = opratorVal;
    console.log(opratorVal);
    console.log("this is our first num: ", firstNum);
    console.log("this is our Operator: ", opratorVal);
    console.log("this is stageC :", stageCount);
    showResultBox.textContent = "";
};
var showResult = function (firstNum, opratorVal, secondNum) {
    if (firstNum && opratorVal && secondNum)
        if (opratorVal === "-") {
            console.log(firstNum - secondNum);
        }
        else if (opratorVal === "+") {
            console.log(firstNum + secondNum);
        }
        else if (opratorVal === "*") {
            console.log(firstNum * secondNum);
        }
        else {
            console.log(firstNum + secondNum);
        }
    else {
        firstNum = 0;
        opratorVal;
        secondNum = 0;
        console.log("try again");
        stageCount = 0;
    }
    stageCount = 0;
};
// event lisnters
numberBtns.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", function () {
        var valueOfBtn = numberBtn.value;
        showData(valueOfBtn);
    });
});
opretorBtns.forEach(function (opretorBtn) {
    opretorBtn.addEventListener("click", function () {
        opratorVal = opretorBtn.value;
        startOprating(opratorVal);
    });
});
resultBtn.addEventListener("click", function () {
    showResult(firstNum, opratorVal, secondNum);
});
