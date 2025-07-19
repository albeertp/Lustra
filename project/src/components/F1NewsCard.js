import React from 'react';

const F1NewsCard = ({ title, imageUrl, excerpt, date }) => {
  return (
    <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-white border-opacity-50 cursor-pointer group relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-gray-500 text-xs">
          <span>{date}</span>
          <button className="text-red-600 font-medium hover:underline transform hover:translate-x-1 transition-transform duration-300">Leggi di più</button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default F1NewsCard;