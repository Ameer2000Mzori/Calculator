// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.querySelector(".show-Result-Box");
const opretorBtns = document.querySelectorAll(".opretor-Btn");
const resultBtn = document.querySelector(".result-Btn");
const commaBtn = document.getElementsByClassName("comma-Btn")[0];

// global variables
let stageCount = 0;
let firstNum;
let opratorVal;
let secondNum;
let valueOfBtn;
// functions

// get the first number function
const showData = (valueOfBtn) => {
  if (stageCount === 0) {
    // fixed: Added braces to clarify the if condition
    if (showResultBox.textContent === "0") {
      showResultBox.textContent = valueOfBtn;
    } else {
      showResultBox.textContent += valueOfBtn;
    }
  } else {
    if (showResultBox.textContent === "0") {
      showResultBox.textContent = valueOfBtn;
    } else {
      showResultBox.textContent += valueOfBtn;
    }
  }
};

// store operator function
const storeOperator = (operatorVal) => {
  firstNum = parseFloat(showResultBox.textContent);
  opratorVal = operatorVal;
  console.log(firstNum, opratorVal);
  showResultBox.textContent = "0";
  stageCount++;
};

// store second number function
const storeSecondNumber = () => {
  secondNum = parseFloat(showResultBox.textContent);
  console.log(firstNum, opratorVal, secondNum);
  showResult(firstNum, opratorVal, secondNum);
};

// show result function
const showResult = (firstNum, opratorVal, secondNum) => {
  if (opratorVal === "-") {
    console.log(firstNum - secondNum);
    showResultBox.textContent = firstNum - secondNum;
  } else if (opratorVal === "+") {
    console.log(firstNum + secondNum);
    showResultBox.textContent = firstNum + secondNum;
  } else if (opratorVal === "*") {
    console.log(firstNum * secondNum);
    showResultBox.textContent = firstNum * secondNum;
  } else if (opratorVal === "/" && secondNum !== 0) {
    console.log(firstNum / secondNum);
    showResultBox.textContent = firstNum / secondNum;
  } else {
    console.log("Error: Invalid operator or division by zero");
  }

  // reset variables
  stageCount = 0;
  secondNum = 0;
  firstNum = 0;
  opratorVal = null; // fixed: Set opratorVal to null for better reset
};

// event listeners
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    valueOfBtn = numberBtn.value;
    showData(valueOfBtn);
  });
});

opretorBtns.forEach((opretorBtn) => {
  opretorBtn.addEventListener("click", () => {
    opratorVal = opretorBtn.value;
    storeOperator(opratorVal);
  });
});

resultBtn.addEventListener("click", () => {
  storeSecondNumber();
});

commaBtn.addEventListener("click", () => {
  if (stageCount === 0) {
    if (!showResultBox.textContent.includes(".")) {
      showResultBox.textContent += `.`;
      firstNum = parseFloat(showResultBox.textContent);
    }
  } else {
    if (!showResultBox.textContent.includes(".")) {
      showResultBox.textContent += `.`;
      secondNum = parseFloat(showResultBox.textContent);
    }
  }
});
