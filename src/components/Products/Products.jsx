import React, { useState } from "react";
import Medicament1Img from './p1.png';
import Medicament2Img from './p2.png';
import Medicament3Img from './p3.png';
import Medicament4Img from './p4.png';
import Medicament5Img from './p5.png';
import Medicament6Img from './p6.png';
import Medicament7Img from './p7.png';
import Medicament8Img from './p8.png';

const ProductsData = [
  {
    id: 1,
    img: Medicament1Img,
    title: "Antibiotique",
    description: "Traitement contre les infections bactériennes",
  },
  {
    id: 2,
    img: Medicament2Img,
    title: "Vitamin D",
    description: "Soulage la douleur",
  },
  {
    id: 3,
    img: Medicament3Img,
    title: "Antihistaminique",
    description: "Réduit les réactions allergiques",
  },
  {
    id: 4,
    img: Medicament4Img,
    title: "Anti-inflammatoire",
    description: "Diminue l'inflammation",
  },
  {
    id: 5,
    img: Medicament5Img,
    title: "Vitamin E",
    description: "Réduit la fièvre",
  },
  {
    id: 6,
    img: Medicament6Img,
    title: "Antitussif",
    description: "Soulage la toux",
  },
  {
    id: 7,
    img: Medicament7Img,
    title: "Antispasmodique",
    description: "Réduit les spasmes musculaires",
  },
  {
    id: 8,
    img: Medicament8Img,
    title: "Antifongique",
    description: "Traite les infections fongiques",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ProductsData.length - 1 : prevIndex - 1));
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ProductsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Chaussures</h2>
      <p className="carousel-subtitle">Médicaments disponibles</p>

      <div className="carousel">
        {/* Left arrow */}
        <button onClick={prevProduct} className="carousel-arrow left-arrow">
          &#8592;
        </button>

        {/* Product */}
        <div className="carousel-product">
          <img src={ProductsData[currentIndex].img} alt={ProductsData[currentIndex].title} />
          <div className="carousel-info">
            <h3>{ProductsData[currentIndex].title}</h3>
            <p>{ProductsData[currentIndex].description}</p>
          </div>
        </div>

        {/* Right arrow */}
        <button onClick={nextProduct} className="carousel-arrow right-arrow">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Products;
