const formatString = function (string) {
  // inspired by guard clause :]
  if (string.length <= 40) {
    return string;
  }

  let shortenedString = string.slice(0, 40);

  // for (let i = 0; i < 40; i += 1) {
  //   shortenedString += string[i]; // string is also an array (of characters), so I use it here like an array
  // }

  shortenedString += "...";

  return shortenedString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);