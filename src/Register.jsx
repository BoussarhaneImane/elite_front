import React, { useState } from 'react';
import './registre.css';
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for visibility
import { axiosClient } from './axiosClient';

const SignupC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false); // État de chargement
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Submitting:', formData);
    try {
      const response = await axiosClient.post('/api/register', formData);
      console.log('Response:', response.data);
      setFormData({
        name: '',
        email: '',
        password: ''
      });
      localStorage.setItem('userName', formData.name);
      navigate('/'); // Redirigez après l'inscription réussie
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };
  

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  
  return (
    <div className="auth-container signup-container">
      <Link to='/' className="back-link"></Link>
      <div className="auth-form signup-form">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}  
              className='text-xs italic text-gray-900'
            />
            <label>Nom</label>
          </div>
          <div className="input-group">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}  
              className='text-xs italic text-gray-900'
            />
            <label>Email</label>
          </div>
          <div className="input-group password-group">
            <input 
              type={showPassword ? "text" : "password"}  // Toggle input type
              name="password" 
              value={formData.password} 
              onChange={handleChange}  
              className='text-xs italic text-gray-900'
            />
            <label>Mot de passe</label>
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}  {/* Eye icon for visibility toggle */}
            </span>
          </div>
          <button 
            type="submit" 
            className="auth-button" 
            disabled={loading}
          >
            {loading ? 'Création en cours...' : 'Créer un compte'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupC;
