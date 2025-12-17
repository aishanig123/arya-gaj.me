const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-ice-strong rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4 text-xs font-mono text-gray-600" style={{ fontFamily: 'ui-monospace, monospace' }}>
          <span>© {currentYear} Aryaman Gajrani</span>
          <span className="text-gray-400">•</span>
          <span>Felix qui potuit rerum cognoscere causas</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

