import React, { useState, useContext } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { uid } from 'uid';
import "./Services.css";

// Images
import Vetement1Img from "../../images/women-01.jpg";
import Vetement2Img from "../../images/women-02.jpg";
import Vetement3Img from "../../images/women-03.jpg";
import Vetement4Img from "../../images/instagram-01.jpg";
import Vetement5Img from "../../images/instagram-02.jpg";
import Vetement6Img from "../../images/explore-image-02.jpg";
import Vetement7Img from "../../images/baner-right-image-02.jpg";
import Vetement8Img from "../../images/women-03.jpg";
import { CartContext } from '../../components/context/CartContext';
const ProductsData = [
  { id: uid(), img: Vetement1Img, title: "Robe Évasée en Soie", price: 120 },
  { id: uid(), img: Vetement2Img, title: "Blouse Élégante en Dentelle", price: 80 },
  { id: uid(), img: Vetement3Img, title: "Pantalon Taille Haute", price: 90 },
  { id: uid(), img: Vetement4Img, title: "Veste en Cuir", price: 150 },
  { id: uid(), img: Vetement5Img, title: "Jupe Crayon", price: 70 },
  { id: uid(), img: Vetement6Img, title: "Cardigan Doux", price: 65 },
  { id: uid(), img: Vetement7Img, title: "Manteau Long en Laine", price: 180 },
  { id: uid(), img: Vetement8Img, title: "T-shirt Basique", price: 40 },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {  addToCart} = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProductsData.length - 1 : prevIndex - 1
    );
  };

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ProductsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleProducts = [
    ProductsData[currentIndex],
    ProductsData[(currentIndex + 1) % ProductsData.length],
    ProductsData[(currentIndex + 2) % ProductsData.length],
  ];

  return (
    <div className="carousel-container mt-28">
      <hr className="dotted-line" />
      <h2 className="carousel-title mb-2 text-left ml-36 font-medium mt-20">
        Vêtements
      </h2>
      <p className="carousel-subtitle mb-12 text-left ml-36">
        Les vêtements ne vont pas changer le monde, mais les femmes qui les
        portent, si.
      </p>

      <div className="carousel">
        <button onClick={prevProduct} className="carousel-arrow left-arrow">
          <CiCircleChevLeft size={50} />
        </button>

        <div className="carousel-products">
          {visibleProducts.map((product) => (
            <div className="carousel-product" key={product.id}>
              <div className="carousel-info">
                <h3>{product.title}</h3>
                <div className="price">${product.price}</div>
              </div>
              <img src={product.img} alt={product.title} />
              <button
                className="shop-icon"
                onClick={() => handleAddToCart(product)}
              >
                <FaShoppingCart size={30} />
              </button>
            </div>
          ))}
        </div>

        <button onClick={nextProduct} className="carousel-arrow right-arrow">
          <CiCircleChevRight size={50} />
        </button>
      </div>
    </div>
  );
};

export default Services;
