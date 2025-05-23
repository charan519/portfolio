import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <a
        href={project.link}
        className="group block relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative py-8 border-t border-secondary/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-white/70">{project.category}</p>
                {project.badge && (
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-white/60 mb-4 max-w-2xl">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary text-background transition-all duration-500 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

       {/* Fixed Position Preview */}
<div
  className={`absolute top-0 right-0 w-80 h-48 rounded-lg overflow-hidden transform transition-all duration-500 ease-out ${
    isHovered ? 'opacity-100 translate-y-0 -translate-x-24' : 'opacity-0 translate-y-4 -translate-x-24'
  }`}
  style={{
    transformOrigin: 'right center',
  }}
>
  <div className="w-full h-full bg-black/90 backdrop-blur-md">
    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
  </div>
</div>
      </a>
    </div>
  );
};

export default ProjectCard;