import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out-expo ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-fluid mx-auto py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-black">
          <span className="text-xl font-bold">D.CHARAN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-black">
          <a href="#about" className="nav-link text-black">ABOUT</a>
          <a href="#skills" className="nav-link text-black">SKILLS</a>
          <a href="#work" className="nav-link text-black">PROJECTS</a>
          <a href="#contact" className="nav-link text-black">CONTACT</a>
          <a href="https://github.com/charan519" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full text-black">VIEW GITHUB</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-500 ease-out-expo ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl text-black">
          <a href="#about" className="nav-link text-black" onClick={toggleMenu}>ABOUT</a>
          <a href="#skills" className="nav-link text-black" onClick={toggleMenu}>SKILLS</a>
          <a href="#work" className="nav-link text-black" onClick={toggleMenu}>PROJECTS</a>
          <a href="#contact" className="nav-link text-black" onClick={toggleMenu}>CONTACT</a>
          <a href="https://github.com/charan519" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full mt-6 text-black" onClick={toggleMenu}>VIEW GITHUB</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;