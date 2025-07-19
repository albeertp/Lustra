import React from 'react';

const F1Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: 'Notizie', page: 'news' },
    { name: 'Prodotti', page: 'products' },
    { name: 'Chi Siamo', page: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-filter backdrop-blur-3xl shadow-2xl rounded-b-3xl p-4 md:p-6 mx-auto max-w-7xl transition-all duration-500 ease-in-out transform translate-y-0 hover:translate-y-1 border border-white border-opacity-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
          {/* Placeholder for 3D Logo - In a real scenario, this would be a complex 3D model viewer */}
          <div className="relative h-8 md:h-10 w-8 md:w-10 mr-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/New_era_F1_logo.png" alt="F1 Logo" className="absolute inset-0 w-full h-full object-contain animate-spin-slow" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 opacity-20 rounded-full filter blur-sm animate-pulse-light"></div>
          </div>
          News
        </h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 relative group ${
                currentPage === item.page ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${currentPage === item.page ? 'scale-x-100' : ''}`}></span>
            </button>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default F1Header;