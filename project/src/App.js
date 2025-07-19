import React, { useState } from 'react';
import F1Header from './components/F1Header';
import F1HeroSection from './components/F1HeroSection';
import F1NewsCard from './components/F1NewsCard';
import F1ProductCard from './components/F1ProductCard';
import { newsData } from './mock/newsData';
import { productsData } from './mock/productsData';

const App = () => {
  const [currentPage, setCurrentPage] = useState('news');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <F1Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="pt-24 pb-12 px-4 md:px-8 lg:px-12">
        <F1HeroSection />

        {currentPage === 'news' && (
          <section className="py-12 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center animate-fade-in-up">Ultime Notizie di F1</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {newsData.map((news) => (
                <F1NewsCard
                  key={news.id}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  excerpt={news.excerpt}
                  date={news.date}
                />
              ))}
            </div>
          </section>
        )}

        {currentPage === 'products' && (
          <section className="py-12 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center animate-fade-in-up">Prodotti Ufficiali di F1</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productsData.map((product) => (
                <F1ProductCard
                  key={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  amazonLink={product.amazonLink}
                />
              ))}
            </div>
          </section>
        )}

        {currentPage === 'about' && (
          <section className="py-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Chi Siamo F1GlassGrid</h2>
            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-3xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-50 animate-fade-in-up delay-200">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                F1GlassGrid è la tua fonte definitiva per le ultime notizie e prodotti esclusivi dell'emozionante mondo della Formula 1. Il nostro obiettivo è offrire un'esperienza utente immersiva e visivamente impressionante, ispirata alle tendenze di design più moderne.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Esplora le notizie più recenti, scopri la merce ufficiale delle tue squadre preferite e immergiti nella passione della velocità con un design che ti lascerà senza fiato.
              </p>
            </div>
          </section>
        )}
      </main>

      <footer className="py-8 bg-gray-900 text-white text-center text-sm">
        <p>&copy; 2024 F1GlassGrid. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default App;

// DONE