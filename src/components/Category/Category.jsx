import React, { useState, useContext } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import "./products.css";
import { CartContext } from "../../components/context/CartContext";
// Image paths
import Chaussure1Img from "../../images/instagram-03.jpg";
import Chaussure2Img from "../../images/instagram-05.jpg";
import Chaussure3Img from "../../images/instagram-06.jpg";
import Chaussure4Img from "../../images/men-01.jpg";
import Chaussure5Img from "../../images/men-02.jpg";
import Chaussure6Img from "../../images/men-03.jpg";
import Chaussure7Img from "../../images/baner-right-image-01.jpg";
import Chaussure8Img from "../../images/men-03.jpg";
import { uid } from 'uid';

// Products data
const ProductsData = [
  { id: uid(), img: Chaussure1Img, title: "Ballerines Élégantes", price: 75 },
  { id: uid(), img: Chaussure2Img, title: "Escarpins en Cuir", price: 120 },
  { id: uid(), img: Chaussure3Img, title: "Bottes Hautes", price: 150 },
  { id: uid(), img: Chaussure4Img, title: "Sandales Chic", price: 85 },
  { id: uid(), img: Chaussure5Img, title: "Mocassins Confortables", price: 95 },
  { id: uid(), img: Chaussure6Img, title: "Chaussures de Sport", price: 110 },
  { id: uid(), img: Chaussure7Img, title: "Chaussures en Suède", price: 100 },
  { id: uid(), img: Chaussure8Img, title: "Bottines Casual", price: 90 },
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {  addToCart } = useContext(CartContext);

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
        Chaussures
      </h2>
      <p className="carousel-subtitle mb-12 text-left ml-36">
        Donnez à une fille les bonnes chaussures, et elle pourra conquérir le monde.
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

export default Category;
