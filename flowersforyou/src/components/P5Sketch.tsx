// components/P5Sketch.tsx
'use client';  // Add this to mark the file as a client component

import { useEffect } from 'react';
import p5 from 'p5';

const P5Sketch: React.FC = () => {
  useEffect(() => {
    const sketch = (p: p5) => {
      let x = 100;
      let y = 800;

      p.setup = () => {
        p.createCanvas(600, 400);
      };

      p.draw = () => {
        p.background(200);
        p.fill(255, 0, 0);
        p.ellipse(x, y, 50, 50);
        x += 1;
        y += 1;
      };
    };

    const myP5 = new p5(sketch, document.getElementById('p5-container')!);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div
      id="p5-container"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

export default P5Sketch;
