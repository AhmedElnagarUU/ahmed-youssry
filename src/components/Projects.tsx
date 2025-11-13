import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Qemat Al Rafeat – Equipment Rental Website',
      description: 'A website for a Saudi client\'s equipment rental business, built with Next.js in Arabic & English. Features bilingual support, equipment catalog, and rental management.',
      tech: ['Next.js', 'React', 'TypeScript', 'Arabic/English'],
      github: 'https://github.com/AhmedElnagarUU/qemat',
      live: 'https://qemat-alrafeat.com/en',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Clean E-commerce API',
      description: 'Backend for an e-commerce platform using Clean Architecture, with AWS S3 for image storage and modular design for event handling. Scalable and maintainable codebase.',
      tech: ['Node.js', 'Clean Architecture', 'AWS S3', 'TypeScript'],
      github: 'https://github.com/AhmedElnagarUU/clean-ecomarce-API',
      live: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
      title: 'EVO Luxury – Construction & Interior Design',
      description: 'Professional WordPress website for a Saudi construction and interior design company. Highlights services, portfolio, and previous projects with a clean, modern design.',
      tech: ['WordPress', 'PHP', 'Custom Theme', 'Responsive Design'],
      github: null,
      live: 'https://evoluxury.co/en/home/',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop'
    },
    {
      title: 'DHI Design – Next.js Portfolio Website',
      description: 'A personal/project portfolio website built with Next.js, showcasing design works in a modern and responsive layout. Clean UI with smooth animations.',
      tech: ['Next.js', 'React', 'TypeScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/DHI-design',
      live: 'https://ahmedelnagaruu.github.io/DHI-design/',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
    },
    {
      title: 'Bakery – Frontend Website',
      description: 'A responsive, visually appealing website for a bakery, built to showcase products and services. Modern design with smooth user experience.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
      github: 'https://github.com/AhmedElnagarUU/Bakery',
      live: 'https://ahmedelnagaruu.github.io/Bakery/',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden starry-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-purple-500/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
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
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
