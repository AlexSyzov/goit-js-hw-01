const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", handleFontSize);

function handleFontSize(event) {
  const inputValue = event.target.value;

  textRef.style.fontSize = `${inputValue}px`;
}