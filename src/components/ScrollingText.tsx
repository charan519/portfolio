import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface ScrollingTextProps {
  text: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const animation = gsap.to(textRef.current, {
        x: -textWidth,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden whitespace-nowrap bg-black py-4"
    >
      <div 
        ref={textRef}
        className="inline-block whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        <span className="text-[20vw] font-black text-white/10">
          {text} {text} {text}
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;