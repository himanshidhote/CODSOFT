const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      input += value;
      display.value = input;
    }
  });
});

clear.addEventListener("click", () => {
   input = input.slice(0, -1); 
  display.value = input;
});

equal.addEventListener("click", () => {
  try {
    input = eval(input).toString();
    display.value = input;
  } catch (err) {
    display.value = "Error";
    input = "";
  }
});