import React from 'react';
import imgtt from './left-banner-image.jpg';
import imgxx from './baner-right-image-01.jpg';
import imgbb from './baner-right-image-02.jpg';
import imgkk from './baner-right-image-03.jpg';
import imgcc from './baner-right-image-04.jpg';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
    return (
        <div className="main-banner mt-10" id="top">
            <div className="container-fluid">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-lg-6 mb-6 md:mb-0">
                        <div className="left-content thumb-container">
                            <div className="thumb">
                                <img src={imgtt} alt="Left Banner" className="w-full h-auto object-cover" />
                                <div className="hover-content1">
                                    <div className="inner-content text-center">
                                        <h4 className='text-3xl md:text-4xl font-medium'>Elite Shop</h4>
                                        <span>Chaussures, Sacs et Prêt-à-porter pour femmes</span>
                                        <div className="main-border-button mt-4">
                                           <Link to='/'>Découvrir</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6" >
                        <div className="right-content grid grid-cols-1 md:grid-cols-2 gap-4" >
                            {/* Chaussures */}
                            <div className="thumb-container">
                                <div className="thumb">
                                    <img src={imgxx} alt="Chaussures" className="w-full h-auto object-cover" />
                                    <div className="hover-content">
                                        <div className="inner text-center">
                                            <h4 className='text-2xl md:text-4xl font-medium'>Chaussures</h4>
                                            <p className="mt-2 text-sm md:text-base">Chaussures élégantes et confortables pour toutes vos occasions.</p>
                                            <div className="main-border-button mt-4">
                                            <Link to='/'>Découvrir</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vêtements */}
                            <div className="thumb-container">
                                <div className="thumb">
                                    <img src={imgbb} alt="Vêtements" className="w-full h-auto object-cover" />
                                    <div className="hover-content">
                                        <div className="inner text-center">
                                            <h4 className='text-2xl md:text-4xl font-medium'>Vêtements</h4>
                                            <p className="mt-2 text-sm md:text-base">Des vêtements tendance, alliant style et confort au quotidien.</p>
                                            <div className="main-border-button mt-4">
                                            <Link to='/'>Découvrir</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sacs */}
                            <div className="thumb-container">
                                <div className="thumb">
                                    <img src={imgkk} alt="Sacs" className="w-full h-auto object-cover" />
                                    <div className="hover-content">
                                        <div className="inner text-center">
                                            <h4 className='text-2xl md:text-4xl font-medium'>Sacs</h4>
                                            <p className="mt-2 text-sm md:text-base">Sacs en cuir véritable, élégants et pratiques pour un look raffiné.</p>
                                            <div className="main-border-button mt-4">
                                            <Link to='/'>Découvrir</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Foulards */}
                            <div className="thumb-container">
                                <div className="thumb">
                                    <img src={imgcc} alt="Foulards" className="w-full h-auto object-cover" />
                                    <div className="hover-content">
                                        <div className="inner text-center">
                                            <h4 className='text-2xl md:text-4xl font-medium'>Foulards</h4>
                                            <p className="mt-2 text-sm md:text-base">Foulards et écharpes délicats pour une touche chic et sophistiquée.</p>
                                            <div className="main-border-button mt-4">
                                            <Link to='/'>Découvrir</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
