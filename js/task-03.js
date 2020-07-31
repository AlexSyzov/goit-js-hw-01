class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemForRemove) {
    const allProducts = this.items;

    for (let i = 0; i < allProducts.length; i += 1) {
      if (allProducts[i] === itemForRemove) {
        allProducts.splice(i, 1);
        break; // if every product is unique, it is great to stop the loop as soon as we find itemForRemove
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);