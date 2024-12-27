import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className="bg-gray-900 py-1 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Champ de recherche */}
        <div className="relative mb-2 lg:mb-0 lg:mr-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white text-xs rounded-full px-4 py-2 w-full focus:outline-none focus:bg-gray-700"
          />
        </div>

        {/* Liens vers les réseaux sociaux */}
        <div className="flex items-center space-x-4">
  <a href="#" className="text-white ">
    <FaFacebook className="transition duration-300 hover:text-emerald-500 " />
  </a>
  <a href="#" className="text-white ">
    <FaTwitter className="transition duration-300 hover:text-emerald-500 " />
  </a>
  <a href="#" className="text-white  ">
    <FaInstagram className="transition duration-300 hover:text-emerald-500 " />
  </a>
</div>


        {/* Numéro de contact */}
        <div className="text-white text-center lg:text-left mt-2 lg:mt-0">
          <p className="text-xs lg:text-sm">Contactez-nous: +1234567890</p>
        </div>

        {/* Phrase publicitaire */}
        <div className="text-white text-center lg:text-left mt-2 lg:mt-0">
          <p className="text-xs lg:text-sm">
            Achetez vos médicaments en ligne en toute sécurité!
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
