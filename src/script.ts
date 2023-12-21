// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.querySelector(".show-Result-Box");
const opretorBtns = document.querySelectorAll(".opretor-Btn");
const resultBtn = document.querySelector(".result-Btn");
const commaBtn = document.getElementsByClassName("comma-Btn")[0];
const clearBtn = document.getElementsByClassName("clear-Btn")[0];

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
  const storedVal = parseFloat(showResultBox.textContent);
  opretorBtns.forEach((operatorBtns) => {
    operatorBtns.disabled = true;
  });
  firstNum = storedVal;
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
  opretorBtns.forEach((operatorBtns) => {
    operatorBtns.disabled = false;
  });
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
    clearCalculator();
  }

  // reset variables
  stageCount = 0;
  secondNum = 0;
  firstNum = 0;
  opratorVal = null; // fixed: Set opratorVal to null for better reset
};

// this is add coma to nums if num does not contain comma

const addComaToNums = () => {
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
};

// clear calculator this fires when error apears or C buttons clicked
const clearCalculator = () => {
  stageCount = 0;
  secondNum = 0;
  firstNum = 0;
  opratorVal = null;
  showResultBox.textContent = "0";
  opretorBtns.forEach((operatorBtns) => {
    operatorBtns.disabled = false;
  });
};

// event listeners

// numbers clicks
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    valueOfBtn = numberBtn.value;
    showData(valueOfBtn);
  });
});

// oprators clicks
opretorBtns.forEach((opretorBtn) => {
  opretorBtn.addEventListener("click", () => {
    opratorVal = opretorBtn.value;
    storeOperator(opratorVal);
  });
});

// store second num event
resultBtn.addEventListener("click", storeSecondNumber);

// add comma event
commaBtn.addEventListener("click", addComaToNums);

// clear calculator event
clearBtn.addEventListener("click", clearCalculator);
