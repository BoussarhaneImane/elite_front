import React from 'react';
import backgroundImage from '../images/about-us-page-heading.jpg';
import backgroundImage2 from '../images/about-left-image.jpg';
import teamMember1 from '../components/Category/person1.jpg';  // Assurez-vous que ce sont des images différentes
import teamMember2 from '../components/Category/person2.jpg';
import teamMember3 from '../components/Category/person3.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './About.css';
import Aboutsection from './Aboutsection.jsx'
import SubscribeArea from './Footer/SubscribeArea.jsx'
import Footer from './Footer/Footer.jsx';
const AboutPage = () => {
  return (
    <>
      {/* Section Hero */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Élégance & Style</h1>
          <p className="text-xl md:text-xl mt-4 font-medium italic">Découvrez les dernières tendances en mode féminine chez Eliteshop</p>
        </div>
      </div>

      {/* Section À Propos */}
      <div className="py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row">
          {/* Colonne pour l'image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={backgroundImage2} alt="Profil" className="w-96 h-auto ml-44" />
          </div>

          {/* Colonne pour le texte */}
          <div className="md:w-1/2 md:pl-6">
          <hr className="dotted-line" />
            <h2 className="text-3xl font-bold mb-4">À Propos de Nous</h2>
            <p className="text-sm mb-6 text-gray-400">
              Nous sommes une entreprise passionnée par la mode féminine, dédiée à offrir des vêtements élégants et de haute qualité. Notre mission est de permettre à chaque femme de se sentir unique et confiante dans ses choix vestimentaires.
            </p>

            <h3 className="text-2xl font-semibold mb-2">Nos Compétences</h3>
            <ul className="list-disc pl-5">
              <li className="text-sm mb-6 text-gray-600 italic">Design moderne et tendance</li>
              <li className="text-sm mb-6 text-gray-600 italic">Qualité de fabrication exceptionnelle</li>
              <li className="text-sm mb-6 text-gray-600 italic">Service client personnalisé</li>
              <li className="text-sm mb-6 text-gray-600 italic">Livraison rapide et fiable</li>
            </ul>
            <hr className="dotted-line" />
          </div>
        </div>
      </div>

      {/* Section Notre Équipe */}
      <div className="text-center mb-12 mt-20">
      <hr className="dotted-line" />
        <h2 className="text-4xl font-bold">Notre Équipe</h2>
        <p className="text-sm mt-4 text-gray-500 italic">Rencontrez notre équipe dévouée et talentueuse qui travaille pour vous offrir les meilleures tendances de mode.</p>
      </div>

      <div  className="flex flex-col md:flex-row justify-center items-center carouselx-products">
        {/* Team Member 1 */}
        <div data-aos="zoom-out" className="relative group carouselx-product m-4">
          <img src={teamMember1} alt="Team Member 1" className="w-64 h-64 object-cover" />
          <div className="absolute inset-0 carouselx-info">
            <div className="flex justify-center items-center h-full">
              <a href="#" className="text-white text-2xl shop-iconx"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaLinkedin /></a>
            </div>
          </div>
          <div className="text-container">
            <h3 className="text-2xl font-semibold">Alice Dupont</h3>
            <p className="text-gray-400 font-medium">Designer</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div data-aos="zoom-out" className="relative group carouselx-product m-4">
          <img src={teamMember2} alt="Team Member 2" className="w-64 h-64 object-cover" />
          <div className="absolute inset-0 carouselx-info">
            <div className="flex justify-center items-center h-full">
              <a href="#" className="text-white text-2xl shop-iconx"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaLinkedin /></a>
            </div>
          </div>
          <div className="text-container">
            <h3 className="text-2xl font-semibold">Sophie Martin</h3>
            <p className="text-gray-400 font-medium">Responsable Marketing</p>
          </div>
        </div>

        {/* Team Member 3 */}
        <div  data-aos="zoom-out" className="relative group carouselx-product m-4">
          <img src={teamMember3} alt="Team Member 3" className="w-64 h-64 object-cover" />
          <div className="absolute inset-0 carouselx-info">
            <div className="flex justify-center items-center h-full">
              <a href="#" className="text-white text-2xl shop-iconx"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl shop-iconx"><FaLinkedin /></a>
            </div>
          </div>
          <div className="text-container">
            <h3 className="text-2xl font-semibold">Julie Lefevre</h3>
            <p className="text-gray-400 font-medium">Développeuse Web</p>
          </div>
        </div>
        
    <Aboutsection/>
    </div>
    <SubscribeArea/>
    <Footer/>
    </>
  );
};

export default AboutPage;
