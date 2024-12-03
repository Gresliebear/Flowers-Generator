// components/P5Sketch.tsx
'use client';  // Add this to mark the file as a client component

import { useEffect } from 'react';
import p5 from 'p5';

// Define props interface
interface P5SketchProps {
  petalNum: number;
  diameter: number;
  pLen: number;
  pSharp: number;
  height: number;
  curvature1: number;
  curvature2: number;
  bump: number;
  bumpNum: number;
}

const P5Sketch: React.FC<P5SketchProps> = ({
  petalNum,
  diameter,
  pLen,
  pSharp,
  height,
  curvature1,
  curvature2,
  bump,
  bumpNum,
}) => {
  useEffect(() => {
    const sketch = (p: p5) => {
      let v: p5.Vector[][] = [];
      let rows = 60;
      let cols = 120;

      let pNum: number, fD: number, pLenVal: number, pSharpVal: number;
      let fHeight: number, curve1: number, curve2: number;
      let b: number, bNum: number;

      p.setup = () => {
        p.createCanvas(500, 500, p.WEBGL);
        p.colorMode(p.HSB, 360, 100, 100);
        p.angleMode(p.DEGREES);
        p.noStroke();
      };

      p.draw = () => {
        p.clear();
        p.orbitControl(4, 4);
        p.rotateX(60);

        // Use the props to set the values dynamically
        pNum = petalNum;
        fD = diameter;
        pLenVal = pLen;
        pSharpVal = pSharp;
        fHeight = height;
        curve1 = curvature1;
        curve2 = curvature2;
        b = bump;
        bNum = bumpNum;

        v = [];

        for (let theta = 0; theta < rows; theta++) {
          v.push([]);
          for (let phi = 0; phi < cols; phi++) {
            let r =
              (pLenVal * p.pow(p.abs(p.sin((pNum / 2) * phi * 360 / cols)), pSharpVal) + fD) *
              (theta / rows);
            let x = r * p.cos(phi * 360 / cols);
            let y = r * p.sin(phi * 360 / cols);
            let z =
              vShape(fHeight, r / 100, curve1, curve2, 1.5) - 200 +
              bumpiness(b, r / 100, bNum, phi * 360 / cols);

            let pos = p.createVector(x, y, z);
            v[theta].push(pos);
          }
        }

        for (let theta = 0; theta < v.length; theta++) {
          p.fill(340, 100 - theta, 100);
          for (let phi = 0; phi < v[theta].length; phi++) {
            if (theta < v.length - 1 && phi < v[theta].length - 1) {
              p.beginShape();
              p.vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
              p.vertex(v[theta + 1][phi].x, v[theta + 1][phi].y, v[theta + 1][phi].z);
              p.vertex(v[theta + 1][phi + 1].x, v[theta + 1][phi + 1].y, v[theta + 1][phi + 1].z);
              p.vertex(v[theta][phi + 1].x, v[theta][phi + 1].y, v[theta][phi + 1].z);
              p.endShape(p.CLOSE);
            } else if (theta < v.length - 1 && phi === v[theta].length - 1) {
              p.beginShape();
              p.vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
              p.vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
              p.vertex(v[theta + 1][0].x, v[theta + 1][0].y, v[theta + 1][0].z);
              p.vertex(v[theta + 1][phi].x, v[theta + 1][phi].y, v[theta + 1][phi].z);
              p.endShape(p.CLOSE);
            }
          }
        }
      };

      const vShape = (A: number, r: number, a: number, b: number, c: number): number => {
        return A * p.pow(p.E, -b * p.pow(p.abs(r), c)) * p.pow(p.abs(r), a);
      };

      const bumpiness = (A: number, r: number, f: number, angle: number): number => {
        return 1 + A * p.pow(r, 2) * p.sin(f * angle);
      };
    };

    const myP5 = new p5(sketch, document.getElementById('p5-container')!);

    return () => {
      myP5.remove();
    };
  }, [petalNum, diameter, pLen, pSharp, height, curvature1, curvature2, bump, bumpNum]);

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
