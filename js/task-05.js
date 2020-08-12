const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.target.value;

  if (inputValue !== "") {
    outputRef.textContent = inputValue;
  } else {
    outputRef.textContent = "незнакомец";
  }
}