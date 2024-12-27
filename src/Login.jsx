import React, { useState } from 'react';
import { axiosClient } from './axiosClient';
import { Link, useNavigate } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { TbPasswordUser } from "react-icons/tb";

import imgsrc from './signp2.jpg';
import './Login.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
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
        try {
            const response = await axiosClient.post('/login', formData);
            console.log(response.data);
            setErrorMessage('');
           
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error.response.data);
            setErrorMessage(error.response.data.message || 'An error occurred');
        }
    };

    return (
        <div className='ALLtwo'>
            <div style={{marginTop:'20px'}}  className="container flex justify-center items-stretch lg:w-[75%] mx-auto">
                <div className="form-section flex flex-col justify-center items-center bg-gray-900 rounded-l-xl p-4 lg:w-1/2">
                    <h1 className="text-center my-8 font-medium text-2xl text-white">Log In with Us</h1>
                    {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                    <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input id="email" name="email" type="email" autoComplete="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs" />
                            <FaUserLarge className='ml-4 mt-[-48px]
                             text-white lg:ml-48 lg:mt-[-50px]' />
                        </div>
                        <div className="input-group">
                            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs" />
                            <TbPasswordUser className="ml-4 mt-[-48px]
                             text-white lg:mt-[-50px]" />
                        </div>
                        <Link to='/register' className="text-center mb-4 text-slate-100 text-sm">
                            Don't have an account yet? <span style={{textDecoration:'underline solid 1px white'}} className="text-emerald-600  text-sm">Sign Up Here</span>
                        </Link>
                        <button type="submit" className="button w-[65%] p-2 bg-emerald-600  text-white font-bold rounded-lg hover:bg-emerald-700  text-xs mt-4">
                            Log In
                        </button>
                    </form>
                </div>
                <div className="text-section flex-1 bg-white rounded-r-xl p-4 lg:w-1/2">
                    <img src={imgsrc} alt="Signup" className="h-full object-cover rounded-r-lg w-full" />
                </div>
            </div>
        </div>
    );
}
