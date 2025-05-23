import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-primary py-12">
      <div className="container-fluid mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-secondary/20 pt-8">
          <div>
            <p className="text-secondary">© {new Date().getFullYear()} DESIGN BY CHARAN. ALL RIGHT RESERVED.</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center gap-6">
            <a href="https://github.com/charan519" className="text-secondary hover:text-primary transition-colors duration-300">GitHub</a>
            <a href="https://www.instagram.com/ro_prime/" className="text-secondary hover:text-primary transition-colors duration-300">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/d-charan-a02b6a284/" className="text-secondary hover:text-primary transition-colors duration-300">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;