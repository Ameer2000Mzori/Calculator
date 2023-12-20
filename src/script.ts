// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.getElementsByClassName("show-Result-Box")[0];

// gelobal varibales

// functions
const showData = (valueOfBtn) => {
  if (showResultBox.textContent === "0") {
    showResultBox.textContent = valueOfBtn;
  } else {
    showResultBox.textContent += valueOfBtn;
  }
};

// event lisnters
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    console.log(numberBtn.value);
    let valueOfBtn = numberBtn.value;
    showData(valueOfBtn);
  });
});
