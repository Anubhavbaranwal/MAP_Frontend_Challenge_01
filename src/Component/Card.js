import React, { useState } from "react";

const Card = ({ image, title, location, date, price }) => {
  const [buttonColor, setButtonColor] = useState('bg-blue-500');

  const handleClick = () => {
    setButtonColor(buttonColor === 'bg-blue-500' ? 'bg-red-500' : 'bg-blue-500');
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-64 relative">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-auto" style={{ aspectRatio: '4/5' }} />
      <button onClick={handleClick} className={`absolute top-0 right-0 ${buttonColor} text-white rounded p-1 cursor-pointer m-1`}>Mark</button>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-lg font-bold mt-2">{price}</p>
    </div>
  </div>

  );
};

export default Card;
