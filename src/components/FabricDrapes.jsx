import { useEffect, useRef } from 'react';

const FabricDrapes = ({ scrollProgress = 0, affectiveParams = null }) => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawFluid = (x, baseAmplitude, baseFrequency, phase, opacity, scrollOffset = 0) => {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      
      const segments = 200;
      
      let amplitude = baseAmplitude;
      let frequency = baseFrequency;
      let speedMultiplier = 1;
      
      if (affectiveParams) {
        const pitchFactor = affectiveParams.pitch / 100;
        frequency = baseFrequency * (0.5 + pitchFactor * 1.5);
        speedMultiplier = 0.5 + pitchFactor * 1.5;
        
        const turbulenceFactor = affectiveParams.turbulence / 100;
        amplitude = baseAmplitude * (0.7 + turbulenceFactor * 1.3);
      }
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const y = canvas.height * t;
        
        const time = timeRef.current * speedMultiplier;
        
        const wave1 = Math.sin(time * 0.2 + phase + t * frequency * 2 + scrollOffset) * amplitude;
        const wave2 = Math.sin(time * 0.15 + phase * 1.5 + t * frequency * 3 + scrollOffset * 1.5) * amplitude * 0.5;
        const wave3 = Math.sin(time * 0.25 + phase * 0.7 + t * frequency * 1.5 + scrollOffset * 0.7) * amplitude * 0.3;
        
        let offsetX = wave1 + wave2 + wave3;
        
        if (affectiveParams && affectiveParams.turbulence > 30) {
          const turbulenceIntensity = (affectiveParams.turbulence - 30) / 70;
          const jagged1 = Math.sin(time * 1.5 + phase * 2 + t * frequency * 6) * amplitude * 0.2 * turbulenceIntensity;
          const jagged2 = Math.sin(time * 1.2 + phase * 3 + t * frequency * 9) * amplitude * 0.15 * turbulenceIntensity;
          offsetX += jagged1 + jagged2;
        }
        
        const currentX = x + offsetX;
        
        if (i === 0) {
          ctx.moveTo(currentX, y);
        } else {
          ctx.lineTo(currentX, y);
        }
      }
      
      const greyValue = affectiveParams 
        ? Math.round(150 - (affectiveParams.sentiment - 50) * 0.6)
        : 150;
      
      const baseOpacity = opacity * 0.4;
      
      const gradient = ctx.createLinearGradient(x - amplitude * 2, 0, x + amplitude * 2, canvas.height);
      gradient.addColorStop(0, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${baseOpacity * 0.4})`);
      gradient.addColorStop(0.5, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${baseOpacity * 0.7})`);
      gradient.addColorStop(1, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${baseOpacity * 0.4})`);
      
      ctx.strokeStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${baseOpacity * 0.5})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      timeRef.current += 0.01;
      
      const fluids = [
        {
          x: canvas.width * 0.15,
          amplitude: 60,
          frequency: 0.5,
          phase: 0,
          opacity: 0.25,
          scrollOffset: scrollProgress * Math.PI * 1.5
        },
        {
          x: canvas.width * 0.35,
          amplitude: 70,
          frequency: 0.4,
          phase: Math.PI / 3,
          opacity: 0.2,
          scrollOffset: scrollProgress * Math.PI * 1.2
        },
        {
          x: canvas.width * 0.55,
          amplitude: 65,
          frequency: 0.45,
          phase: Math.PI / 2,
          opacity: 0.22,
          scrollOffset: scrollProgress * Math.PI * 2
        },
        {
          x: canvas.width * 0.75,
          amplitude: 68,
          frequency: 0.42,
          phase: Math.PI,
          opacity: 0.2,
          scrollOffset: scrollProgress * Math.PI * 1.8
        },
        {
          x: canvas.width * 0.9,
          amplitude: 72,
          frequency: 0.48,
          phase: Math.PI * 1.5,
          opacity: 0.25,
          scrollOffset: scrollProgress * Math.PI * 2.2
        }
      ];
      
      fluids.forEach(fluid => {
        drawFluid(
          fluid.x,
          fluid.amplitude,
          fluid.frequency,
          fluid.phase,
          fluid.opacity,
          fluid.scrollOffset
        );
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [scrollProgress, affectiveParams]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default FabricDrapes;
