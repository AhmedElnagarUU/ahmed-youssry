import { Code2, Target, Zap, Users } from 'lucide-react';

export default function ProfessionalSummary() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Following Clean Architecture principles for maintainable and scalable systems'
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Committed to delivering high-quality software with attention to detail'
    },
    {
      icon: Zap,
      title: 'Efficient',
      description: 'Organized workflow ensuring timely delivery of projects'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach working with like-minded developers'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 starry-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ahmed Youssry</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Experience</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a Full Stack Developer with <span className="text-blue-400 font-semibold">2 years</span> of professional experience building web applications from planning to deployment. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              I specialize in creating clean, scalable, and maintainable systems following Clean Architecture principles, with a strong understanding of UI/UX design and color systems to make interfaces both functional and visually clear.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am organized, efficient, and committed to delivering high-quality software.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I am seeking opportunities to join a development team or contribute to a professional project where I can bring value and collaborate with like-minded developers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-purple-500/50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
