let display = document.querySelector(".display");

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}
