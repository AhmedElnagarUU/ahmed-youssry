'use client';

export default function Header() {
  return (
    <header 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/1200x/34/ce/d2/34ced28077ef3b3c8f4fd932a9b422eb.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-950/90"></div>

      {/* Large Glowing Circle Graphic at Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 glowing-circle"></div>
        <div className="absolute inset-8 rounded-full border border-purple-500/40 glowing-circle" style={{ animationDelay: '0.5s' } as React.CSSProperties}></div>
        <div className="absolute inset-16 rounded-full border border-blue-400/30 glowing-circle" style={{ animationDelay: '1s' } as React.CSSProperties}></div>
        
        {/* Center glow */}
        <div className="absolute inset-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-blue-600/40 blur-2xl glowing-circle"></div>
        
        {/* Light particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full blur-md"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Supercharge Your Web Application with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Expert Development
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Building the right way, with the most user-friendly and scalable solutions the market has to offer. 
          Frictionless development at your fingertips with Ahmed Youssry - Full Stack Developer.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={() => {
              const element = document.getElementById('skills');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-8 py-4 rounded-xl font-semibold text-white bg-slate-900/40 backdrop-blur-sm border-2 border-blue-500 hover:border-blue-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.5)]"
          >
            Our Services
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-8 py-4 rounded-xl font-semibold text-white bg-slate-900/40 backdrop-blur-sm border-2 border-blue-500 hover:border-blue-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7),0_0_60px_rgba(59,130,246,0.5)]"
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
}
