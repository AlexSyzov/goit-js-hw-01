const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElements = [];

images.forEach((img) => {
  const listElementRef = document.createElement("li");
  const listImageRef = document.createElement("img");

  listElementRef.classList.add("gallery__element");
  listImageRef.classList.add("gallery__image");

  listImageRef.src = img.url;
  listImageRef.alt = img.alt;

  listElementRef.appendChild(listImageRef);

  galleryElements.push(listElementRef);
});

const galleryRef = document.querySelector("#gallery");
galleryRef.append(...galleryElements);