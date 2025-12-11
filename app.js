const form = document.getElementById("calcForm");
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const opInput = document.getElementById("op");
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");
const historyList = document.getElementById("historyList");

let history = [];

form.onsubmit = function (event) {
    event.preventDefault();

    errorDiv.textContent = "";
    resultDiv.textContent = "";

    let a = parseFloat(aInput.value);
    let b = parseFloat(bInput.value);
    let op = opInput.value;

    // Validation
    if (isNaN(a) || isNaN(b)) {
        errorDiv.textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    if (op === "/" && b === 0) {
        errorDiv.textContent = "Division par zéro interdite.";
        return;
    }

    // Calcul
    let result = 0;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    resultDiv.textContent = "Résultat : " + result;

    // Add to history
    let text = a + " " + op + " " + b + " = " + result;
    history.push(text);

    showHistory();
};

function showHistory() {
    historyList.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let li = document.createElement("li");
        li.textContent = history[i];
        historyList.appendChild(li);
    }
}
