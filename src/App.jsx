import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Category from './components/Category/Category.jsx';
import Services from './components/Services/Services.jsx';
import Banner from './components/Banner/Banner.jsx';
import Banner2 from './components/Banner/Banner2.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './components/AboutPage.jsx';
import Panier from './components/Panier/Panier.jsx';
import Register from './Register.jsx';
import SubscribeArea from './components/Footer/SubscribeArea.jsx';
import PaymentPage from './components/Shop/components/PaymentPage.jsx';
import NotFoundPage from './components/Shop/components/NotFoundPage.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { CartProvider } from './components/context/CartContext.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const stripePromise = loadStripe('pk_test_51Q3khUBzlawZGo5COImNNxEAvVwLI1wMVPvOQ1JtCM1B9QBPVK9d6ZqG5FaXTxJXmtJAlR2QCxrbLyFnevvuFmZy00xIIZcquw'); 
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Toggle order popup
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <CartProvider>
        <Router>
          <Navbar />
          <Elements stripe={stripePromise}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero handleOrderPopup={handleOrderPopup} />
                  <Category />
                  <Services />
                  <Banner />
                  <Banner2 />
                  <SubscribeArea />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/register" element={<Register />} />
         
            <Route path="/payment" element={<PaymentPage />} />
           
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
          </Elements>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
