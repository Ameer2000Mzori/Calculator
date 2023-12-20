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
  if (stageCount === 1) {
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
      secondNum = showResultBox.textContent;
    }
  }
};

// start oprating functions
const startOprating = (opratorVal) => {
  stageCount++;
  firstNum = showResultBox.textContent;
  showResultBox.textContent = `${opratorVal}`;

  opratorVal = opratorVal;
  console.log(opratorVal);
  console.log("this is our first num: ", firstNum);
  console.log("this is our Operator: ", opratorVal);
  console.log("this is stageC :", stageCount);
  showResultBox.textContent = ``;
};

const showResult = (firstNum, opratorVal, secondNum) => {
  if (firstNum && opratorVal && secondNum)
    if (opratorVal === "-") {
      console.log(firstNum - secondNum);
    } else if (opratorVal === "+") {
      console.log(firstNum + secondNum);
    } else if (opratorVal === "*") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  else {
    firstNum = 0;
    opratorVal;
    secondNum = 0;
    console.log("try again");
    stageCount = 0;
  }
  stageCount = 0;
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
    startOprating(opratorVal);
  });
});

resultBtn.addEventListener("click", () => {
  showResult(firstNum, opratorVal, secondNum);
});
