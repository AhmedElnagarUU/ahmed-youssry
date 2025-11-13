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
    },
    {
      icon: Monitor,
      title: 'Frontend',
      description: 'Next.js, React, EJS',
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'MongoDB, PostgreSQL, Prisma',
    },
    {
      icon: Cloud,
      title: 'DevOps & Deployment',
      description: 'AWS, VPS/Linux hosting, Docker, SSL, domain setup, full website deployment',
    },
    {
      icon: Layers,
      title: 'Architecture & Design',
      description: 'Clean Architecture, system design, maintainable code structures, UI/UX design principles',
      fullWidth: true
    }
  ];

  return (
    <section id="skills" className="relative py-20 overflow-hidden starry-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across the full stack development spectrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all ${skill.fullWidth ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
