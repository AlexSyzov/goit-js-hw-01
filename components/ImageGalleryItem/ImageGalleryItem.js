import React from "react";
import { GalleryItem, Image } from "./styled";

const ImageGalleryItem = ({
  url,
  largeImageURL,
  description,
  onModalOpening,
}) => {
  return (
    <GalleryItem className="ImageGalleryItem">
      <Image
        src={url}
        alt={description}
        onClick={() => onModalOpening(largeImageURL, description)}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
