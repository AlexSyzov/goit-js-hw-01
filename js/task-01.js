// type="module" сам добавляет "'use strict';", поэтому не пишу это лишний раз (но понимаю, для чего это нужно)

const name = "Генератор защитного поля";
let price = 1000;
let productInfo = `Выбран «${name}», цена за штуку ${price} кредитов`;

console.log(productInfo);

price = 2000;
productInfo = `Выбран «${name}», цена за штуку ${price} кредитов`;

console.log(productInfo);
