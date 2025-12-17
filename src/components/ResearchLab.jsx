import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const ResearchLab = () => {
  const papers = [
    {
      year: '2025',
      title: 'Spatial Neural Networks for Responsive Domestic Energy Regulation',
      authors: 'Aryaman Gajrani, Laksh Jain, Gaurav Keesari, and Dr. Sirisha Alamanda',
      venue: 'Manuscript in Preparation',
      link: '#',
      supportedByGrant: true
    },
    {
      year: '2025',
      title: 'Unified Visual Transformer for Complex Indic Script Understanding',
      authors: 'Aryaman Gajrani, Kaushik Boddula, Nachiketh Gade, and Dr. Sirisha Alamanda',
      venue: 'Work in Progress',
      link: '#'
    },
    {
      year: '2025',
      title: 'Deep Learning Paradigm for Early Neurodegenerative Disease Assessment',
      authors: 'Aryaman Gajrani, Mohammed Muqeet, and Dr. Sirisha Alamanda',
      venue: 'Poster Presentation, CBIT 6th Research Day',
      link: 'https://drive.google.com/file/d/16D2exiifqjh8LojSyE1fdTMy3yfpDX5n/view?usp=sharing'
    },
    {
      year: '2025',
      title: 'Probabilistic Attention Mechanisms for Robust Neural Speech Recognition',
      authors: 'Aryaman Gajrani and Akash Mondal',
      venue: 'Work in Progress',
      link: '#',
      supportedByGrant: true
    },
    {
      year: '2025',
      title: 'Listening Beyond The Labels',
      authors: 'Aryaman Gajrani',
      venue: 'Preprint (bioRxiv 2025.07.01.661595)',
      link: 'https://www.biorxiv.org/content/10.1101/2025.07.01.661595v1'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard>
        <header className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Research
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-black/10"></div>

          <div className="space-y-12">
            {papers.map((paper, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-20"
              >
                <div className="absolute left-4 top-2 w-8 h-8 rounded-full glass-ice-strong flex items-center justify-center border border-black/10">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>

                <div className="glass-ice rounded-lg p-6 hover:glass-ice-strong transition-all duration-300 border border-black/5">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-semibold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {paper.year}
                    </span>
                    <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {paper.venue}
                    </span>
                  </div>
                  {paper.supportedByGrant && (
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-xs font-medium text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Supported by Grants
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-black mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {paper.authors}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {paper.description}
                  </p>
                  <a
                    href={paper.link}
                    className="text-sm font-semibold text-black hover:text-gray-700 transition-colors inline-flex items-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Read Paper →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

export default ResearchLab;
