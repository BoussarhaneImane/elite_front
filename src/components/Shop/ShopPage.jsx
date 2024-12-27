import React, { useState, useEffect } from "react";
import Tesseract from 'tesseract.js';
import { TbUrgent } from "react-icons/tb";
import img1 from './components/d1.png'
import img2 from './components/d2.png'
import img3 from './components/d3.png'
import img4 from './components/d4.png'
import img5 from './components/d5.png'
import img6 from './components/d6.png'
import img7 from './components/d7.png'
import img8 from './components/d8.png'
import img9 from './components/d9.png'
import img10 from './components/d10.png'
import img11 from './components/d11.png'
import img12 from './components/d12.png'
import img13 from './components/d13.png'
import img14 from './components/d14.png'
import img15 from './components/d15.png'
import img16 from './components/d16.png'
import img17 from './components/d17.png'
import img18 from './components/d18.png'
import img19 from './components/d19.png'
import img20 from './components/d20.png'

import Medicament1Img from '../Products/p1.png'
import Medicament2Img from '../Products/p2.png'
import Medicament3Img from '../Products/p3.png'
import Medicament4Img from '../Products/p4.png'
import Medicament5Img from '../Products/p5.png'
import Medicament6Img from '../Products/p6.png'
import Medicament7Img from '../Products/p7.png'
import Medicament8Img from '../Products/p8.png'
import './shop.css'
import { useNavigate } from "react-router-dom";

const productsData = [
  { id: 1, name: "Paracetamol", price: 5, image: img1, prescriptionRequired: false },
  { id: 2, name: "Ibuprofen", price: 7, image: img2, prescriptionRequired: true },
  { id: 3, name: "Aspirin", price: 4, image: img3, prescriptionRequired: false },
  { id: 4, name: "Vitamine C", price: 8, image: img4, prescriptionRequired: false },
  { id: 5, name: "Amoxicilline", price: 12, image: img5, prescriptionRequired: true },
  { id: 6, name: "Calmant", price: 6, image: img6, prescriptionRequired: false },
  { id: 7, name: "Toplexil", price: 9, image: img7, prescriptionRequired: false },
  { id: 8, name: "AniosGel", price: 3, image: img8, prescriptionRequired: false },
  { id: 9, name: "Pansements", price: 6, image: img9, prescriptionRequired: false },
  { id: 10, name: "Crème solaire SPF", price: 15, image: img10, prescriptionRequired: false },
  { id: 11, name: "Seringues", price: 2, image: img11, prescriptionRequired: false },
  { id: 12, name: "Lotionsantiseptiques", price: 5, image: img12, prescriptionRequired: true },
  { id: 13, name: "Thermomètre", price: 10, image: img13, prescriptionRequired: false },
  { id: 14, name: "Calimdrem", price: 8, image: img14, prescriptionRequired: false },
  { id: 15, name: "Vogalib", price: 6, image: img15, prescriptionRequired: true },
  { id: 16, name: "Mercurochrome", price: 4, image: img16, prescriptionRequired: false },
  { id: 17, name: "CrèmeUriage", price: 7, image: img17, prescriptionRequired: true },
  { id: 18, name: "Gouttes les yeux", price: 10, image: img18, prescriptionRequired: false },
  { id: 19, name: "Désinfectant", price: 5, image: img19, prescriptionRequired: false },
  { id: 20, name: "Bandages", price: 3, image: img20, prescriptionRequired: true }
  ,
  {
    id: 21,
    image: Medicament1Img,
    name: "Antibiotique",
    price: 15,
    prescriptionRequired: false
   
  },
  {
    id: 22,
    image: Medicament2Img,
    name: "Vitamin D",
    price: 10,
    prescriptionRequired: false
   
  },
  {
    id: 23,
    image: Medicament3Img,
    name: "Antihistaminique",
    price: 12,
    prescriptionRequired: false
  
  },
  {
    id:24,
    image: Medicament4Img,
    name: "Anti-inflammatoire",
    price: 19,
    prescriptionRequired: false
  },
  {
    id: 25,
    image: Medicament5Img,
   name: "Vitamin E",
    price: 10,
    prescriptionRequired: false
  },
  {
    id: 26,
    image: Medicament6Img,
   name: "Antitussif",
    price: 14,
    prescriptionRequired: false
  },
  {
    id: 27,
    image: Medicament7Img,
   name: "Antispasmodique",
    price: 20,
    prescriptionRequired: false
  },
  {
    id: 28,
    image: Medicament8Img,
   name: "Antifongique",
    price: 15,
    prescriptionRequired: false
  }
];


const ShopPage = () => {
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [alertMessage, setAlertMessage] = useState(''); 
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('userName');
    setUsername(user);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  const addToCart = (product) => {
    if (product.prescriptionRequired && !prescriptionFile) {
      setAlertMessage('Vous devez fournir une ordonnance pour acheter ce produit.');
      return;
    }

    const productToAdd = {
      ...product,
      prescriptionFile: product.prescriptionRequired ? prescriptionFile : null,
    };

    setCart([...cart, productToAdd]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const handlePrescriptionChange = async (e) => {
    const file = e.target.files[0];
    const { data: { text } } = await Tesseract.recognize(file);
    const motsCles = ['ORDONNANCE', 'ordonnance', 'médecin', 'patient', 'date'];
    const estOrdonnance = motsCles.some(motCle => text.includes(motCle));
  
    if (estOrdonnance) {
      setAlertMessage("Le document semble être une ordonnance, c'est bon.");
    } else {
      setAlertMessage('Le document ne semble pas être une ordonnance.');
    }
  
    setPrescriptionFile(file);
  };
  

  const handlePayment = () => {
    if (username) {
      navigate('/payement', { state: { username, total, cart } });
    } else {
      alert('Vous devez vous connecter pour passer à la page de paiement.');
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 text-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Bienvenue dans notre Pharma Store</h1>
      {alertMessage && (
        <div className=" bg-red-500 text-white p-2 mb-4 rounded-lg w-52 text-xs">
          <TbUrgent size={25} className='ml-2'/> {alertMessage}
        </div>
      )} 
      <div className="mb-4">
        <input
          id="border"
          type="text"
          className="rounded px-4 py-2 w-1/2 text-xs"
          placeholder="Rechercher un produit"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((product) => (
      <div key={product.id} id="border" className={"rounded p-4 relative flex flex-col justify-center items-center mb-6 card"  }>
        {product.prescriptionRequired && (
          <div className="overlay">
            <input 
  type="file" 
  accept=".pdf,.jpg,.jpeg,.png" 
  onChange={handlePrescriptionChange} 
  className="hidden" 
  id="prescriptionInput" 
/>
<label 
  className=" text-white px-8  mt-2  text-xs text-center cursor-pointer" 
  htmlFor="prescriptionInput" 
>
   ordonnance !
</label>

          
          </div>
        )}
        <img src={product.image} alt={product.name} className="h-32 w-32 object-contain rounded mt-4" />
        <h2 className="text-lg font-medium m-4">{product.name}</h2>
        <p>Prix: ${product.price}</p>
        <button
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded mt-2 w-36 text-xs duration-75"
          style={{transition:'0.5s'}}
          onClick={() => addToCart(product)}
        >
          Ajouter au panier
        </button>
      </div>
    ))}
</div>

      <div className="mt-8 bg-gray-900 p-12 text-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Votre commande</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b border-gray-100 py-2">
              <div>
                <img src={product.image} alt={product.name} className="w-10 h-10 mr-2 rounded" />
                <br/>
                <span>{product.name}</span>
                <br/>
                <span className="text-xl text-emerald-500">${product.price}</span>
              </div>
              <button className="bg-red-600 text-white rounded-lg p-0 w-24 h-8 text-sm" onClick={() => removeFromCart(product)}>Retirer</button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-lg font-bold">Total:${total}</p>
        </div>
         <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded mt-2 w-60 font-medium " onClick={handlePayment} style={{fontSize:'16px', transition:'0.5s'}} >Passer à la page de paiement</button>
      </div>
    </div>
  );
};

export default ShopPage;
