import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaTimes, FaBars } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import logopng from './logo.png';
import './Nav.css';
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Utiliser CartContext pour obtenir cartItems
  const location = useLocation();
  const itemCount = cartItems.length; // Obtenir le nombre d'articles dans le panier
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) setUserName(storedUserName);
  }, [location]);
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    setIsLogoutConfirmOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const openLogoutConfirm = () => setIsLogoutConfirmOpen(true);
  const cancelLogout = () => setIsLogoutConfirmOpen(false);

  return (
    
      <nav className="bg-white py-2 shadow-xs">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
    {/* Logo */}
    <Link to="/" className="flex items-center font-medium">
      <img src={logopng} alt="Logo" className="w-24 h-24 lg:w-36 lg:h-36" />
    </Link>

    {/* Desktop Menu */}
    <div className="hidden lg:flex items-center space-x-10">
      <Link to="/" className="font-medium text-gray-500">Accueil</Link>
      <Link to="/about" className="font-medium hover:text-gray-500">À propos</Link>
      <div className="relative">
        <button
          className="font-medium hover:text-gray-500"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          Articles
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-white shadow-md space-y-2 p-4 w-48 z-50">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Chaussures</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Sacs</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Foulards</Link>
            <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Vêtements</Link>
          </ul>
        )}
      </div>
      {userName ? (
        <>
          <div className="flex items-center">
            <span className="mr-1 font-medium text-gray-500">Bienvenue</span>
            <FaUser className="mr-1" />
            <p className="font-medium text-gray-500">{userName}</p>
          </div>
          <button
            onClick={openLogoutConfirm}
            className="font-medium hover:text-gray-500"
          >
            Déconnexion
          </button>
        </>
      ) : (
        <Link to="/register" className="font-medium hover:text-gray-500">Connexion</Link>
      )}
   <div className="relative inline-block hover:text-gray-500">
  <Link to="/panier">
    <FaBagShopping size={24} />
  </Link>
  {itemCount > 0 && (
    <span className="absolute top-0 left-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -translate-x-1/2 translate-y-[-50%]">
      {itemCount}
    </span>
  )}
</div>


    </div>

    {/* Mobile Menu Toggle */}
    <button
      className="lg:hidden"
      onClick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
    >
      {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="lg:hidden absolute inset-x-0 top-16 bg-white shadow-md p-4">
      <div className="space-y-4">
        <Link to="/" className="block text-gray-500 font-medium">Accueil</Link>
        <Link to="/about" className="block hover:text-gray-500 font-medium">À propos</Link>
        <div className="relative">
          <button
            className="font-medium hover:text-gray-500 mb-3"
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Articles
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 bg-white shadow-md space-y-2 p-4 w-48 z-50">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Chaussures</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Sacs</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Foulards</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-50">Vêtements</Link>
            </ul>
          )}
        </div>
        {userName ? (
          <>
            <div className="flex items-center">
              <span className="mr-1 font-medium text-gray-500">Bienvenue</span>
              <FaUser className="mr-1" />
              <p className="font-medium text-gray-500">{userName}</p>
            </div>
            <button
              onClick={openLogoutConfirm}
              className="font-medium hover:text-gray-500"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <Link to="/register" className="font-medium hover:text-gray-500">Connexion</Link>
        )}
     
      </div>
      <div className="relative inline-block hover:text-gray-500 mt-3">
  <Link to="/panier">
    <FaBagShopping size={24} />
  </Link>
  {itemCount > 0 && (
    <span className="absolute top-0 left-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center  -translate-x-1/2 translate-y-[-50%] ">
      {itemCount}
    </span>
  )}
</div>

    </div>
  )}

  {/* Logout Confirmation Popup */}
  {isLogoutConfirmOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 shadow-lg fade-up">
        <h2 className="text-xl font-medium mb-4">Êtes-vous sûr?</h2>
        <div className="flex justify-between space-x-4">
          <button
            onClick={cancelLogout}
            className="bg-gray-300 px-4 py-2 font-medium hover:bg-gray-400"
          >
            Annuler
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 font-medium hover:bg-red-600"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  )}

    </nav>
  );
};

export default Navbar;
