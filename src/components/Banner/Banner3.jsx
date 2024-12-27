import React from "react";
import img1 from './m1.png'
import img2 from './m2.png'
import img3 from './m4.png'

const Banner3 = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Jean Dupont",
      expertise: "Pharmacien en chef",
      description: "Le Dr. Jean Dupont est un pharmacien expérimenté avec plus de 15 ans d'expérience dans le domaine pharmaceutique.",
      image: img1
    },
    {
      id: 2,
      name: "Dr. Marie Leclerc",
      expertise: "Pharmacienne consultante",
      description: "Le Dr. Marie Leclerc est spécialisée dans la consultation pharmaceutique et aide nos clients à trouver les meilleurs médicaments adaptés à leurs besoins.",
      image: img2
    },
    {
      id: 3,
      name: "Dr. Ahmed Hassan",
      expertise: "Pharmacien en ligne",
      description: "Le Dr. Ahmed Hassan gère notre pharmacie en ligne avec compétence et assure une expérience client exceptionnelle pour chaque commande.",
      image: img3
    }
  ];

  return (
    <div className="container mx-auto mt-[-0px]">
      <h1 className="text-3xl font-bold text-center ">Nos Médecins</h1>
      <h1 className="text-gray-400 text-sm text-center mb-4">Qui gèrent notre pharmacie en ligne</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} data-aos="zoom-in" className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center my-12 bg-gray-900 text-white">
            <img className="h-48 w-52 object-contain" src={doctor.image} alt={doctor.name} />
            <div className="px-6 py-4">
              <div data-aos="fade-down" className="font-bold text-xl mb-2 text-center text-emerald-400">{doctor.name}</div>
              <p className="text-center text-lg">{doctor.expertise}</p>
              <p className="text-gray-300 text-center text-xs">{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
