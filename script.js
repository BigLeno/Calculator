
// Criando o Display
let display = document.querySelector(".display");

// Principais funções utilizadas

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}

function clearAll() {
    display.value = "";
}

// Adicionando um evento quando uma tecla é pressionada

document.addEventListener("keydown", function(event) {
  var display = document.getElementById("display");
  var key = event.key;
  if (key == "Enter") {
    // Efetua o cálculo que está no display
    calculate();
  } else if (/^\d$/.test(key)) {
    // Adiciona o número ao display
    addToDisplay(key);
  } else if (/^[\+\-\*\/]$/.test(key)) {
    // Adiciona o operador ao display
    addToDisplay(key);
  } else if (key == "Backspace" || key == "Delete") {
    // remove o último caractere do display
    display.value = display.value.slice(0, -1);
  } else if (key == "Escape") {
    // limpa todo o display
    clearAll();
  }
});



