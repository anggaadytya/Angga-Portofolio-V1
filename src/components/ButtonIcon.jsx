import React from 'react';

const ButtonIcon = ({ title, icons: Icon, link, color }) => {
  return (
    <button className={`flex items-center ${color} px-4 py-1 rounded-lg gap-2 text-white`} onClick={() => window.open(link)}>
      <Icon size={24} /> 
      <h1>{title}</h1>
    </button>
  );
};

export default ButtonIcon;
