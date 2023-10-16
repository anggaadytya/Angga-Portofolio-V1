import React from 'react';

const ButtonIcon = ({ title, icons: Icon, link, color }) => {
  return (
    <button className={`flex items-center ${color} px-4 py-1 rounded-lg gap-1 md:gap-2 text-white`} onClick={() => window.open(link)}>
      <Icon className="w-4 h-4" /> 
      <h1 className='text-sm md:text-base'>{title}</h1>
    </button>
  );
};

export default ButtonIcon;
