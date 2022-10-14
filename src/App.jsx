// Deps
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Navbar, Footer } from './components';
import { Home, Contact, About, Services, Error404 } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App