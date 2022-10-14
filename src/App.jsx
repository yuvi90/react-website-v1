// Deps
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/ThemeData';
// Components
import { Navbar, Footer } from './components';
import { Home, Contact, About, ServicesPage, Error404 } from './pages';

//------------------------------------------------------------

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App