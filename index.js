const one = Number(document.getElementById("one").textContent);
const two = Number(document.getElementById("two").textContent);
const three = Number(document.getElementById("three").textContent);
const four = Number(document.getElementById("four").textContent);
const five = Number(document.getElementById("five").textContent);
const six = Number(document.getElementById("six").textContent);
const seven = Number(document.getElementById("seven").textContent);
const eight = Number(document.getElementById("eight").textContent);
const nine = Number(document.getElementById("nine").textContent);
const zero = Number(document.getElementById("zero").textContent);
const doubleZero = Number(document.getElementById("double-zero").textContent);
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");
const modulo = document.getElementById("modulo");
const backspace = document.getElementById("backspace");
const clearScreen = document.getElementById("ac");

const answer = document.getElementById("final-answer");
const question = document.getElementById("question");

equal.addEventListener("click", () => {});

multiply.addEventListener("click", addDigits);

function addDigits(num1, num2) {
  return num1 * num2;
}
