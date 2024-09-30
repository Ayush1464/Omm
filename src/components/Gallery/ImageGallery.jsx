// src/components/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css'; // Make sure your CSS styles are here

const images = [
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar panels harnessing the power of the sun.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar arrays in open fields.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Innovative solar technology for homes.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Capturing solar energy on a large scale.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Clean energy for a greener planet.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
  {
    src: '/assets/ommproj1.jpeg',
    caption: 'Solar innovation leading to a sustainable future.',
  },
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      <header className="top-bar">
        <h2>Image Gallery</h2>
        <h1>Omm Energy</h1>
      </header>

      <main className="content">
        

        <section className="grid-container">
          {images.map((image, index) => (
            <div className="grid-item" key={index}>
              <img
                src={image.src}
                alt={`Solar Energy ${index + 1}`}
                onClick={() => openModal(image)}
              />
              <p className="caption">{image.caption}</p>
            </div>
          ))}
        </section>

        {/* Modal */}
        {isOpen && (
          <div id="imageModal" className="modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img className="modal-content" id="previewImage" src={currentImage.src} alt="Preview" />
            <p className="caption">{currentImage.caption}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ImageGallery;
