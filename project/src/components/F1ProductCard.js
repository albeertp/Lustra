import React from 'react';

const F1ProductCard = ({ name, imageUrl, price, amazonLink }) => {
  return (
    <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-white border-opacity-50 group relative">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
      <div className="p-6 flex flex-col justify-between h-40">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">${price}</span>
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            Acquista su Amazon
            <span className="absolute inset-0 bg-white opacity-20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default F1ProductCard;