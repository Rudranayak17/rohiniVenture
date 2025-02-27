import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Achievements from './components/Achievements';
import Roles from './components/Roles';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior for Safari
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Achievements />
      <Roles />
      <Testimonials />
      <Partners />
      {/* <Dashboard /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;