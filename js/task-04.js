const counterRef = document.querySelector("#value");
let counterValue = Number(counterRef.textContent);

const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);

incrementButtonRef.addEventListener("click", increment);
decrementButtonRef.addEventListener("click", decrement);

function increment() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}