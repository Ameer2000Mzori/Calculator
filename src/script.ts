// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.getElementsByClassName("show-Result-Box")[0];
const opretorBtns = document.querySelectorAll(".opretor-Btn");
// gelobal varibales

// functions

// get the first number function
const showData = (valueOfBtn) => {
  if (showResultBox.textContent === "0") {
    showResultBox.textContent = valueOfBtn;
  } else {
    showResultBox.textContent += valueOfBtn;
  }
};

// start oprating functions
const startOprating = (opratorVal) => {
  let firstNum = showResultBox.textContent;
  opratorVal = opratorVal;
  console.log(opratorVal);
};

// second number function
const secondNumFunc = (secondNum, opratorVal, firstNum) => {
  secondNum = secondNum;
  console.log(`our first num: `, firstNum);

  console.log(`our oprator : `, opratorVal);
  console.log(`our second num: `, secondNum);
};

// event lisnters
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    if (opratorVal && firstNum) {
      let secondNum = numberBtn.value;
      secondNumFunc(secondNum);
    } else {
      console.log(numberBtn.value);
      let valueOfBtn = numberBtn.value;
      showData(valueOfBtn);
    }
  });
});

opretorBtns.forEach((opretorBtn) => {
  opretorBtn.addEventListener("click", () => {
    let opratorVal = opretorBtn.value;
    startOprating(opratorVal);
  });
});
