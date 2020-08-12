const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfElements = [];

ingredients.forEach((ingredient) => {
  const listElementRef = document.createElement("li");
  listElementRef.textContent = ingredient;

  listOfElements.push(listElementRef);
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...listOfElements);