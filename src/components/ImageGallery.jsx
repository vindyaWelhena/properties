import { useState } from "react";

function ImageGallery({ images, altText }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      <img
        src={mainImage}
        alt={altText}
        className="gallery-main-image"
      />

      <div className="gallery-thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${altText} thumbnail ${index + 1}`}
            className={`thumbnail ${
              img === mainImage ? "active" : ""
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
