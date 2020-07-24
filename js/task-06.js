const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;

  for (const product of allProdcuts) {
    const { name, price, quantity } = product;
    // just to show the knowledge. If it is very bad to do it in every iteration, just write :))

    if (name === productName) {
      totalPrice = price * quantity;
    }
  }

  return totalPrice;
};

console.log(calculateTotalPrice(products, "Радар"));

console.log(calculateTotalPrice(products, "Дроид"));