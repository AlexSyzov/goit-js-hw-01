const findBestEmployee = function (employees) {
  let biggestAmount = 0; // you cannot complete less than 0 tasks, so this is the initial value
  let bestWorker;

  for (const name in employees) {
    if (employees[name] > biggestAmount) {
      biggestAmount = employees[name];
      bestWorker = name;
   }
 }
 return bestWorker; 
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);