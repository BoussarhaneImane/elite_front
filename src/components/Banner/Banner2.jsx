import React from "react";
import { Link } from "react-router-dom";

import img1 from '../../images/team-member-01.jpg'; 
import img2 from '../../images/team-member-03.jpg'; 
import img3 from '../../images/explore-image-02.jpg'; 
import img4 from '../../images/baner-right-image-02.jpg'; 
import { FaQuoteLeft } from "react-icons/fa";
const Banner2 = () => {
  return (
    <div className="carousel-container mt-28">
      <hr className="dotted-line" />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl font-medium ">
          
          {/* Left column for the title and text */}
          <div className="p-6 sm:p-8">
            <h1 data-aos="zoom-out" className="uppercase text-lg lg:text-2xl font-bold text-left">
              Explorez nos articles
            </h1>
            <p data-aos="fade-up" className="text-sm mt-4 text-left text-gray-400">
              Chez Elite Shop, nous vous proposons une sélection exclusive de vêtements, chaussures, sacs à main en cuir véritable, et foulards, tous importés d'Italie. Chaque pièce incarne l'élégance et la qualité artisanale italienne, garantissant des produits authentiques et raffinés pour sublimer votre style au quotidien.
            </p>
            <p  className=" mt-4 flex items-start text-lg italic" >
              <FaQuoteLeft className="text-black " size={59}/> {/* Icon with some margin */}
              Une femme bien habillée est une femme confiante. Avec le bon style, elle est prête à conquérir le monde.
            </p>
            <p data-aos="fade-up" className="text-sm mt-4 text-left text-gray-400">
              Nous mettons un point d'honneur à vous offrir un service de qualité. Toutes nos commandes sont traitées rapidement, avec des délais de livraison garantis entre 24 à 48 heures.
            </p>
            <p data-aos="fade-up" className="text-sm mt-4 text-left text-gray-400">
              Passez vos commandes en ligne en toute confiance et sécurité, et profitez d'une expérience d'achat fluide et sécurisée. Nos produits, importés d'Italie, vous sont livrés avec soin, pour garantir votre satisfaction à chaque étape.
            </p>
            <div data-aos="fade-up" className="mt-6">
              <Link to='/shop'>
                <button className="bg-black text-white py-2 px-4  transition duration-300">
                  Commandez
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right column for 2x2 grid of images */}
          <div data-aos="zoom-out" className="grid grid-cols-2 gap-4 mb-36 mt-20">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-auto object-cover"
            />
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-auto object-cover"
            />
            <img
              src={img3}
              alt="Image 3"
              className="w-full h-auto object-cover"
            />
            <img
              src={img4}
              alt="Image 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
