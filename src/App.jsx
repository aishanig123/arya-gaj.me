import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import FabricDrapes from './components/FabricDrapes';
import PillNavbar from './components/PillNavbar';
import Footer from './components/Footer';
import SectionNumber from './components/SectionNumber';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ResearchLab from './components/ResearchLab';
import SonicPlayground from './components/SonicPlayground';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [affectiveParams, setAffectiveParams] = useState(null);
  const scrollContainerRef = useRef(null);

  const sections = [
    { id: 'landing', label: 'Home', showInNav: true, number: 1 },
    { id: 'about', label: 'About', showInNav: true, number: 2 },
    { id: 'research', label: 'Research', showInNav: true, number: 3 },
    { id: 'projects', label: 'Projects', showInNav: true, number: 4 },
    { id: 'playground', label: 'Playground', showInNav: false, number: 5 },
    { id: 'resume', label: 'Résumé', showInNav: true, number: 5 },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerHeight = scrollContainer.clientHeight;
      const scrollHeight = scrollContainer.scrollHeight;
      const scrollTop = scrollContainer.scrollTop;
      const progress = Math.min(scrollTop / (scrollHeight - containerHeight), 1);
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAffectiveParamsChange = (params) => {
    setAffectiveParams(params);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <FabricDrapes scrollProgress={scrollProgress} affectiveParams={affectiveParams} />

      <div 
        ref={scrollContainerRef}
        className="scroll-container relative z-10 w-full h-full"
      >
        <PillNavbar sections={sections} />

        <section 
          id="landing" 
          className="relative flex items-center justify-center"
          style={{ 
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '80px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <SectionNumber number={1} />
          <Landing />
        </section>

        <section id="about" className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative">
          <SectionNumber number={2} />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
                <div className="lg:col-span-1"></div>
                <div className="lg:col-span-3">
                  <About />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="research" className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative">
          <SectionNumber number={3} />
          <div className="max-w-6xl mx-auto relative">
            <div className="pt-8">
              <ResearchLab />
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative">
          <SectionNumber number={4} />
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-8">
                <div className="lg:col-span-1"></div>
                <div className="lg:col-span-3">
                  <Projects />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="resume" className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 relative pb-32">
          <SectionNumber number={5} />
          <div className="max-w-6xl mx-auto relative">
            <div className="pt-8">
              <Resume />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
