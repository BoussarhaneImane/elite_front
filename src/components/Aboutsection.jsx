import React from 'react';

import serviceImage1 from '../images/service-03.jpg';
import serviceImage2 from '../images/service-02.jpg';
import serviceImage3 from '../images/service-03.jpg';

import './About2.css';  // Créez ce fichier pour vos styles personnalisés

const services = [
  {
    name: "Synther Vaporware",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: serviceImage1
  },
  {
    name: "Locavore Squidward",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: serviceImage2
  },
  {
    name: "Health Gothfam",
    description: "Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.",
    image: serviceImage3
  }
];

const Aboutsection = () => {
  return (
    <section className="our-services">
       <hr className="dotted-line" />
      <div className="container">
        <div className="section-heading mt-20 ">
          <h2 className='mb-4'>Nos Services</h2>
          <span className='text-gray-500 italic '>Les détails font la différence pour Hexashop comparé aux autres thèmes.</span>
        </div>
        <div className="row mt-20">
          {services.map((service, index) => (
            <div data-aos="zoom-in" className="col-lg-4" key={index}>
              <div className="service-item">
                <h4 className='font-medium'>{service.name}</h4>
                <p>{service.description}</p>
                <img src={service.image} alt={service.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
