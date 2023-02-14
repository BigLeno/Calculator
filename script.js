let display = document.querySelector(".display");
let alertItem = document.querySelector(".alert");

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}

function clearAll() {
    display.value = "";
}

// adicione um evento para detectar quando uma tecla é pressionada
document.addEventListener("keydown", function(event) {
  var display = document.getElementById("display");
  var memory;
  var key = event.key;
  if (key == "Enter") {
    calculate();
  } else if (/^\d$/.test(key)) {
    addToDisplay(key);
  } else if (/^[\+\-\*\/]$/.test(key)) {
    addToDisplay(key);
  } else if (key == "Backspace" || key == "Delete") {
    // remove o último caractere do display
    display.value = display.value.slice(0, -1);
  } else if (key == "Escape") {
    // limpa todo o display
    clearAll();
  } else if (key == "M") {
    // armazena o valor atual do display na memória
    memory = parseFloat(display.value);
    alertItem.textcontent = "Memória armazenada"
  } else if (key == "R") {
    // recupera o valor da memória e exibe no display
    display.value = memory;
  }
});



