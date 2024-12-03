import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={
            <main className="flex-grow pt-16">
              <section className="relative h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
                    alt="Restaurant interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                <div className="relative text-center text-white px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">Le Restaurant</h1>
                  <p className="text-xl md:text-2xl mb-8">Une expérience gastronomique unique</p>
                  <div className="space-x-4">
                    <a
                      href="/menu"
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Voir le menu
                    </a>
                    <a
                      href="/reservation"
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Réserver une table
                    </a>
                  </div>
                </div>
              </section>

              <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Notre Histoire</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Chef preparing food"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Depuis 2010, notre restaurant vous accueille dans un cadre chaleureux et élégant.
                        Notre chef et son équipe passionnée vous proposent une cuisine raffinée,
                        mettant en valeur les produits locaux et de saison.
                      </p>
                      <p className="text-gray-600">
                        Chaque plat est préparé avec soin, alliant tradition et créativité
                        pour vous offrir une expérience gastronomique mémorable.
                      </p>
                      <a
                        href="/about"
                        className="inline-block text-orange-600 font-semibold hover:text-orange-700"
                      >
                        En savoir plus →
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;