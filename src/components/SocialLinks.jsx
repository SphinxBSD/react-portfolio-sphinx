import { useState } from 'react';
import { Github, Linkedin, Twitter, Globe, Code, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const [hoveredStar, setHoveredStar] = useState(null);

  const socialStars = [
    { 
      icon: Github, 
      href: 'https://github.com/SphinxBSD', 
      label: 'GitHub',
      position: 'top-[20%] left-[15%]',
      size: 'w-16 h-16',
      delay: '0ms',
      orbitDelay: '0s'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/augusto-rios-375022204/', 
      label: 'LinkedIn',
      position: 'top-[15%] right-[20%]',
      size: 'w-14 h-14',
      delay: '150ms',
      orbitDelay: '0.5s'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/Sphinx_AR', 
      label: 'X (Twitter)',
      position: 'top-[50%] left-[10%]',
      size: 'w-12 h-12',
      delay: '300ms',
      orbitDelay: '1s'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/sphinx_ar/', 
      label: 'Instagram',
      position: 'bottom-[25%] left-[25%]',
      size: 'w-14 h-14',
      delay: '450ms',
      orbitDelay: '1.5s'
    },
    { 
      icon: Globe, 
      href: 'https://react-portfolio-sphinx-git-main-sphinxars-projects.vercel.app/', 
      label: 'Portfolio',
      position: 'top-[45%] right-[15%]',
      size: 'w-16 h-16',
      delay: '600ms',
      orbitDelay: '2s'
    },
    { 
      icon: Code, 
      href: '', 
      label: 'Projects',
      position: 'bottom-[20%] right-[25%]',
      size: 'w-12 h-12',
      delay: '750ms',
      orbitDelay: '2.5s'
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-b-[0.9rem] relative overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Center glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#EA9B0D]/20 via-[#F1AD05]/10 to-transparent rounded-full blur-3xl" />

      {/* Constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA9B0D" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F1AD05" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EA9B0D" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Connection lines between stars */}
        <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '3s' }} />
        <line x1="80%" y1="15%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
        <line x1="10%" y1="50%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <line x1="85%" y1="45%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '4.5s' }} />
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '5s' }} />
        <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '5.5s' }} />
      </svg>

      {/* Central title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#EA9B0D] to-[#F1AD05] bg-clip-text text-transparent mb-2">
          Connect Across
        </h3>
        <p className="text-gray-500 text-sm">The Digital Universe</p>
      </div>

      {/* Social media stars */}
      {socialStars.map((star, index) => {
        const Icon = star.icon;
        const isHovered = hoveredStar === index;
        
        return (
          <div
            key={index}
            className={`absolute ${star.position} transition-all duration-700 ease-out`}
            style={{
              animation: `fadeInStar 0.8s ease-out ${star.delay} both, float 6s ease-in-out infinite`,
              animationDelay: `${star.delay}, ${star.orbitDelay}`,
            }}
          >
            <a
              href={star.href}
              aria-label={star.label}
              onMouseEnter={() => setHoveredStar(index)}
              onMouseLeave={() => setHoveredStar(null)}
              className={`${star.size} flex items-center justify-center rounded-full relative group cursor-pointer transition-all duration-300`}
            >
              {/* Outer glow ring */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#EA9B0D] to-[#F1AD05] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md ${isHovered ? 'animate-pulse' : ''}`} />
              
              {/* Star shape background */}
              <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}>
                <svg viewBox="0 0 51 48" className="w-full h-full">
                  <path
                    d="M25.5 0L31.5 18.5H51L35.5 30L41.5 48L25.5 36L9.5 48L15.5 30L0 18.5H19.5L25.5 0Z"
                    fill="url(#starGradient)"
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={isHovered ? '#F1AD05' : '#EA9B0D'} />
                      <stop offset="100%" stopColor={isHovered ? '#EA9B0D' : '#F1AD05'} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Icon */}
              <Icon className={`relative z-10 text-black transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} size={star.size === 'w-16 h-16' ? 24 : star.size === 'w-14 h-14' ? 20 : 18} />
            </a>
            
            {/* Label always visible */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
              <span className="text-white text-xs font-medium drop-shadow-lg">{star.label}</span>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes fadeInStar {
          from {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;