import React from 'react'
import Nav from './Components/Nav/Nav'
import TopNav from './Components/Nav/TopNav'
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/Footer/FooterBottom';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import ShopPage from './Pages/Shop';
import ConfigurationPage from './Pages/ConfigurationPage';
import FaqPage from './Pages/Faq';

const App = () => {
  return (
    <div>
      <TopNav/>
      <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/data-plans" element={<ShopPage />}/>
          <Route path="/device-configuration" element={<ConfigurationPage />}/>
          <Route path="/faq" element={<FaqPage />}/>
        </Routes>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default App