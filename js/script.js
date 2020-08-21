import galleryItems from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxContent: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
};

const vars = {
  index: 0,
  id: undefined,
};

const readyGalleryItems = galleryItems.map((item) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const listLink = document.createElement("a");
  listLink.href = item.original;
  listLink.classList.add("gallery__link");

  const listImg = document.createElement("img");

  listImg.classList.add("gallery__image");
  listImg.src = item.preview;
  listImg.alt = item.description;
  listImg.dataset.source = item.original;
  listImg.dataset.id = vars.index;
  vars.index += 1;

  listLink.appendChild(listImg);
  listItem.appendChild(listLink);
  return listItem;
});

// There were some incorrect links, so I decided to use two images twice

refs.gallery.append(...readyGalleryItems);
refs.gallery.addEventListener("click", onImageClick);

refs.lightbox.addEventListener("click", onCloseModal);
window.addEventListener("keydown", onEscapePress);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault(); // For tag <a>. I have no idea why we need it there at all))

  const src = event.target.dataset.source;
  refs.lightboxImage.src = src;

  vars.id = event.target.dataset.id;
  window.addEventListener("keydown", onArrowsPress);

  refs.lightbox.classList.add("is-open");
}

function onCloseModal(event) {
  if (
    event.target !== refs.closeButton &&
    event.target !== refs.lightboxContent
  ) {
    return;
  }

  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "";
}

function onEscapePress(event) {
  if (event.key !== "Escape") {
    return;
  }

  if (refs.lightbox.classList.contains("is-open")) {
    refs.lightbox.classList.remove("is-open");
    refs.lightboxImage.src = "";
  }
}

function onArrowsPress(event) {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
    return;
  }

  if (event.key === "ArrowLeft") {
    if (Number(vars.id) !== 0) {
      refs.lightboxImage.src = galleryItems[vars.id - 1].original;
      vars.id -= 1;
    } else {
      refs.lightboxImage.src = galleryItems[8].original;
      vars.id = 8;
    }
  }

  if (event.key === "ArrowRight") {
    if (Number(vars.id) !== 8) {
      refs.lightboxImage.src = galleryItems[vars.id - (-1)].original;
      vars.id -= (-1); // minus is to transform data-id into a number
    } else {
      refs.lightboxImage.src = galleryItems[0].original;
      vars.id = 0;
    }
  }
}