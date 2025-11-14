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

export default function Footer() {
  const links = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/AhmedElnagarUU',
      color: 'hover:text-red-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-elnagar-25561b262',
      color: 'hover:text-red-400'
    },
    {
      icon: X,
      label: 'X',
      url: 'https://x.com/AhmedE40618',
      color: 'hover:text-red-400'
    },
    {
      icon: PinterestIcon,
      label: 'Pinterest',
      url: 'https://www.pinterest.com/ahmedelnagaruu/',
      color: 'hover:text-red-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:ahmedElnagaruu@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      url: '#',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer id="contact" className="relative bg-slate-900 border-t border-red-500/20 mt-12 starry-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-white">Ahmed Youssry</span>
            </div>
            <p className="text-slate-400 text-sm">
              Full Stack Developer passionate about building clean, scalable, and maintainable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-red-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-red-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-slate-400 hover:text-red-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-red-400 transition-colors text-sm">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${link.color} transition-colors`}
                    aria-label={link.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-red-500/20 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ahmed Youssry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
