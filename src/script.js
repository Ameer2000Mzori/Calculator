// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
var showResultBox = document.getElementsByClassName("show-Result-Box")[0];
// gelobal varibales
// functions
var showData = function (valueOfBtn) {
    if (showResultBox.textContent === "0") {
        showResultBox.textContent = valueOfBtn;
    }
    else {
        showResultBox.textContent += valueOfBtn;
    }
};
// event lisnters
numberBtns.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", function () {
        console.log(numberBtn.value);
        var valueOfBtn = numberBtn.value;
        showData(valueOfBtn);
    });
});
