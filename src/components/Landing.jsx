const Landing = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center space-y-10 animate-fadeIn w-full">
        <div className="space-y-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Aryaman Gajrani
          </h1>
          <div className="w-24 h-px bg-black mx-auto"></div>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Multimodal Explainable AI for Human-Computer Interaction
          </p>
        </div>

        <div className="glass-ice rounded-lg p-8 md:p-12 mt-14 max-w-2xl mx-auto border border-black/5">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
            His research explores how AI interprets human behavior to build systems that act with genuine empathy. This portfolio demonstrates how these human-centric insights translate into scalable, high-impact industrial solutions.
          </p>
        </div>

        <div className="mt-20 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-black/20 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-black/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
