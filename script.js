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
            let expression = new Function('return ' + calcTyped.innerText);
            let result = expression();
            calcOperation.innerText = result;
            calcTyped.innerText = calcTyped.innerText + " =";
        } catch (error) {
            calcTyped.innerText = "0";
            calcOperation.innerText = "Error";
        }
    }

    function backspace() {
        calcTyped.innerText = calcTyped.innerText.slice(0, -1);
        if (calcTyped.innerText === "") {
            calcTyped.innerText = "0";
        }
    }

    function calcInput(value) {
        if (calcTyped.innerText === "0" && value !== ".") {
            calcTyped.innerText = value;
        } else {
            calcTyped.innerText += value;
        }
    }

    const buttons = document.querySelectorAll("input[type=button]");
    buttons.forEach(function(button) {
        button.onclick = function() {
            if (button.value === "AC") {
                clearDisplay();
            } else if (button.value === "DE") {
                backspace();
            } else if (button.value === "=") {
                calculateResult();
            } else {
                calcInput(button.value);
            }
        };
    });

    const checkbox = document.getElementById("checkbox");
        checkbox.onclick = function() {
        document.body.classList.toggle("light-mode");
    };
});
