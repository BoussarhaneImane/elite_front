import { FaTrash } from "react-icons/fa";
import './Panier.css'; 
import { CartContext } from '../../components/context/CartContext';
import { axiosClient } from "../../axiosClient";
import { useEffect, useState, useContext } from 'react'; // Assurez-vous d'importer useContext
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importez les styles
import PaymentForm from "./PaymentForm";
const Panier = () => {
  const { cartItems, handleQuantityChange, handleRemoveItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    clientNumber: "" 
  });

  // Calcul du prix total du panier
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Gestion des changements dans le formulaire
  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.address || !userInfo.clientNumber) {
      toast.error("Tous les champs doivent être remplis");
      return;
    }
  
    try {
      const response = await axiosClient.post('/api/checkout', {
        cartItems,
        totalPrice,
        userInfo,
      });
      console.log('Réponse:', response.data);
      toast.success("Commande envoyée avec succès !");
      setShowForm(false);
    } catch (error) {
      console.error('Erreur:', error.response || error.message);
      toast.error("Erreur lors de l'envoi de la commande.");
    }
  };
  

  return (
    <div className="shop-page-container">
      <h2 className="panier-title">Votre Panier</h2>
      <div className="shop-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Votre panier est vide.</p>
        ) : (
          cartItems.map((item) => (
            <div className="shop-item" key={item.id}>
              <img src={item.img} alt={item.title} className="item-image" />
              <div className="shop-item-info">
                <h3>{item.title}</h3>
                <p>Prix: ${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-item"
                >
                  <FaTrash size={30} className="ml-8 md:ml-12 lg:ml-16 xl:ml-14" /> 
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="total-price">
          <h2 className="font-medium">Total: ${totalPrice.toFixed(2)}</h2>
          <button className="checkout-btn font-medium" onClick={() => setShowForm(true)}>Passer à la caisse</button>
        </div>
      )}
{showForm && (
  <div className="checkout-forms-container">
    <div className="form-container">
    <h3 className="m-4 text-2xl text-center">Informations de livraison</h3> 
    <p className="mb-4 text-center text-xs text-gray-500">Veuillez remplir les informations suivantes pour la livraison de votre commande.</p> 
    <div className="ml-4">
      <input
        type="text"
        name="name"
        placeholder="Nom complet"
        value={userInfo.name}
        onChange={handleInputChange}
        className="form-inputs"
      />
      <input
        type="email"
        name="email"
        placeholder="Adresse e-mail"
        value={userInfo.email}
        onChange={handleInputChange}
        className="form-inputs"
      />
      <input
        type="text"
        name="address"
        placeholder="Adresse de livraison"
        value={userInfo.address}
        onChange={handleInputChange}
        className="form-inputs"
      />
      <input
        type="text"
        name="clientNumber"
        placeholder="Numéro de Téléphone"
        value={userInfo.clientNumber}
        onChange={handleInputChange}
        className="form-inputs"
      />
      <button className="submit-btn " onClick={handleCheckout}>Envoyer la commande</button>
      </div>
    </div>

    <div className="form-container">
    <h3 className="m-4 text-2xl text-center">Informations de paiement</h3> {/* Titre pour les informations de paiement */}
      <p className="mb-4 text-center text-xs text-gray-500">Veuillez entrer vos informations de paiement pour finaliser la commande.</p> {/* Explication pour les clients */}
      
      <PaymentForm totalPrice={totalPrice} cartItems={cartItems} userInfo={userInfo} />
    </div>
     
  </div>
)}

      {/* Conteneur de Toast pour les notifications */}
      <ToastContainer />
    </div>
  );
};

export default Panier;
