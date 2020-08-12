const inputRef = document.querySelector("#controls > input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const containerRef = document.querySelector("#boxes");

renderBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

let width = 30;
let height = 30;

function createBoxes() {
  // It is easier to create this function without parameters.
  // Cause it is pretty hard to access the input value from outside.
  // But if there is an easy way to do this, I am ready to rewrite my code))
  const amount = inputRef.value;
  const allBlocks = [];

  for (let i = 0; i < amount; i += 1) {
    const newBlock = document.createElement("div");
    const rgb = getRandomRGB();

    newBlock.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    newBlock.style.width = `${width}px`;
    newBlock.style.height = `${height}px`;

    allBlocks.push(newBlock);

    width += 10;
    height += 10;
  }

  containerRef.append(...allBlocks);
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = [r, g, b];
  inputRef.value = "";
  return color;
}

function destroyBoxes() {
  const amountOfBlocks = containerRef.children.length;

  for (let i = amountOfBlocks - 1; i >= 0; i -= 1) {
    const currentBlock = containerRef.children[i];
    currentBlock.remove();
  }

  width = 30;
  height = 30;
}