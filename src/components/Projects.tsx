'use client';

import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Qemat Al Rafeat',
      subtitle: 'Equipment Rental Website',
      description: 'A website for a Saudi client\'s equipment rental business, built with Next.js in Arabic & English. Features bilingual support, equipment catalog, and rental management.',
      tech: ['Next.js', 'React', 'TypeScript', 'Arabic/English'],
      github: 'https://github.com/AhmedElnagarUU/qemat',
      live: 'https://qemat-alrafeat.com/en',
      image: '/qemat.PNG'
    },
    {
      title: 'Clean E-commerce API',
      subtitle: 'Backend Architecture',
      description: 'Backend for an e-commerce platform using Clean Architecture, with AWS S3 for image storage and modular design for event handling. Scalable and maintainable codebase.',
      tech: ['Node.js', 'Clean Architecture', 'AWS S3', 'TypeScript'],
      github: 'https://github.com/AhmedElnagarUU/clean-ecomarce-API',
      live: null,
      image: '/dashboard.PNG'
    },
    {
      title: 'EVO Luxury',
      subtitle: 'Construction & Interior Design',
      description: 'Professional WordPress website for a Saudi construction and interior design company. Highlights services, portfolio, and previous projects with a clean, modern design.',
      tech: ['WordPress', 'PHP', 'Custom Theme', 'Responsive Design'],
      github: null,
      live: 'https://evoluxury.co/en/home/',
      image: '/evoluxery.PNG'
    },
    {
      title: 'DHI Design',
      subtitle: 'Next.js Portfolio Website',
      description: 'A personal/project portfolio website built with Next.js, showcasing design works in a modern and responsive layout. Clean UI with smooth animations.',
      tech: ['Next.js', 'React', 'TypeScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/DHI-design',
      live: 'https://ahmedelnagaruu.github.io/DHI-design/',
      image: '/dhi.PNG'
    },
    {
      title: 'Bakery',
      subtitle: 'Frontend Website',
      description: 'A responsive, visually appealing website for a bakery, built to showcase products and services. Modern design with smooth user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/Bakery',
      live: 'https://ahmedelnagaruu.github.io/Bakery/',
      image: '/bakery.PNG'
    }
  ];

  return (
    <section id="projects" className="relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const projectLink = project.live || project.github;
            const CardContent = (
              <>
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    loading={index < 3 ? "eager" : "lazy"}
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-red-400/80 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-300 text-xs rounded-lg font-medium group-hover:border-red-500/40 group-hover:bg-red-500/15 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons at bottom */}
                  <div className="flex gap-2 pt-4 border-t border-red-500/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all text-sm font-medium"
                        aria-label="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all text-sm font-medium"
                        aria-label="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </>
            );

            return (
              <div
                key={index}
                className="group relative"
              >
                {projectLink ? (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {/* Glass Card */}
                    <div className="relative h-full bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-2 cursor-pointer">
                      {CardContent}
                    </div>
                  </a>
                ) : (
                  /* Glass Card - Not clickable if no link */
                  <div className="relative h-full bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-2">
                    {CardContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
