// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.getElementsByClassName("show-Result-Box")[0];
const opretorBtns = document.querySelectorAll(".opretor-Btn");
const resultBtn = document.getElementsByClassName("result-Btn")[0];

// gelobal varibales

let stageCount = 0;
// functions

// get the first number function
const showData = (valueOfBtn) => {
  if (showResultBox.textContent === "0") {
    showResultBox.textContent = valueOfBtn;
    if (stageCount == 1) {
      let secondNum = showResultBox.textContent;
      secondNumFunc(secondNum);
    }
  } else {
    showResultBox.textContent += valueOfBtn;
  }
};

// start oprating functions
const startOprating = (opratorVal) => {
  stageCount++;
  let firstNum = showResultBox.textContent;
  showResultBox.textContent = `${opratorVal}`;

  opratorVal = opratorVal;
  console.log(opratorVal);
  console.log("this is our first num: ", firstNum);
  console.log("this is our Operator: ", opratorVal);
  console.log("this is stageC :", stageCount);
};

// second number function
const secondNumFunc = (secondNum) => {
  console.log(secondNum);
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
    let opratorVal = opretorBtn.value;
    startOprating(opratorVal);
  });
});

resultBtn.addEventListener("click", () => {
  showResult();
});
