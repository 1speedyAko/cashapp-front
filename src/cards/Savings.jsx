import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Savings() {
  const Savings = 15; // Replace with your actual total income
  const backgroundImageUrl = 'path/to/your/line-graph-image.png'; // Replace with your image URL

  const cardStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', // Adding a light box shadow
  };

  return (
    <div className="bg-blue-500 w-64 h-40 flex items-center justify-center relative" style={cardStyle}>
      <div className="text-white text-center">
        <div className="text-4xl font-bold">{Savings}%</div>
        <div className="text-lg">Savings</div>
      </div>
      <IoIosArrowDown className="arrow-down" />
    </div>
  );
}
