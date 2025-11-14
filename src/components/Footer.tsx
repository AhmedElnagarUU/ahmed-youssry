import { 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  Globe
} from 'lucide-react';

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
      icon: Mail,
      label: 'Email',
      url: 'mailto:ahmed@example.com',
      color: 'hover:text-red-400'
    },
    {
      icon: X,
      label: 'X',
      url: 'https://x.com/AhmedE40618',
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
