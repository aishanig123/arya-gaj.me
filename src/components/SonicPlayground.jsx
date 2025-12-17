import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const SonicPlayground = ({ onParametersChange }) => {
  const [pitch, setPitch] = useState(50);
  const [turbulence, setTurbulence] = useState(30);
  const [sentiment, setSentiment] = useState(50);

  useEffect(() => {
    if (onParametersChange) {
      onParametersChange({
        pitch: 50,
        turbulence: 30,
        sentiment: 50
      });
    }
  }, [onParametersChange]);

  const handleParameterChange = (param, value) => {
    if (param === 'pitch') setPitch(value);
    if (param === 'turbulence') setTurbulence(value);
    if (param === 'sentiment') setSentiment(value);

    if (onParametersChange) {
      onParametersChange({
        pitch: param === 'pitch' ? value : pitch,
        turbulence: param === 'turbulence' ? value : turbulence,
        sentiment: param === 'sentiment' ? value : sentiment
      });
    }
  };

  const getEmotionLabel = () => {
    const turbLevel = turbulence > 60 ? 'high' : turbulence < 40 ? 'low' : 'moderate';
    const sentLevel = sentiment > 60 ? 'positive' : sentiment < 40 ? 'negative' : 'neutral';
    
    if (turbLevel === 'high' && sentLevel === 'negative') return 'Anxious • Stressed';
    if (turbLevel === 'high' && sentLevel === 'positive') return 'Excited • Energetic';
    if (turbLevel === 'low' && sentLevel === 'positive') return 'Calm • Content';
    if (turbLevel === 'low' && sentLevel === 'negative') return 'Melancholic • Subdued';
    return 'Balanced • Neutral';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard>
        <header className="mb-12">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Affective Computing Lab
          </h2>
          <div className="w-16 h-px bg-black"></div>
          <p className="text-lg text-gray-600 mt-6 font-normal max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Synthesize emotional states through audio parameters. Watch how speech patterns manifest visually in the background.
          </p>
        </header>

        <div className="space-y-8">
          <div className="glass-ice-strong rounded-lg p-8 text-center border border-black/5">
            <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Synthesized Emotion
            </p>
            <p className="text-2xl font-semibold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
              {getEmotionLabel()}
            </p>
          </div>

          <div className="glass-ice rounded-lg p-8 space-y-10 border border-black/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
                Audio Parameters
              </h3>
              <div className="flex gap-2">
                <div className="w-1 h-4 bg-black/20"></div>
                <div className="w-1 h-4 bg-black/20"></div>
                <div className="w-1 h-4 bg-black/20"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-black uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Pitch
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">0</span>
                  <span className="text-sm font-semibold text-black font-mono">{pitch}</span>
                  <span className="text-xs text-gray-400 font-mono">100</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={pitch}
                  onChange={(e) => handleParameterChange('pitch', Number(e.target.value))}
                  className="w-full slider"
                />
                <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none">
                  <div className="h-full bg-black/5" style={{ width: `${pitch}%` }}></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                Controls wave frequency and speed
              </p>
            </div>

            <div className="border-t border-black/10"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-black uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Turbulence
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">0</span>
                  <span className="text-sm font-semibold text-black font-mono">{turbulence}</span>
                  <span className="text-xs text-gray-400 font-mono">100</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={turbulence}
                  onChange={(e) => handleParameterChange('turbulence', Number(e.target.value))}
                  className="w-full slider"
                />
                <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none">
                  <div className="h-full bg-black/5" style={{ width: `${turbulence}%` }}></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                High values create jagged, rapid movements
              </p>
            </div>

            <div className="border-t border-black/10"></div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-black uppercase tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sentiment
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">NEG</span>
                  <span className="text-sm font-semibold text-black font-mono">
                    {sentiment < 40 ? 'NEG' : sentiment > 60 ? 'POS' : 'NEU'}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">POS</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sentiment}
                  onChange={(e) => handleParameterChange('sentiment', Number(e.target.value))}
                  className="w-full slider"
                />
                <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none">
                  <div className="h-full bg-black/5" style={{ width: `${sentiment}%` }}></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
                Negative: darker tones • Positive: lighter tones
              </p>
            </div>
          </div>

          <div className="glass-ice rounded-lg p-6 border border-black/5">
            <p className="text-sm text-gray-600 leading-relaxed font-normal text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="font-semibold text-black">Affective Computing</span> analyzes how speech patterns reveal emotional states. 
              Adjust these parameters to see how different emotional signatures manifest as visual patterns in the background fluids.
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default SonicPlayground;
