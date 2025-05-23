import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        contentRef.current?.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.6'
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-24 bg-black text-white">
      <div className="container-fluid mx-auto">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-[15vw] md:text-[10vw] xl:text-[8vw] font-black mb-8">
            CODE<br />
            CREATE<br />
            INNOVATE
          </h2>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl md:text-l font-medium leading-relaxed text-white/60">
              "As a B.Tech AIML student, I blend my technical skills with creative problem-solving to build innovative solutions. From organizing hackathons to leading our university's Coding Club, I thrive on turning ideas into reality through code and collaboration."
            </p>
          </div>

          <div>
            <p className="text-xl md:text-l font-medium leading-relaxed text-white/60">
              "With a strong focus on AI/ML and web development, I approach every project with a drive for excellence and innovation. My work on projects like AI Geo Guide reflects my passion for solving real-world challenges using cutting-edge technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;