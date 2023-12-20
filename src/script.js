// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
var showResultBox = document.getElementsByClassName("show-Result-Box")[0];
var opretorBtns = document.querySelectorAll(".opretor-Btn");
// gelobal varibales
// functions
// get the first number function
var showData = function (valueOfBtn) {
    if (showResultBox.textContent === "0") {
        showResultBox.textContent = valueOfBtn;
    }
    else {
        showResultBox.textContent += valueOfBtn;
    }
};
// start oprating functions
var startOprating = function (opratorVal) {
    var firstNum = showResultBox.textContent;
    opratorVal = opratorVal;
    console.log(opratorVal);
};
// second number function
var secondNumFunc = function (secondNum, opratorVal, firstNum) {
    secondNum = secondNum;
    console.log("our first num: ", firstNum);
    console.log("our oprator : ", opratorVal);
    console.log("our second num: ", secondNum);
};
// event lisnters
numberBtns.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", function () {
        if (opratorVal && firstNum) {
            var secondNum = numberBtn.value;
            secondNumFunc(secondNum);
        }
        else {
            console.log(numberBtn.value);
            var valueOfBtn = numberBtn.value;
            showData(valueOfBtn);
        }
    });
});
opretorBtns.forEach(function (opretorBtn) {
    opretorBtn.addEventListener("click", function () {
        var opratorVal = opretorBtn.value;
        startOprating(opratorVal);
    });
});
