const findBestEmployee = function (employees) {
  let biggestAmount = 0; // you cannot complete less than 0 tasks, so this is the initial value

  const namesArray = Object.keys(employees); // names of employees
  const amountArray = Object.values(employees); // amount of completed tasks

  let bestWorkerIndex;

  for (let i = 0; i < amountArray.length; i += 1) {
    // amountArray.length shows us amount of values, so we can use it to define amount of object properties
    if (amountArray[i] > biggestAmount) {
      biggestAmount = amountArray[i];
      bestWorkerIndex = i;
    }
  }

  const bestWorker = namesArray[bestWorkerIndex];

  return bestWorker;
};

// You can see another version of this function below. There is less code inside, but it is less clear.
// I need your feedback. Which one is better to use and why?

/* 
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
  */

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