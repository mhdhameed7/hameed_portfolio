import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BlinkingSquares = ({
  rows = 20,
  cols = 30,
  className = "",
  squareSize = 24,
  gap = 8,
}) => {
  const squares = useMemo(() => {
    return Array.from({ length: rows * cols }).map((_, i) => {
      const isTwinkling = Math.random() > 0.6;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 5;
      return { id: i, isTwinkling, duration, delay };
    });
  }, [rows, cols]);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center opacity-30 ${className}`}
      style={{
        maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
      }}
    >
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`, 
          gap: `${gap}px`,
        }}
      >
        {squares.map((sq) => (
          <motion.div
            key={sq.id}
            className="dark:bg-white bg-slate-900"
            style={{ 
              width: squareSize, 
              height: squareSize, 
              borderRadius: '2px',
              opacity: 0.1 
            }}
            animate={sq.isTwinkling ? {
              opacity: [0.05, 0.4, 0.05]
            } : { opacity: 0.05 }}
            transition={sq.isTwinkling ? {
              duration: sq.duration,
              repeat: Infinity,
              delay: sq.delay,
              ease: "easeInOut"
            } : {}}
          />
        ))}
      </div>
    </div>
  );
};

export default BlinkingSquares;
