const categoriesListRef = document.querySelector("#categories");
const amountOfElements = categoriesListRef.children.length;

const outputString = `В списке ${amountOfElements} категории.`;
console.log(outputString);

const everyListElementRef = document.querySelectorAll(".item");

everyListElementRef.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
})

// This code will work correctly just if the content of all items is constant.
// Another way is to create arrays of h2's and ul's, but then I need to work with indices ...
// Hmmm ...