document.querySelector("#calculate").addEventListener("click", clickCalculate);
let result;
function clickCalculate() {
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  console.log(firstNumber);
  const secondNumber = Number(document.querySelector("#secondnumber").value);
  console.log(secondNumber);
  const dropDown = document.querySelector("#operator").value;

  if (dropDown.value === "add") {
    result = firstNumber + secondNumber;
    console.log("does this shit work" + result);
  }
  //   } else if (dropDown.value === "sub") {
  //     result = firstNumber - secondNumber;
  //     console.log(result);
  //   } else if (dropDown.value === "mul") {
  //     result = firstNumber * secondNumber;
  //     console.log(result);
  //   } else dropDown.value === "div";

  //   result = firstNumber / secondNumber;
}
document.querySelector("#clear").addEventListener("click", clearResults);
function clearResults() {}
