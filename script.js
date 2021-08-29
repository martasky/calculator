document.querySelector("#calculate").addEventListener("click", clickCalculate);
let result;
function clickCalculate() {
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  console.log(firstNumber);
  const secondNumber = Number(document.querySelector("#secondnumber").value);
  console.log(secondNumber);
  const dropDown = document.querySelector("#operator").value;

  // const checkbox = document.querySelector("#decimals").value;

  if (dropDown === "add") {
    result = Number(firstNumber + secondNumber);
    console.log("does this shit work" + result);
    const newNumber = document.querySelector("#firstnumber");
    newNumber.value = result;
    let list = document.createElement("li");
    document.querySelector("#results").append(list);
    list.textContent = result;
  } else if (dropDown === "sub") {
    result = firstNumber - secondNumber;
    console.log(result);
    const newNumber = document.querySelector("#firstnumber");
    newNumber.value = result;
  } else if (dropDown === "mul") {
    result = firstNumber * secondNumber;
    console.log(result);
    const newNumber = document.querySelector("#firstnumber");
    newNumber.value = result;
  } else result = firstNumber / secondNumber;
  console.log(result);
  const newNumber = document.querySelector("#firstnumber");
  newNumber.value = result;
}
//   } else if (dropDown.value === "sub") {
//     result = firstNumber - secondNumber;
//     console.log(result);
//   } else if (dropDown.value === "mul") {
//     result = firstNumber * secondNumber;
//     console.log(result);
//   } else dropDown.value === "div";

//   result = firstNumber / secondNumber;

document.querySelector("#clear").addEventListener("click", clearResults);

// if (checkbox.checked) {
//   if (checkbox.value === 1) {
//   }
// }
function clearResults() {}
