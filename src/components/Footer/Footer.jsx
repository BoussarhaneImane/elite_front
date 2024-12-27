// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import imgfotter from './white-logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Logo and Info */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={imgfotter} alt="Elite Shop Logo" className="w-32" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Triangle d'or racine, bourgogne Casablanca.</li>
              <li>contact@eliteshop.com</li>
              <li>05 22 27 61 27</li>
            </ul>
          </div>

          {/* Shopping Categories */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Shopping &amp; Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Chaussures</Link></li>
              <li><Link to="/" className="hover:underline">Vêtements</Link></li>
              <li><Link to="/" className="hover:underline">Sacs</Link></li>
              <li><Link to="/n" className="hover:underline">Foulards</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/" className="hover:underline">À propos</Link></li>
              <li><Link to="/" className="hover:underline">Articles</Link></li>
              <li><Link to="/" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
<br></br>
<br></br>
        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="mb-2">Copyright © 2024 Elite Shop., All Rights Reserved.</p>
          <p className="mb-4">Design: <a href="https://www.instagram.com/webconceptmaroc/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">WebConcept Maroc</a></p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
