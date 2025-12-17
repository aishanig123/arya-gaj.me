import { useEffect, useState } from 'react';

const PillNavbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('landing');

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const elementRect = element.getBoundingClientRect();
          const relativeTop = elementRect.top - containerRect.top + scrollContainer.scrollTop;

          if (scrollPosition >= relativeTop && scrollPosition < relativeTop + element.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const scrollContainer = document.querySelector('.scroll-container');
    const element = document.getElementById(id);
    if (scrollContainer && element) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const relativeTop = elementRect.top - containerRect.top + scrollContainer.scrollTop;
      
      scrollContainer.scrollTo({
        top: relativeTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = sections.filter(s => s.showInNav);

  const externalLinks = [
    { href: 'https://github.com/arya-gaj/', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/arya-gaj/', label: 'LinkedIn' },
    { href: 'https://orcid.org/0009-0009-7141-8707/', label: 'ORCiD' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-ice-strong rounded-full px-8 py-4 flex items-center gap-6 shadow-lg">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium
                ${activeSection === item.id ? 'shadow-sm' : ''}
              `}
              style={{
                color: activeSection === item.id ? '#000000' : '#666666',
                backgroundColor: activeSection === item.id ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="w-px h-6 bg-gray-300"></div>
        <div className="flex items-center space-x-4">
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors duration-300 hover:text-black"
              style={{ color: '#666666', fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PillNavbar;
