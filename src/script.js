// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
var showResultBox = document.getElementsByClassName("show-Result-Box")[0];
var opretorBtns = document.querySelectorAll(".opretor-Btn");
var resultBtn = document.getElementsByClassName("result-Btn")[0];
// gelobal varibales
var stageCount = 0;
// functions
// get the first number function
var showData = function (valueOfBtn) {
    if (firstNum) {
        showResultBox.textContent = "";
        var secondNum = valueOfBtn;
        showResultBox.textContent = "".concat(secondNum);
        console.log("this is second num: ", secondNum);
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
var startOprating = function (opratorVal) {
    var firstNum = showResultBox.textContent;
    showResultBox.textContent = "".concat(opratorVal);
    console.log("this is our first num: ", firstNum);
    opratorVal = opratorVal;
    console.log(opratorVal);
};
// second number function
var secondNumFunc = function () { };
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
        var opratorVal = opretorBtn.value;
        startOprating(opratorVal);
    });
});
resultBtn.addEventListener("click", function () {
    showResult();
});
