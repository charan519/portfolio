import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    let lastScrollPosition = 0;
    
    const handleScroll = () => {
      if (scrollPosition > 100 && scrollPosition > lastScrollPosition) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollPosition = scrollPosition;
    };

    handleScroll();
  }, [scrollPosition]);

  return (
    <div className="min-h-screen bg-background text-primary relative">
      <Header show={showHeader} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;