let credits = 23580;
let totalPrice;
let message;
let amountOfDroids;
const pricePerDroid = 3000;

do {
  amountOfDroids = prompt("Введите количество приобретаемых дроидов:");
} while (
  amountOfDroids !== null && // пока пользователь не нажмёт "Cancel"
  (amountOfDroids < 1 || isNaN(amountOfDroids)) // и не введёт валидное значение
);

if (amountOfDroids === null) {
  message = "Отменено пользователем!";
} else {
  totalPrice = +amountOfDroids * pricePerDroid;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счёте!";
  } else {
    credits -= totalPrice;

    if (+amountOfDroids !== 1) {
      message = `Вы купили ${amountOfDroids} дроидов, на счёте осталось ${credits} кредитов.`;
    } else {
      message = `Вы купили ${amountOfDroids} дроида, на счёте осталось ${credits} кредитов.`; // одного дроидА
    }
  }
}

console.log(message);