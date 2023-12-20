// selecting elements
const numberBtns = document.querySelectorAll(".number-Btn");

// gelobal varibales

// functions

// event lisnters
numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    console.log(numberBtn.value);
  });
});
