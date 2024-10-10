function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Limpar tudo
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Apagador 1 número
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Resultado
function calculateResult() {
    try {
        let display = document.getElementById("display").value;
        let result = eval(display);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Erro";
    }
}

// Raiz Quadrada
function calculateSquareRoot() {
    let display = document.getElementById("display").value;
    let result = Math.sqrt(eval(display));
    document.getElementById("display").value = result;
}

// Fatorial
function calculateFactorial() {
    let display = document.getElementById("display").value;
    let num = parseInt(display);
    let result = factorial(num);
    document.getElementById("display").value = result;
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

// Seno
function calculateSin() {
    let display = document.getElementById("display").value;
    let result = Math.sin(eval(display));
    document.getElementById("display").value = result;
}

// Cosseno
function calculateCos() {
    let display = document.getElementById("display").value;
    let result = Math.cos(eval(display));
    document.getElementById("display").value = result;
}

// Tangente
function calculateTan() {
    let display = document.getElementById("display").value;
    let result = Math.tan(eval(display));
    document.getElementById("display").value = result;
}

// Logaritmo
function calculateLog() {
    let display = document.getElementById("display").value;
    let result = Math.log(eval(display));
    document.getElementById("display").value = result;
}

// Potência ao Quadrado
function calculatePower() {
    let display = document.getElementById("display").value;
    let result = Math.pow(eval(display), 2);
    document.getElementById("display").value = result;
}

// Exponenciação
function calculateExp() {
    let display = document.getElementById("display").value;
    let result = Math.exp(eval(display));
    document.getElementById("display").value = result;
}
