// SubscribeArea.js
import React from 'react';
import { BsSendFill } from "react-icons/bs";
import './SubscribeArea.css'; // Importer le fichier CSS

const SubscribeArea = () => {
  return (
    <>
      <hr className="dotted-line" />
      <div className="bg-gray-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Subscription Form */}
            <div className="md:w-2/3 bg-white p-6 rounded-lg">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  En vous abonnant à notre newsletter et après votre première commande, vous bénéficiez de 30 % de réduction.
                </h2>
                <span className="block text-gray-400 mb-4 italic">
                  Souscrivez à notre newsletter et recevez les dernières nouveautés.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Nom complet"
                    className="subscribe-input mb-4 md:mb-0 md:w-1/2 px-4 py-2 placeholder:italic"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="Adresse mail"
                    className="subscribe-input mb-4 md:mb-0 md:w-1/2 px-4 py-2 placeholder:italic"
                    required
                  />
                  <button
                    type="submit"
                    id="form-submit"
                    className="subscribe-button px-2 h-10 transition duration-300 bg-black"
                  >
                    <BsSendFill size={20} className='text-white' />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/3 bg-white p-6 mt-6 md:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                {/* Two Column Information */}
                <div>
                  <ul className="space-y-4">
                    <li>
                      <span className='text-black text-xl font-bold'>Localisation:</span><br />
                      <span className='text-gray-400 text-sm'>Triangle d'or racine, bourgogne Casablanca.</span>
                    </li>
                    <li>
                      <span className='text-black text-xl font-bold'>Téléphone:</span><br />
                      <span className='text-gray-400 text-sm'>05 22 27 61 27</span>
                    </li>
                  </ul>
                </div>

                {/* Single Column Information */}
                <div>
                  <ul className="space-y-4">
                    <li>
                      <span className='text-black text-xl font-bold'>Heures d'ouverture:</span><br />
                      <span className='text-gray-400 text-sm'>Du lundi au samedi<br />10:00 AM - 08:00 PM</span>
                    </li>
                    <li>
                      <span className='text-black text-xl font-bold'>Email:</span><br />
                      <span className='text-gray-400 text-sm'>contact@eliteshop.com</span>
                    </li>
                    <li>
                      <span className='text-black text-xl font-bold'>Social Media:</span><br />
                      <span>
                        <a href="https://www.instagram.com/elite.shop.shoes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm">Instagram</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeArea;
