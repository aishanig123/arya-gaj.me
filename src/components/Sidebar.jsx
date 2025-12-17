import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="glass-roman rounded-3xl p-6 md:p-8 mb-6 md:mb-0">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(255, 235, 215, 0.3)' }}>
          <img
            src="/assets/images/my-avatar.png"
            alt="Aryaman Gajrani"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23fef5e7" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="50" text-anchor="middle" dominant-baseline="middle" fill="%23d4a574"%3EAG%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
        <div>
          <h1 className="text-2xl font-light text-gray-800 tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Aryaman Gajrani
          </h1>
          <p className="text-sm text-gray-600 mt-1 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Speech Processing & Audio Intelligence</p>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full glass-roman-strong rounded-xl p-3 mb-4 text-gray-700 hover:glass-roman-strong transition-all duration-300 flex items-center justify-between text-sm font-light"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <span>{isExpanded ? 'Hide' : 'Show'} Contacts</span>
        <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isExpanded && (
        <div className="space-y-4 animate-fadeIn">
          <div className="border-t" style={{ borderColor: 'rgba(255, 235, 215, 0.3)' }}></div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass-roman-strong rounded-lg flex items-center justify-center text-gray-700">
                ✉
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                <a href="mailto:arya-gaj@proton.me" className="text-gray-700 hover:text-d4a574 transition-colors text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  arya-gaj@proton.me
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass-roman-strong rounded-lg flex items-center justify-center text-gray-700">
                📱
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Phone</p>
                <a href="tel:+917337537670" className="text-gray-700 hover:text-d4a574 transition-colors text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  +91 733-753-7670
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass-roman-strong rounded-lg flex items-center justify-center text-gray-700">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Location</p>
                <p className="text-gray-700 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
