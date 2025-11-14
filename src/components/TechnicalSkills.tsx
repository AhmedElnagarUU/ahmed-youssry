import { 
  Server, 
  Monitor, 
  Database, 
  Cloud, 
  Layers 
} from 'lucide-react';

export default function TechnicalSkills() {
  const skills = [
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Node.js, Express.js, TypeScript, RESTful APIs, JWT Authentication',
      technologies: ['Node.js', 'Express', 'TypeScript', 'REST APIs', 'JWT'],
    },
    {
      icon: Monitor,
      title: 'Frontend',
      description: 'Next.js, React, EJS',
      technologies: ['Next.js', 'React', 'EJS', 'TypeScript'],
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'MongoDB, PostgreSQL, Prisma',
      technologies: ['MongoDB', 'PostgreSQL', 'Prisma', 'SQL'],
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      description: 'Cloud infrastructure, server administration, containerization, security, deployment automation',
      technologies: ['Cloud', 'Linux', 'Docker', 'CI/CD'],
    },
    {
      icon: Layers,
      title: 'Architecture & Design',
      description: 'Clean Architecture, system design, maintainable code structures, UI/UX design principles',
      technologies: ['Clean Architecture', 'System Design', 'UI/UX', 'Design Patterns'],
    }
  ];

  return (
    <section id="skills" className="relative py-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full stack development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-2 overflow-hidden">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center group-hover:border-red-500/60 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-500">
                        <Icon className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {skill.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-300 text-xs rounded-lg font-medium group-hover:border-red-500/40 group-hover:bg-red-500/15 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
