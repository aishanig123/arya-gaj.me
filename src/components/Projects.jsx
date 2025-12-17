import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import GlassCard from './GlassCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  const projects = [
    {
      title: "Steal His Look Locally",
      description: "A lightweight system analyzing short-form videos in real time to identify fashion products using vision-NLP locally.",
      tags: ["Python", "PyTorch", "OpenCV"],
      link: "https://github.com/arya-gaj/steal-his-look-locally"
    },
    {
      title: "Clubcard Points Bandit Labs",
      description: "A generative AI tool enabling advertisers to autonomously create guideline-compliant retail media creatives across formats.",
      tags: ["Python", "PyTorch", "FastAPI"],
      link: "http://github.com/arya-gaj/clubcard-points-bandit-labs"
    },
    {
      title: "Neural Audio Synthesis",
      description: "Generative model for creating synthetic speech with controllable emotional characteristics.",
      tags: ["PyTorch", "GANs", "Audio Generation"],
      link: "#",
      comingSoon: true
    },
    {
      title: "Audio Forensics Platform",
      description: "Blockchain-based system for verifying audio authenticity and detecting deepfake audio.",
      tags: ["Blockchain", "Audio Analysis", "Security"],
      link: "#",
      comingSoon: true
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div>
      <GlassCard>
        <header className="mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Projects
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </header>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-ice rounded-lg p-6 group cursor-pointer transition-all duration-300 hover:glass-ice-strong border border-black/5 relative flex flex-col min-h-[200px]"
            >
              {project.comingSoon ? (
                <div className="flex items-center justify-center h-full">
                  <span className="px-4 py-2 rounded text-sm font-medium text-gray-600 bg-gray-100 border border-black/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Coming Soon
                  </span>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-gray-800 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 rounded text-xs glass-ice text-gray-700 font-medium border border-black/5"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 hover:text-black transition-colors ml-4 flex-shrink-0"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </GlassCard>
    </div>
  );
};

export default Projects;
