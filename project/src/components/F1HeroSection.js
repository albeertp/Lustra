import React, { useState, useEffect } from 'react';

const F1HeroSection = () => {
  const images = [
    'https://media.gqitalia.it/photos/67c14e10936c00f273ad6802/master/w_1600%2Cc_limit/Ferrari.jpg',
    'https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2022/02/Red-Bull-RB18-nuova-macchina-2022-Formula-1-presentazione-modello-non-definitivo-1644428284702.jpg',
    'https://cdn.hdmotori.it/o0C-dS2c4goOdkvhc3foAFVkUujeNLZzzQpYPH73inA//rs:fill:720:380/q:80/plain/https://www.hdmotori.it/app/uploads/2025/02/1235952.jpg@webp',
    'https://media.alpinecars.it/wp-content/uploads/2025/02/d9e1650d973cd1965e646e046512f4f4.jpg',
    'https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/mcl39-papaya-pr-inline-1.jpg',
    'https://cdn-5.motorsport.com/images/amp/6xERpn40/s1000/mercedes-f1-w16.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center text-white overflow-hidden rounded-b-3xl shadow-2xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-zoom-in"
        style={{ backgroundImage: `url('${images[currentImageIndex]}')` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay oscuro para mejor contraste */}
      <div className="relative z-10 text-center p-4 bg-white bg-opacity-20 rounded-3xl backdrop-filter backdrop-blur-xl border border-white border-opacity-30 shadow-lg animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg text-white animate-pulse-text">
          Il Mondo della <span className="text-red-400">Formula 1</span>
        </h2>
        <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto animate-fade-in delay-300">
          Notizie, prodotti e la passione che ti guida.
        </p>
      </div>
    </section>
  );
};

export default F1HeroSection;