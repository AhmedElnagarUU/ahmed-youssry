import { 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  Globe
} from 'lucide-react';

// Pinterest Icon Component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.72 8.2 6.58 9.7-.09-.79-.17-2.01.03-2.87l1.24-5.26s-.3-.6-.3-1.49c0-1.39.81-2.43 1.81-2.43.85 0 1.26.64 1.26 1.41 0 .85-.54 2.12-.82 3.3-.23.98.49 1.78 1.46 1.78 1.75 0 3.1-1.85 3.1-4.52 0-2.36-1.7-4.01-4.13-4.01-2.81 0-4.46 2.11-4.46 4.29 0 .84.32 1.74.73 2.23.08.1.09.19.07.29l-.28 1.11c-.04.16-.14.2-.33.12-1.24-.58-2.02-2.4-2.02-3.86 0-3.15 2.29-6.05 6.59-6.05 3.46 0 6.15 2.46 6.15 5.75 0 3.43-2.16 6.19-5.15 6.19-1.01 0-1.96-.53-2.28-1.23l-.62 2.36c-.22.87-.82 1.96-1.22 2.63.92.28 1.9.44 2.92.44 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
);

export default function FollowMe() {
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/AhmedElnagarUU',
      description: 'Check out my code repositories',
      color: 'from-slate-700 to-slate-800'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-elnagar-25561b262',
      description: 'Connect with me professionally',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: X,
      name: 'X (Twitter)',
      url: 'https://x.com/AhmedE40618',
      description: 'Follow my updates',
      color: 'from-slate-800 to-slate-900'
    },
    {
      icon: PinterestIcon,
      name: 'Pinterest',
      url: 'https://www.pinterest.com/ahmedelnagaruu/',
      description: 'Explore my design inspirations',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:ahmedElnagaruu@gmail.com',
      description: 'Get in touch with me',
      color: 'from-slate-600 to-slate-700'
    },
    {
      icon: Globe,
      name: 'Portfolio',
      url: '#',
      description: 'View my work',
      color: 'from-slate-700 to-slate-800'
    }
  ];

  return (
    <section id="follow-me" className="relative py-24 overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Follow <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect with me on social media and stay updated with my latest work
          </p>
        </div>

        {/* Social Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target={social.url !== '#' ? "_blank" : undefined}
                rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                className="group relative block"
              >
                {/* Glass Card */}
                <div className="relative bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:-translate-y-2 overflow-hidden h-full">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center group-hover:border-red-500/60 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-10 h-10 text-red-400" />
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {social.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {social.description}
                    </p>
                  </div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl"></div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}


