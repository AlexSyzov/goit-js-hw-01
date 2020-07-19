let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число:");

  if (input === null) {
    if (numbers.length !== 0) {
      // if there is at least one element in array
      for (const number of numbers) {
        total += number;
      }
    } else {
      alert("Вы не ввели ни одного числа! Сумму посчитать невозможно.");
    }
    break;
  }

  input = Number(input);

  if (!Number.isNaN(input)) {
    // if input value is a number,
    numbers.push(input); // than this value will be added to array
  } else {
    alert("Было введено не число, попробуйте ещё раз"); // else you will see this message
  }
} while (true);

console.log(`Общая сумма чисел равна ${total}`);