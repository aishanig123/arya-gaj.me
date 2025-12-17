const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={`
        glass-ice
        rounded-lg p-8 md:p-10
        transition-all duration-300
        hover:glass-ice-strong
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
