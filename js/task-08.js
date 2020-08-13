const inputRef = document.querySelector("#controls > input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const containerRef = document.querySelector("#boxes");

renderBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

let width = 30;
let height = 30;

function createBoxes() {
  const amount = inputRef.value;
  const allBlocks = [];

  for (let i = 0; i < amount; i += 1) {
    const newBlock = document.createElement("div");
    const [r, g, b] = getRandomRGB();

    newBlock.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    newBlock.style.width = `${width}px`;
    newBlock.style.height = `${height}px`;

    allBlocks.push(newBlock);

    width += 10;
    height += 10;
  }

  containerRef.append(...allBlocks);
  inputRef.value = "";
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = [r, g, b];
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