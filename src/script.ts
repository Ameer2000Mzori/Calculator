// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.getElementsByClassName("show-Result-Box")[0];
const opretorBtns = document.querySelectorAll(".opretor-Btn");
const resultBtn = document.getElementsByClassName("result-Btn")[0];

// gelobal varibales

let stageCount = 0;
let secondNum;
let firstNum;
let opratorVal;
// functions

// get the first number function
const showData = (valueOfBtn) => {
  if (stageCount === 0)
    if (showResultBox.textContent === "0") {
      showResultBox.textContent = valueOfBtn;
    } else {
      showResultBox.textContent += valueOfBtn;
    }
  else {
    if (showResultBox.textContent === "0") {
      showResultBox.textContent = valueOfBtn;
    } else {
      showResultBox.textContent += valueOfBtn;
    }
  }
};

// start oprating functions
const storeOprator = (opratorVal) => {
  firstNum = showResultBox.textContent;
  opratorVal = opratorVal;
  console.log(firstNum, opratorVal);
  showResultBox.textContent = `0`;
  stageCount++;
};

// start second number store functions
const secondNun = () => {
  secondNum = showResultBox.textContent;
  console.log(firstNum, opratorVal, secondNum);
  showResult(firstNum, opratorVal, secondNum);
};

const showResult = (firstNum, opratorVal, secondNum) => {
  if (opratorVal === "-") {
    console.log(firstNum - secondNum);
  } else if (opratorVal === "+") {
    console.log(firstNum + secondNum);
  } else if (opratorVal === "*") {
    console.log(firstNum * secondNum);
  } else {
    console.log(firstNum + secondNum);
  }
  stageCount = 0;
  secondNum = 0;
  firstNum = 0;
  opratorVal = 0;
};

// event lisnters
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    let valueOfBtn = numberBtn.value;
    showData(valueOfBtn);
  });
});

opretorBtns.forEach((opretorBtn) => {
  opretorBtn.addEventListener("click", () => {
    opratorVal = opretorBtn.value;
    storeOprator(opratorVal);
  });
});

resultBtn.addEventListener("click", () => {
  secondNun();
});
