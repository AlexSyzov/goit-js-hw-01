const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleAmountOfSymbols);

function handleAmountOfSymbols(event) {
  const validAmount = Number(inputRef.getAttribute("data-length"));
  const currentAmount = event.target.value.length;

  if (currentAmount < validAmount) {
    inputRef.classList.add("invalid");
  } else {
    if (inputRef.classList.contains("invalid")) {
      inputRef.classList.remove("invalid");
    }
    inputRef.classList.add("valid");
  }
}