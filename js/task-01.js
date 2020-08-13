const categoriesListRef = document.querySelector("#categories");
const amountOfElements = categoriesListRef.children.length;

const outputString = `В списке ${amountOfElements} категории.`;
console.log(outputString);

const everyListElementRef = document.querySelectorAll(".item");

everyListElementRef.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
})