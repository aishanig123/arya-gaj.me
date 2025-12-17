const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Résumé' },
    { id: 'projects', label: 'Projects' },
  ];

  const externalLinks = [
    { href: 'https://github.com/arya-gaj/', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/arya-gaj/', label: 'LinkedIn' },
    { href: 'https://orcid.org/0009-0009-7141-8707/', label: 'ORCiD' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`
                  px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                  ${
                    activePage === item.id
                      ? 'text-black bg-gray-50'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50/50'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors duration-300 text-sm font-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
