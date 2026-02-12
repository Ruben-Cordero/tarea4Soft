import sumar from "./sumador";
import multiplicar from "./multiplicador";

// Sumador
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// Multiplicador
const firstMultiplicador = document.querySelector("#primer-numero-multiplicador");
const secondMultiplicador = document.querySelector("#segundo-numero-multiplicador");
const formMultiplicador = document.querySelector("#multiplicar-form");
const divMultiplicador = document.querySelector("#resultado-multiplicador-div");

formMultiplicador.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMultiplicador.value);
  const secondNumber = Number.parseInt(secondMultiplicador.value);

  divMultiplicador.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
