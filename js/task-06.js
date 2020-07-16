let total = 0;
let input;

do {
  input = prompt("Введите число:");

  if (!isNaN(input)) {
    total += Number(input);
  } else {
    alert("Было введено не число, попробуйте ещё раз");
  }
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);