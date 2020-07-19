const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsArray = message.split(" ");
  const arrayLength = wordsArray.length;

  return pricePerWord * arrayLength; // price per word multiplied by the amount of words (arrayLength)
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);