import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Resume = () => {
  const skills = [
    'Machine Learning',
    'Deep Learning',
    'Representation Learning',
    'Signal Processing',
    'Speech Processing',
    'Audio Analysis',
    'Natural Language',
    'Generative AI',
    'Emotion Recognition',
    'Explainable AI',
    'Human-Centered',
    'Data Provenance',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard>
        <header className="mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Résumé
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </header>

        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <a
              href="https://docs.google.com/document/d/1lDexqeJFeLoX0bnzexVo3iJmqiZc_pCp/edit?usp=sharing&ouid=109558952494515266103&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-10 py-4
                glass-ice-strong
                rounded-lg
                font-semibold
                hover:glass-ice-strong
                transition-all duration-300
                shadow-lg
                hover:scale-105
                border border-black/10
              "
              style={{ color: '#000000', fontFamily: 'Inter, sans-serif' }}
            >
              View Full Résumé →
            </a>
          </motion.div>

          <div className="mt-16 space-y-8">
            <h3 className="text-3xl font-semibold text-black tracking-tight mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Core Expertise
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-ice rounded-lg p-4 text-gray-700 font-normal hover:glass-ice-strong transition-all duration-300 border border-black/5 text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </GlassCard>
    </motion.div>
  );
};

export default Resume;
