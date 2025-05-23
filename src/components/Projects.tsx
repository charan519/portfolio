import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  year: string;
  link: string;
  badge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mind Mate",
    category: "Modern Chess Game",
    description: `A modern chess platform that won first place at the VR Siddhartha Hackathon, featuring experimental modes like Quantum Chess, Ghost Chess, and AI vs Player—blending classic strategy with innovative gameplay.`,
    techStack: ["React", "Python", "Flask", "SQLite"],
    imageUrl: "/mindmate.png",
    year: "2023",
    link: "https://celebrated-belekoy-83c32b.netlify.app",
    badge: "Hackathon Winner",
  },
  {
    id: 2,
    title: "AI Geo Guide",
    category: "AI/ML Development",
    description: `An intelligent AI-powered location-based assistant that helps users navigate and explore new places with ease. Integrates computer vision for landmark recognition.`,
    techStack: ["Python", "TensorFlow", "React", "Node.js"],
    imageUrl: "/geoguide.png",
    year: "2024",
    link: "https://geoguideai.netlify.app",
    badge: "AI Project",
  },
  {
    id: 3,
    title: "XHORIZON Platform",
    category: "Web Development",
    description: `A comprehensive hackathon management platform with features for team formation, submission handling, and event organization. Used by multiple universities.`,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/xhorizon.png",
    year: "2023",
    link: "https://thecodingclubx.in",
    badge: "Hackathon Tool",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      ).fromTo(
        projectsRef.current?.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        '-=0.4'
      );
    }
  }, [inView]);

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 bg-black text-white"
    >
      <div className="container-fluid mx-auto px-4">
        <div className="mb-16">
          <p
            ref={titleRef}
            className="text-xl md:text-lg font-medium leading-relaxed text-white/60"
          >
            SELECTED PROJECTS
          </p>
        </div>

        <div
          ref={projectsRef}
          className="space-y-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;