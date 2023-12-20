// selecting elements
var numberBtns = document.querySelectorAll(".number-Btn");
// gelobal varibales
// functions
// event lisnters
numberBtns.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", function () {
        console.log(numberBtn.value);
    });
});
