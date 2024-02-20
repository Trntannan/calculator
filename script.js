const calcOperation = document.getElementById("calc-operation");
const calcTyped = document.getElementById("calc-typed");
const allClear = document.getElementById("allClear");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equals = document.getElementById("equals");
const numbers = document.querySelectorAll(".numb");

allClear.addEventListener("click", clearAll);
clear.addEventListener("click", clearLast);
percent.addEventListener("click", calculatePercent);
divide.addEventListener("click", setOperation.bind(null, "/"));
multiply.addEventListener("click", setOperation.bind(null, "*"));
subtract.addEventListener("click", setOperation.bind(null, "-"));
add.addEventListener("click", setOperation.bind(null, "+"));
equals.addEventListener("click", calculateResult);
numbers.forEach((number) => number.addEventListener("click", appendNumber));

let currentOperation = "";
let currentTyped = "0";
// let history = [];

calcTyped.textContent = currentTyped;

function setOperation(operation) {
  currentTyped += operation;
  calcTyped.textContent = currentTyped;
}

function appendNumber(event) {
  const lastCharIsOperation = currentTyped.slice(-1).match(/[\+\-\*\/]/);
  currentTyped =
    currentTyped === "0" && !lastCharIsOperation
      ? event.target.value
      : currentTyped + event.target.value;
  calcTyped.textContent = currentTyped;
}

function clearAll() {
  currentOperation = "";
  currentTyped = "0";
  calcTyped.textContent = currentTyped;
  calcOperation.textContent = "";
//   history = [];
//   displayHistory();
}

function clearLast() {
  currentTyped = currentTyped.slice(0, -1);
  if (currentTyped === "") {
    currentTyped = "0";
  }
  calcTyped.textContent = currentTyped;
}

function calculatePercent() {
  currentTyped = (parseFloat(currentTyped) / 100).toString();
  calcTyped.textContent = currentTyped;
}

function calculateResult() {
  currentOperation += currentTyped;
  try {
    const result = eval(currentOperation);
    calcTyped.textContent = currentTyped + "=";
    calcOperation.textContent = result;
    currentTyped = result.toString();
  } catch (error) {
    alert("Invalid operation");
  }
}

// function calculateResult() {
//     currentOperation += currentTyped;
//     try {
//         const result = eval(currentOperation);
//         calcOperation.textContent = '=' + result;
//         currentTyped = result.toString();
//         history.push({ operation: currentOperation, result: result });
//         displayHistory();
//     } catch (error) {
//         alert('Invalid operation');
//     }
// }

// function displayHistory() {
//     historyList.innerHTML = '';
//     history.forEach((entry, index) => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${entry.operation} = ${entry.result}`;
//         historyList.appendChild(listItem);
//     });
// }
