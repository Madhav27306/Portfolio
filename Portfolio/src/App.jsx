import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Hero from './Hero';
import Showcase from './Showcase';
import Skills from './Skills';
import Footer from './Footer';
import './App.css';

function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup when leaving the page
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <Skills />
      <Footer />
      
    </>
  );
}

export default App;