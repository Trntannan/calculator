document.addEventListener("DOMContentLoaded", function() {
  let calcTyped = document.getElementById("calc-typed");
  let calcOperation = document.getElementById("calc-operation");

  calcTyped.innerText = "0";
  calcOperation.innerText = "0";

  function clearDisplay() {
      calcTyped.innerText = "0";
      calcOperation.innerText = "0";
  }

  function calculateResult() {
      try {
          let result = eval(calcTyped.innerText);
          calcOperation.innerText = result;
          calcTyped.innerText = calcTyped.innerText + " =";
      } catch (error) {
          calcTyped.innerText = "Error";
          calcOperation.innerText = "0";
      }
  }

  function backspace() {
      calcTyped.innerText = calcTyped.innerText.slice(0, -1);
      if (calcTyped.innerText === "") {
          calcTyped.innerText = "0";
      }
  }

  let buttons = document.querySelectorAll("input[type=button]");
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          if (button.value === "AC") {
              clearDisplay();
          } else if (button.value === "DE") {
              backspace();
          } else if (button.value === "=") {
              calculateResult();
          } else {
              if (calcTyped.innerText === "0" && button.value !== ".") {
                  calcTyped.innerText = button.value;
              } else {
                  calcTyped.innerText += button.value;
              }
          }
      });
  });
});

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light-mode")
})
