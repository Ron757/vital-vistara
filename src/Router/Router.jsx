import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

function Router() {
  return (
    <div className="router-container">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
