import { Code2, Target, Zap, Users, Settings, Sparkles, Briefcase, Lightbulb, Rocket } from 'lucide-react';
import SquareGridBackground from './SquareGridBackground';

export default function ProfessionalSummary() {
  const experienceCards = [
    {
      title: 'Professional Experience',
      subtitle: 'Full Stack Developer',
      content: '2 years of professional experience building web applications from planning to deployment.',
      highlight: 'Clean Architecture'
    },
    {
      title: 'My Approach',
      subtitle: 'Quality & Efficiency',
      content: 'Organized, efficient, and committed to delivering high-quality software with attention to detail.',
      highlight: 'Best Practices'
    },
    {
      title: 'Collaboration',
      subtitle: 'Team Player',
      content: 'Seeking opportunities to join development teams and contribute to professional projects.',
      highlight: 'Team Work'
    }
  ];

  const features = [
    {
      icon: Code2,
      name: 'Clean Code',
      description: 'Clean Architecture principles'
    },
    {
      icon: Target,
      name: 'Quality Focus',
      description: 'High-quality software delivery'
    },
    {
      icon: Zap,
      name: 'Efficient',
      description: 'Timely project delivery'
    },
    {
      icon: Users,
      name: 'Team Player',
      description: 'Collaborative approach'
    },
    {
      icon: Briefcase,
      name: 'Professional',
      description: '2+ years experience'
    },
    {
      icon: Rocket,
      name: 'Scalable',
      description: 'Maintainable systems'
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Grid Background */}
      <SquareGridBackground opacity={0.08} squareSize={32} gap={16} />
      
      {/* Glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-red-400 rounded-full blur-sm opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-500 rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-red-400 rounded-full blur-sm opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16 px-2">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400 mb-4">
            <span>Introducing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 break-words">
            Ahmed Youssry
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Full Stack Developer passionate about building clean, scalable, and maintainable web applications.
          </p>
        </div>

        {/* Three Main Cards - Like Login Forms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-20 w-full">
          {experienceCards.map((card, index) => (
            <div
              key={index}
              className={`group relative w-full ${index === 1 ? 'md:scale-105 z-10' : ''}`}
            >
              {/* Translucent Glass Card */}
              <div className="relative bg-gradient-to-br from-slate-800/30 via-slate-800/20 to-slate-900/30 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.2)] overflow-hidden">
                {/* Icon at top */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40"></div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center break-words">
                  {card.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-sm text-red-400/80 mb-4 text-center font-medium">
                  {card.subtitle}
                </p>
                
                {/* Content */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4 text-center break-words">
                  {card.content}
                </p>
                
                {/* Highlight Badge */}
                <div className="flex justify-center">
                  <span className="px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-300 text-xs rounded-full font-medium break-words">
                    {card.highlight}
                  </span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl overflow-hidden"></div>
              </div>
            </div>
          ))}
        </div>

      
        {/* Features Section - "All-in-one programming toolkit." */}
        <div className="text-center mb-12 px-2 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 break-words">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center w-full"
                >
                  {/* Icon Square */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-red-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 flex-shrink-0">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                  
                  {/* Feature Name */}
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 break-words text-center">
                    {feature.name}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-400 text-center break-words px-1">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
