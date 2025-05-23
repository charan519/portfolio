import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { x: '0%' },
        {
          x: '-50%',
          duration: 25,
          repeat: -1,
          ease: 'linear',
        }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#F2F2F2] overflow-hidden">
      {/* Scrolling Name Background */}
      <div
        ref={nameRef}
        className="absolute top-1/2 left-0 whitespace-nowrap text-[20vw] font-extrabold text-black -translate-y-1/2 leading-none tracking-tighter"
        style={{ willChange: 'transform' }}
      >
        CHARAN CHARAN CHARAN CHARAN
      </div>

      {/* Hero Content */}
      <div className="absolute top-28 left-20 z-10">
        <h3 className="text-lg text-black font-normal">B.Tech AIML Student</h3>
        <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-6">
          Coder & <br /> Hackathon Enthusiast
        </h1>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          <a 
            href="https://github.com/charan519" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-secondary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/d-charan-a02b6a284/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-secondary transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Circles */}
      <div className="absolute -top-[15vw] -left-[15vw] w-[48vw] h-[48vw] border-2 border-black rounded-full z-0 pointer-events-none" />
      <div className="absolute -bottom-[10vw] -right-[10vw] w-[30vw] h-[30vw] border-2 border-black rounded-full z-0 pointer-events-none" />

      {/* Profile Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src="/myphoto.png"
          alt="Profile"
          className="h-[90vh] object-contain"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 right-10 z-10 flex flex-col items-center gap-1">
        <span className="text-sm text-black">Scroll down</span>
        <ArrowDown className="animate-bounce text-black" size={18} />
      </div>
    </section>
  );
};

export default Hero;