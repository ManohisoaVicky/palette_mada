import React from 'react';
import './App.css';
import Navbar from './components/elements/Navbar';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import ProductSection from './components/sections/ProductSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/elements/Footer';

function App() {

  function scrollTo(id: string) {
    const element = document.getElementById(id)
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <header>
        <Navbar scrollTo={scrollTo}/>
      </header>
      <main>
        <HomeSection />
        <AboutSection />
        <ProductSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
