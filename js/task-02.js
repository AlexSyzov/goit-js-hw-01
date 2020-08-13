const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listOfElements = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  return listElement;
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...listOfElements);