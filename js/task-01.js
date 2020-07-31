const Account = function (userObj) {
  this.login = userObj.login;
  this.email = userObj.email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}`);
  console.log(`Email: ${this.email}`);
  console.log("=======================");
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();