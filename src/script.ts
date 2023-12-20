// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");
const showResultBox = document.getElementsByClassName("show-Result-Box")[0];
const opretorBtns = document.querySelectorAll(".opretor-Btn");
const resultBtn = document.getElementsByClassName("result-Btn")[0];

// gelobal varibales

const stageCount = 0;
// functions

// get the first number function
const showData = (valueOfBtn) => {
  if (firstNum) {
    showResultBox.textContent = ``;
    let secondNum = valueOfBtn;
    showResultBox.textContent = `${secondNum}`;
    console.log("this is second num: ", secondNum);
  } else {
    if (showResultBox.textContent === "0") {
      showResultBox.textContent = valueOfBtn;
    } else {
      showResultBox.textContent += valueOfBtn;
    }
  }
};

// start oprating functions
const startOprating = (opratorVal) => {
  let firstNum = showResultBox.textContent;
  showResultBox.textContent = `${opratorVal}`;
  console.log("this is our first num: ", firstNum);
  opratorVal = opratorVal;
  console.log(opratorVal);
};

// second number function
const secondNumFunc = () => {};

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
