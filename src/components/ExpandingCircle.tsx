'use client';

import React from 'react';

interface ExpandingCircleProps {
  size?: number;
  className?: string;
}

export default function ExpandingCircle({ size = 200, className = '' }: ExpandingCircleProps) {
  return (
    <div className={`expanding-circle-container ${className}`}>
      <div className="expanding-circle-outer" style={{ width: size, height: size }}>
        <div className="expanding-circle-middle">
          <div className="expanding-circle-inner"></div>
        </div>
      </div>
    </div>
  );
}

