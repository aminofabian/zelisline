import { useEffect, useState, useRef } from 'react';

interface WritingPenProps {
  texts: string[];
  className?: string;
}

interface PenState {
  x: number;
  y: number;
  angle: number;
  pressure: number;
}

export const WritingPen = ({ texts, className = '' }: WritingPenProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [subPathIndex, setSubPathIndex] = useState(0);
  const [penState, setPenState] = useState<PenState>({
    x: 0,
    y: 0,
    angle: -45,
    pressure: 1
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef(Date.now());
  const inkPathsRef = useRef<Array<{ x: number; y: number; pressure: number }>>([]);

  const getStartPosition = () => {
    if (!containerRef.current) return 0;
    return containerRef.current.offsetWidth * 0.2;
  };

  useEffect(() => {
    if (letterIndex >= texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setLetterIndex(0);
        setSubPathIndex(0);
        inkPathsRef.current = [];
        setPenState(prev => ({
          ...prev,
          x: getStartPosition(),
          y: 30,
          pressure: 1
        }));
      }, 1500);
      return () => clearTimeout(timeout);
    }

    const currentChar = texts[currentTextIndex][letterIndex];
    const charWidth = currentChar === ' ' ? 12 : 
                     currentChar === 'i' || currentChar === 'l' ? 8 : 
                     currentChar === 'm' || currentChar === 'w' ? 16 : 14;
    
    const baseLetterDuration = 300;
    const letterDuration = currentChar === ' ' ? baseLetterDuration * 0.5 :
                          currentChar === '.' || currentChar === ',' ? baseLetterDuration * 1.5 :
                          currentChar === 'i' || currentChar === 'l' ? baseLetterDuration * 0.8 :
                          baseLetterDuration;
    
    const subPaths = currentChar === ' ' ? 2 : 
                    currentChar === '.' || currentChar === ',' ? 3 :
                    currentChar === 'i' || currentChar === 'l' ? 4 : 6;

    const animateLetter = () => {
      if (subPathIndex >= subPaths) {
        setLetterIndex(prev => prev + 1);
        setSubPathIndex(0);
        return;
      }

      const now = Date.now();
      const timeDelta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      const progress = subPathIndex / subPaths;
      const xOffset = texts[currentTextIndex].split('').slice(0, letterIndex).reduce((acc, c) => acc + (c === ' ' ? 12 : c === 'i' || c === 'l' ? 8 : c === 'm' || c === 'w' ? 16 : 14), 0);

      // Enhanced natural variations
      const baseFreq = timeDelta / 150;
      const handTremor = Math.sin(baseFreq) * 0.3 + Math.cos(baseFreq * 2) * 0.2;
      const naturalVariation = Math.sin(progress * Math.PI * 2) * 1.5;
      
      // Character-specific movements
      const charY = (() => {
        switch(currentChar) {
          case '.': return Math.sin(progress * Math.PI) * 4;
          case ',': return Math.sin(progress * Math.PI) * 6 + progress * 4;
          case 'g':
          case 'j':
          case 'y':
          case 'p':
          case 'q': return Math.sin(progress * Math.PI) * 2 + progress * 6;
          default: return naturalVariation;
        }
      })();

      // Pressure variations
      const pressure = (() => {
        const basePressure = 0.8 + Math.sin(progress * Math.PI) * 0.2;
        if (currentChar === '.' || currentChar === ',') {
          return basePressure * (1 - progress);
        }
        return basePressure;
      })();

      // Smooth angle transitions
      const targetAngle = -45 + handTremor + (charY * 0.8);
      const currentAngle = penState.angle;
      const smoothAngle = currentAngle + (targetAngle - currentAngle) * 0.4;

      const newX = getStartPosition() + xOffset + (charWidth * progress);
      const newY = 30 + handTremor + charY;

      inkPathsRef.current.push({ x: newX, y: newY, pressure });

      setPenState({
        x: newX,
        y: newY,
        angle: smoothAngle,
        pressure
      });

      setSubPathIndex(prev => prev + 1);
    };

    const timeout = setTimeout(
      animateLetter, 
      letterDuration / (subPaths * (1 + Math.random() * 0.3))
    );
    return () => clearTimeout(timeout);
  }, [letterIndex, currentTextIndex, texts, subPathIndex, penState.angle]);

  return (
    <div ref={containerRef} className={`ink-container ${className}`}>
      <style jsx global>{`
        .ink-container {
          position: relative;
          width: 100%;
          height: 80px;
          margin: 20px 0;
          overflow: hidden;
          background: #fafaf9;
          border: 1px solid #e5e5e4;
          border-radius: 8px;
          box-shadow: 
            inset 0 2px 4px rgba(0,0,0,0.05),
            0 1px 2px rgba(0,0,0,0.05);
        }

        .writing-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 40px;
          text-align: left;
        }

        .text-line {
          position: relative;
          display: inline-block;
          font-family: 'Caveat', cursive;
          font-size: 1.6rem;
          color: #1e40af;
          white-space: nowrap;
          letter-spacing: 0.8px;
        }

        .text-line span {
          opacity: 0;
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .text-line span.writing {
          opacity: 0.2;
        }

        .text-line span.visible {
          opacity: 1;
        }

        .pen {
          position: absolute;
          width: 6px;
          height: 50px;
          transform-origin: bottom center;
          will-change: transform;
          z-index: 10;
          pointer-events: none;
        }

        .pen-body {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            #1a1a1a 0%,
            #2a2a2a 15%,
            #444 50%,
            #2a2a2a 85%,
            #1a1a1a 100%
          );
          border-radius: 3px;
          box-shadow: 
            -1px -1px 2px rgba(255,255,255,0.3),
            1px 1px 2px rgba(0,0,0,0.8);
        }

        .pen-grip {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 140%;
          height: 15px;
          background: linear-gradient(90deg,
            #666 0%,
            #888 15%,
            #999 50%,
            #888 85%,
            #666 100%
          );
          border-radius: 2px;
          box-shadow:
            0 1px 2px rgba(0,0,0,0.3),
            inset 0 1px rgba(255,255,255,0.2);
        }

        .pen-tip {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 4px;
          background: linear-gradient(to bottom, #000, #444);
          clip-path: polygon(50% 100%, 0 0, 100% 0);
        }

        .pen-shadow {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 3px;
          background: rgba(0, 0, 0, 0.15);
          border-radius: 50%;
          filter: blur(1.5px);
        }

        .ink-stroke {
          position: absolute;
          background: #1e40af;
          border-radius: 2px;
          opacity: 0;
          transform-origin: center;
          animation: fadeIn 0.15s forwards;
          pointer-events: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.85; }
        }

        .paper-texture {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }
      `}</style>

      <div className="paper-texture" />
      
      <div className="writing-text">
        <div className="text-line">
          {texts[currentTextIndex].split('').map((char, i) => {
            const charWidth = char === ' ' ? 12 : 
                            char === 'i' || char === 'l' ? 8 : 
                            char === 'm' || char === 'w' ? 16 : 14;
            
            return (
              <span
                key={i}
                className={
                  i < letterIndex ? 'visible' : 
                  i === letterIndex ? 'writing' : ''
                }
                style={{
                  width: `${charWidth}px`,
                  transform: i < letterIndex ? 
                    `rotate(${Math.sin(i * 0.3) * 1}deg)` : 
                    'none'
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {inkPathsRef.current.map((path, i) => (
        <div
          key={`ink-${currentTextIndex}-${letterIndex}-${i}`}
          className="ink-stroke"
          style={{
            left: `${path.x}px`,
            top: `${path.y + 1}px`,
            width: `${1 + path.pressure}px`,
            height: `${1 + path.pressure * 0.5}px`,
            opacity: path.pressure * 0.85
          }}
        />
      ))}

      <div 
        className="pen"
        style={{
          transform: `translate(
            ${penState.x}px, 
            ${penState.y}px
          ) rotate(${penState.angle}deg)`,
          transition: 'transform 0.08s linear'
        }}
      >
        <div className="pen-body">
          <div className="pen-grip" />
        </div>
        <div className="pen-tip" />
        <div className="pen-shadow" />
      </div>
    </div>
  );
};

export default WritingPen;