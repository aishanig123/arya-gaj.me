const SectionNumber = ({ number }) => {
  return (
    <div className="absolute left-4 sm:left-8 top-8 flex items-center gap-3 pointer-events-none z-10">
      <span className="text-xs font-mono text-gray-400 tracking-wider" style={{ fontFamily: 'ui-monospace, monospace' }}>
        {String(number).padStart(2, '0')}
      </span>
      <div className="w-8 sm:w-12 h-px bg-gray-300"></div>
    </div>
  );
};

export default SectionNumber;
