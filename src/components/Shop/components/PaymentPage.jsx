import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';

import './Payment.css';

function PaymentPage() {
  const location = useLocation();
  const { state: { username, total, cart } } = location;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour passer le paiement ici
    console.log('Informations de paiement :');
    console.log('Numéro de carte :', cardNumber);
    console.log('Date d\'expiration :', expiryDate);
    console.log('CVV :', cvv);
    console.log('Nom complet :', fullName);
    console.log('Adresse de livraison :', address);
    // Code pour traiter le paiement ici
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Paiement de votre commande</h1>
      <div className="bg-white p-8 shadow rounded-lg text-gray-900">
        <h2 className="text-lg font-semibold mb-4 text-end mr-5">Récapitulatif de la commande</h2>
        <hr className="mb-4" />
        <h3 className="text-lg text-gray-900 text-end mr-5 mt-5">Bienvenue, <span className="text-gray-500 font-medium">{username}</span></h3>
        <h3 className="text-xl text-end text-emerald-500 mr-5">Votre Total: ${total}</h3>
        <h2 className="text-lg font-semibold mb-4 mt-[-166px] pl-7">Produits commandés:</h2>
        <ul className="list-disc pl-6 mb-4 mt-4">
          {cart.map((product) => (
            <li key={product.id} className="text-base mb-4 flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-emerald-500">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-1">Numéro de carte</label>
            <input
              type="text"
              id="cardborder"
              className="form-input w-full"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
            <div className="ml-2 flex">
              <FontAwesomeIcon icon={faCcVisa} className="text-2xl text-amber-400 mr-2" />
              <FontAwesomeIcon icon={faCcMastercard} className="text-2xl text-orange-600 mr-2" />
              <FontAwesomeIcon icon={faCcAmex} className="text-2xl text-blue-800" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-1">Date d'expiration</label>
              <input
                type="text"
                id="cardborder"
                className="form-input w-full"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-1">CVV</label>
              <input
                type="text"
                id="cardborder"
                className="form-input w-full"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-1">Nom complet</label>
            <input
              type="text"
              id="cardborder"
              className="form-input w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">Adresse de livraison</label>
            <textarea
              id="cardborder"
              className="form-textarea w-full rounded-lg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="4"
              placeholder="Entrez votre adresse de livraison"
              required
            ></textarea>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded mt-2 w-full sm:w-auto font-medium">Valider le paiement</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
