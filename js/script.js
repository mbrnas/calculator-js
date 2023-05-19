// get all elements from html
// import { log } from "console";
import {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
} from "./calculatorMath.js";

const display = document.querySelector(".display");
const digit = document.querySelectorAll(".digit");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const clearDisplay = document.getElementById("clear-display");
const equals = document.getElementById("equals");
const divide = document.getElementById("divide");


digit.forEach(function (digit) { 
    digit.addEventListener("click", function () { 
        display.textContent += digit.innerText;
     });
 });

 