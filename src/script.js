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
    if (stageCount === 0)
        if (showResultBox.textContent === "0") {
            showResultBox.textContent = valueOfBtn;
        }
        else {
            showResultBox.textContent += valueOfBtn;
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
// start oprating functions
var storeOprator = function (opratorVal) {
    firstNum = showResultBox.textContent;
    opratorVal = opratorVal;
    console.log(firstNum, opratorVal);
    showResultBox.textContent = "0";
    stageCount++;
};
// start second number store functions
var secondNun = function () {
    secondNum = showResultBox.textContent;
    console.log(firstNum, opratorVal, secondNum);
    showResult(firstNum, opratorVal, secondNum);
};
var showResult = function (firstNum, opratorVal, secondNum) {
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
    stageCount = 0;
    secondNum = 0;
    firstNum = 0;
    opratorVal = 0;
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
        storeOprator(opratorVal);
    });
});
resultBtn.addEventListener("click", function () {
    secondNun();
});
