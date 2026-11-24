import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarteContextProvider from './context/CarteContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Accueil from './Pages/Accueil/Accueil';
import Carte from './Pages/Carte/Carte';
import Boissons from './Pages/Boissons/Boissons';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <CarteContextProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/boissons" element={<Boissons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
    </CarteContextProvider>
  );
}

export default App;
