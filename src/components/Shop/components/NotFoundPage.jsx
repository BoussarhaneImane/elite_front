import React from 'react';
import { RiEmotionSadLine } from 'react-icons/ri'; 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <RiEmotionSadLine className="text-6xl text-gray-500 mb-4" /> {/* Icône 404 */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops 404 !</h1>
      <p className="text-gray-600">La page que vous recherchez n'a pas été trouvée.</p>
    </div>
  );
};

export default NotFoundPage;
