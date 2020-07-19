const checkForSpam = function (message) {
  const wordsArray = message.toLowerCase().split(" ");

  for (const word of wordsArray) {
    if (word.includes("spam") || word.includes("sale")) {
      return true;
    }
  }

  return false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));