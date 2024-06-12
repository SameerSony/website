import React from 'react';

const ImageGallery = () => {
  const images = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg',
    'https://img.freepik.com/free-photo/colorful-background-with-colorful-design-that-says-happy-birthday_188544-15607.jpg',
    // Add more images as needed
  ];

  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
