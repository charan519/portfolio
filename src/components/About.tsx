import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Trophy, Code, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      ).fromTo(
        cardsRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, [inView]);

  const achievements = [
    {
      icon: <GraduationCap size={24} />,
      title: "Education",
      items: [
        "B.Tech CSE (AI & ML)",
        "Mohan Babu University",
        "CGPA: 8.59"
      ]
    },
    {
      icon: <Trophy size={24} />,
      title: "Achievements",
      items: [
        "National Hackathon Winner",
        "JAVA KINGDOM Mentor (800+ students)",
        "Codsoft Internship"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Leadership",
      items: [
        "Core Member of Coding Club",
        "ISTE Coordinator",
        "XHORIZON Organizer"
      ]
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-black text-white py-24 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3">
            <h2
              ref={titleRef}
              className="text-[14vw] md:text-[10vw] xl:text-[6vw] font-black mb-6 leading-none"
            >
              /ABOUT
            </h2>
          </div>

          <div className="w-full lg:w-2/3">
            <p
              ref={textRef}
              className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-3xl"
            >
              I'm a passionate third-year B.Tech CSE student specializing in Artificial Intelligence and Machine Learning at Mohan Babu University. My journey in tech has been marked by significant achievements, including winning a national-level hackathon at VR Siddhartha and mentoring 800+ students in Java programming.
              <br /><br />
              As a core member of the Coding Club and ISTE Coordinator, I've had the opportunity to organize XHORIZON, our university's flagship hackathon, and lead various technical initiatives. My experience spans from developing AI-powered solutions to building full-stack applications, always driven by a desire to create meaningful impact through technology.
            </p>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 border border-white/20 rounded-lg bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {achievement.icon}
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="text-white/70">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/3 hidden md:block">
        <div className="w-24 h-24 border-l-2 border-b-2 border-secondary/30 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default About;