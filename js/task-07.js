let id = 0;

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: id,
      type: type,
      amount: amount,
    };

    id += 1;

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    this.transactions.push(depositTransaction);

    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Выведение такой суммы не возможно, недостаточно средств!");
      return;
    }

    const withdrawTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );

    this.transactions.push(withdrawTransaction);

    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    const currentBalance = `Текущий баланс: ${this.balance}`;
    return currentBalance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const allTransactions = this.transactions;

    for (const transaction of allTransactions) {
      const currentId = transaction.id;

      if (currentId === id) {
        return transaction;
      }
    }

    const failMessage = "Транзакции с таким id не существует!";

    return failMessage;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    const allTransactions = this.transactions;

    for (const transaction of allTransactions) {
      const currentType = transaction.type;
      const currentAmount = transaction.amount;

      if (currentType === type) {
        total += currentAmount;
      }
    }

    const totalMessage = `В операции ${type} было задействовано ${total} кредитов`;

    return totalMessage;
  },
};

account.deposit(3000);
account.deposit(3000);
account.deposit(3000);
account.withdraw(3000);

console.log(account.getBalance());

account.deposit(3000);
account.withdraw(3000);
account.deposit(3000);
account.deposit(3000);
account.deposit(3000);
account.withdraw(3000);

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionDetails(7));
console.log(account.getTransactionDetails(11));

console.log(account.getBalance());

console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionTotal("deposit"));

account.withdraw(23000);
console.log(account.getBalance());