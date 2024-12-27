import React from 'react';
import { TbUrgent } from "react-icons/tb";
const CustomAlert = ({ message }) => {
  return (
    <div className="custom-alert mt-[-65px] flex items-center p-2 shadow-md" data-aos="fade-left">
       <TbUrgent size={25} className='ml-2'/>
      <p className='ml-2'>{message}</p>
      
    </div>
  );
};

export default CustomAlert;
