let message;
const ADMIN_PASSWORD = "jqueryismyjam";

const promptChoice = prompt("Введите пароль:");

if (promptChoice === null) {
  message = "Отменено пользователем!";
} else if (promptChoice === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещён, неверный пароль!";
}

alert(message);
