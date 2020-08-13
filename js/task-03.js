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

const galleryElements = images.map((img) => {
  const listElement = document.createElement("li");
  const listImage = document.createElement("img");

  listElement.classList.add("gallery__element");
  listImage.classList.add("gallery__image");

  listImage.src = img.url;
  listImage.alt = img.alt;

  listElement.appendChild(listImage);

  return listElement;
});

const galleryRef = document.querySelector("#gallery");
galleryRef.append(...galleryElements);