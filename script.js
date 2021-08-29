"use strict";
document.querySelector("#calculate").addEventListener("click", clickCalculate);

function clickCalculate() {
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  console.log(firstNumber);
  const secondNumber = Number(document.querySelector("#secondnumber").value);
  console.log(secondNumber);
  const dropDown = document.querySelector("#operator").value;

  const checkbox = document.querySelector("#doround");

  // const checkbox = document.querySelector("#decimals").value;
  let result = 0;

  if (dropDown === "add") {
    result = firstNumber + secondNumber;
  } else if (dropDown === "sub") {
    result = firstNumber - secondNumber;
  } else if (dropDown === "mul") {
    result = firstNumber * secondNumber;
  } else {
    result = firstNumber / secondNumber;
  }
  if (checkbox.checked === true) {
    let digits = document.querySelector("#decimals").value;
    result = result.toFixed(digits);
    // result = myRound(result, digits);
  }
  console.log(result);
  const newNumber = document.querySelector("#firstnumber");
  newNumber.value = result;
  let list = document.createElement("li");
  list.textContent = result;
  document.querySelector("#results").appendChild(list);
}

/* function myRound(number, digits) {
    let base = 1;
  let i = 0;
  for (i = 0; i < digits; i++) {
    base = base * 10;
  }
  return Math.round(base * number) / base;
}
 */
document.querySelector("#clear").addEventListener("click", clearResults);

function clearResults() {
  document.querySelector("#firstnumber").value = "";
  document.querySelector("#secondnumber").value = "";
  document.querySelector("#doround").checked = false;
  document.querySelector("#results").innerHTML = "";
  /*  let nodes = document.querySelectorAll("li");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].parentNode.removeChild(nodes[i]); 
  }*/
}
