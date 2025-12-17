import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const About = () => {
  const services = [
    {
      title: "Representation",
      description: "Learning compact and robust representations from audio, text, and interaction signals to support real-world decision-making.",
      span: "col-span-1 md:col-span-2"
    },
    {
      title: "Interpretability",
      description: "Developing models and analysis methods that clarify how learning systems behave, with emphasis on reliability and generalization.",
      span: "col-span-1"
    },
    {
      title: "Foundations",
      description: "Exploring principled approaches to learning, including feature selection, representation efficiency, and theoretical insights that improve model performance and trust.",
      span: "col-span-1"
    },
    {
      title: "Interaction",
      description: "Studying how intelligent systems support human decision-making by modeling behavior, context, and uncertainty in practical environments.",
      span: "col-span-1 md:col-span-2"
    }
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
    hidden: { opacity: 0, y: 30 },
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard>
        <header className="mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            About
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </header>

        <section className="space-y-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 text-lg leading-relaxed font-normal" style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Aryaman Gajrani is a final-year B.E. student in Information Technology at Chaitanya Bharathi Institute of Technology, Hyderabad, India. His interest in AI grew from noticing how many digital systems fail to understand human intent, emotion, and context, often leading to friction rather than support. This gap between human needs and machine behavior motivates his work, leading him to think beyond accuracy and efficiency toward systems that feel attentive to real users.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 text-lg leading-relaxed font-normal" style={{ fontFamily: 'Inter, sans-serif' }}
          >
            At the core of his motivation is a desire to understand the deeper reasons behind human actions rather than surface-level outcomes alone. He is drawn to uncovering causes and structure within human signals to inform more thoughtful system design. This perspective shapes his aim to build AI that is grounded in human reality and guided by insight rather than assumption.
          </motion.p>
        </section>

        <section className="mt-16">
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-black tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Interests
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glass-ice rounded-lg p-6 group cursor-pointer transition-all duration-300 hover:glass-ice-strong border border-black/5 ${service.span}`}
              >
                <h4 className="text-xl font-semibold mb-3 text-black group-hover:text-gray-800 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </GlassCard>
    </motion.div>
  );
};

export default About;
