# Personal Portfolio - Speech Processing & Audio Intelligence

A high-end portfolio website featuring glassmorphism design and an interactive neural audio waveform animation. Built with React, Tailwind CSS, and HTML5 Canvas.

## Features

### 🎨 Glassmorphism Design
- Semi-transparent floating panes with deep blur effects
- Thin glowing borders with purple/pink accents
- Smooth hover transitions and depth effects

### 🌊 Neural Audio Waveform Animation
- **Auto-playing background**: Thousands of particles forming a neural network-like waveform
- **Idle state**: Calm sine wave pattern simulating audio signals
- **Mouse interaction**: Particles distort and spike in amplitude near cursor, simulating the system "listening" to user presence

### 🎮 Interactive Easter Eggs

1. **Rapid Click Glitch Effect**
   - Rapidly click the background 5+ times within 300ms
   - Triggers RGB split glitch effect (like corrupted audio)
   - Lasts for 1 second

2. **Spacebar Interaction**
   - **Hold Spacebar**: Waveform flatlines into silence
   - **Release Spacebar**: Explodes into chaotic noise pattern before settling back to sine wave

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with custom glassmorphism utilities
- **HTML5 Canvas** - Neural waveform animation
- **Modern ES6+** - JavaScript features

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── NeuralWaveform.jsx    # Canvas animation component
│   │   ├── GlassCard.jsx          # Reusable glassmorphism card
│   │   ├── About.jsx              # About section
│   │   ├── Resume.jsx             # Resume section
│   │   ├── Projects.jsx           # Projects showcase
│   │   ├── Navbar.jsx             # Navigation bar
│   │   └── Sidebar.jsx            # Sidebar with contact info
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles & Tailwind
├── public/
│   └── assets/
│       └── images/                # Static assets
└── package.json
```

## Customization

### Colors & Theme
Edit `tailwind.config.js` and `src/index.css` to customize:
- Glassmorphism opacity and blur
- Color gradients (purple/pink theme)
- Particle colors in `NeuralWaveform.jsx`

### Animation Parameters
In `src/components/NeuralWaveform.jsx`:
- `particleCount`: Number of particles (default: 2000)
- `amplitude`: Wave amplitude (default: 20-50)
- `frequency`: Wave frequency (default: 0.01-0.03)
- `maxDistance`: Mouse interaction radius (default: 200px)

## Performance

- Optimized canvas rendering with requestAnimationFrame
- Efficient particle connection calculations
- Responsive design for mobile and desktop

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

