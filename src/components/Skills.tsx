import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        skillsRef.current?.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.6'
      );
    }
  }, [inView]);

  const skills = {
    'Programming Languages': ['Java', 'Python', 'JavaScript', 'C'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision'],
    'Web Development': ['React', 'Node.js', 'HTML/CSS', 'MongoDB'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Agile Methodology']
  };

  return (
    <section id="skills" ref={ref} className="py-24 bg-background">
      <div className="container-fluid mx-auto">
        <h2 ref={titleRef} className="text-[15vw] md:text-[10vw] xl:text-[6vw] font-black mb-16">
          /SKILLS
        </h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="p-8 border border-secondary/20 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg">{skill}</span>
                    </div>
                    <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;