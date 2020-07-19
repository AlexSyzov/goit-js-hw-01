const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  const isValid = isLoginValid(login);

  if (!isValid) {
    // if login does not consist of 4 to 16 symbols
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  const isUnique = isLoginUnique(logins, login);

  if (!isUnique) {
    // if login is not unique
    return "Такой логин уже используется!";
  }

  logins.push(login); // if everything is fine

  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax"));
console.log(logins);
console.log(addLogin(logins, "robotGoogles"));
console.log(logins);
console.log(addLogin(logins, "Zod"));
console.log(logins);
console.log(addLogin(logins, "jqueryisextremelyfast"));
console.log(logins);