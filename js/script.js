let display = document.querySelector(".display");
let digit = document.querySelectorAll(".digit");
let deleteButton = document.getElementById("delete");
let clearDisplay = document.getElementById("clear-display");
let equals = document.getElementById("equals");



digit.forEach(function (digit) { 
    digit.addEventListener("click", function () { 
        display.textContent += digit.innerText;
     });
 });

clearDisplay.addEventListener("click", function () {
  display.textContent = "";
});

equals.addEventListener("click", function () {
    if (display.textContent == "") {
      display.textContent = "";
    } else {
      let answer = eval(display.textContent);
      display.textContent = answer;
    }
});


deleteButton.addEventListener("click", function(){
    if (display.textContent == "") {
        display.textContent = "";
      }
      else{
        display.textContent = display.textContent.slice(0, -1);
      }
});
