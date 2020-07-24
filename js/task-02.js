const countProps = function (obj) {
  let amountOfItems = 0;

  for (const item in obj) {
    amountOfItems += 1;
  }

  return amountOfItems;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));