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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Clean E-commerce API',
      subtitle: 'Backend Architecture',
      description: 'Backend for an e-commerce platform using Clean Architecture, with AWS S3 for image storage and modular design for event handling. Scalable and maintainable codebase.',
      tech: ['Node.js', 'Clean Architecture', 'AWS S3', 'TypeScript'],
      github: 'https://github.com/AhmedElnagarUU/clean-ecomarce-API',
      live: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
      title: 'EVO Luxury',
      subtitle: 'Construction & Interior Design',
      description: 'Professional WordPress website for a Saudi construction and interior design company. Highlights services, portfolio, and previous projects with a clean, modern design.',
      tech: ['WordPress', 'PHP', 'Custom Theme', 'Responsive Design'],
      github: null,
      live: 'https://evoluxury.co/en/home/',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop'
    },
    {
      title: 'DHI Design',
      subtitle: 'Next.js Portfolio Website',
      description: 'A personal/project portfolio website built with Next.js, showcasing design works in a modern and responsive layout. Clean UI with smooth animations.',
      tech: ['Next.js', 'React', 'TypeScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/DHI-design',
      live: 'https://ahmedelnagaruu.github.io/DHI-design/',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
    },
    {
      title: 'Bakery',
      subtitle: 'Frontend Website',
      description: 'A responsive, visually appealing website for a bakery, built to showcase products and services. Modern design with smooth user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/Bakery',
      live: 'https://ahmedelnagaruu.github.io/Bakery/',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/20 group-hover:to-red-600/10 transition-all duration-500"></div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
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
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-300 text-xs rounded-lg font-medium group-hover:border-red-500/40 group-hover:bg-red-500/15 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  {(project.live || project.github) && (
                    <div className="mt-5 pt-5 border-t border-red-500/10">
                      <a
                        href={project.live || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
