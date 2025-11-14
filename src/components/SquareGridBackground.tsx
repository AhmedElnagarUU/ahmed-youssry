'use client';

import React, { useMemo } from 'react';

interface SquareGridBackgroundProps {
  className?: string;
  opacity?: number;
  squareSize?: number;
  gap?: number;
}

export default function SquareGridBackground({
  className = '',
  opacity = 0.1,
  squareSize = 40,
  gap = 16
}: SquareGridBackgroundProps) {
  // Memoize the grid calculation to prevent re-renders
  const gridConfig = useMemo(() => {
    const squaresPerRow = Math.ceil(100 / (squareSize + gap));
    const squaresPerCol = Math.ceil(100 / (squareSize + gap));
    const totalSquares = squaresPerRow * squaresPerCol;
    
    // Pre-generate highlighted squares (static, not random on each render)
    const highlightedIndices = new Set<number>();
    const highlightCount = Math.floor(totalSquares * 0.05);
    while (highlightedIndices.size < highlightCount) {
      highlightedIndices.add(Math.floor(Math.random() * totalSquares));
    }
    
    return { squaresPerRow, squaresPerCol, totalSquares, highlightedIndices };
  }, [squareSize, gap]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="square-grid-pattern"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridConfig.squaresPerRow}, ${squareSize}px)`,
          gridTemplateRows: `repeat(${gridConfig.squaresPerCol}, ${squareSize}px)`,
          gap: `${gap}px`,
          padding: `${gap}px`,
          width: '100%',
          height: '100%',
          opacity: opacity
        }}
      >
        {Array.from({ length: gridConfig.totalSquares }).map((_, i) => {
          const isHighlighted = gridConfig.highlightedIndices.has(i);
          return (
            <div
              key={i}
              className={`square-grid-item ${isHighlighted ? 'square-grid-highlighted' : ''}`}
              style={{
                width: `${squareSize}px`,
                height: `${squareSize}px`,
                border: isHighlighted 
                  ? '1px solid rgba(239, 68, 68, 0.3)' 
                  : '1px solid rgba(148, 163, 184, 0.1)',
                borderRadius: '4px',
                backgroundColor: isHighlighted 
                  ? 'rgba(239, 68, 68, 0.05)' 
                  : 'transparent'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

