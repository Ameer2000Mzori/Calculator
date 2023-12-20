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
    if (showResultBox.textContent === "0") {
        showResultBox.textContent = valueOfBtn;
        if (stageCount == 1) {
            var secondNum = showResultBox.textContent;
            secondNumFunc(secondNum);
        }
    }
    else {
        showResultBox.textContent += valueOfBtn;
    }
};
// start oprating functions
var startOprating = function (opratorVal) {
    stageCount++;
    var firstNum = showResultBox.textContent;
    showResultBox.textContent = "".concat(opratorVal);
    opratorVal = opratorVal;
    console.log(opratorVal);
    console.log("this is our first num: ", firstNum);
    console.log("this is our Operator: ", opratorVal);
    console.log("this is stageC :", stageCount);
};
// second number function
var secondNumFunc = function (secondNum) {
    console.log(secondNum);
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
