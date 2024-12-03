'use client'; // Mark this file as a client component if using dynamic imports

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar'; // Import the Navbar component
import { useState } from 'react';
import Adjustments from '@/components/Adjustments';

// Dynamically import P5SketchFlower with SSR disabled
const P5SketchFlower = dynamic(() => import('../components/P5SketchFlower'), { ssr: false });

export default function Home() {
  // Slider state
  const [petalNum, setPetalNum] = useState(5);
  const [diameter, setDiameter] = useState(200);
  const [pLen, setPLen] = useState(60);
  const [pSharp, setPSharp] = useState(0.4);
  const [height, setHeight] = useState(300);
  const [curvature1, setCurvature1] = useState(0.8);
  const [curvature2, setCurvature2] = useState(0.2);
  const [bump, setBump] = useState(2.5);
  const [bumpNum, setBumpNum] = useState(10);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Page Layout with 3 Columns */}
      <div className='flex flex-row flex-grow'>
        {/* Column 1: Adjustments */}
        <div className='bg-gray-400 basis-1/6 p-4'>
          <Adjustments 
            sliders={{
              petalNum,
              diameter,
              pLen,
              pSharp,
              height,
              curvature1,
              curvature2,
              bump,
              bumpNum
            }}
            setPetalNum={setPetalNum}
            setDiameter={setDiameter}
            setPLen={setPLen}
            setPSharp={setPSharp}
            setHeight={setHeight}
            setCurvature1={setCurvature1}
            setCurvature2={setCurvature2}
            setBump={setBump}
            setBumpNum={setBumpNum}
          />
        </div>

        {/* Column 2: P5 Sketch */}
        <div className='basis-3/4 p-4'>
        <h1 className='text-4xl'> Love you Holly! </h1>
          <P5SketchFlower 
            petalNum={petalNum}
            diameter={diameter}
            pLen={pLen}
            pSharp={pSharp}
            height={height}
            curvature1={curvature1}
            curvature2={curvature2}
            bump={bump}
            bumpNum={bumpNum}
          />
        </div>

        {/* Column 3 (optional): Empty or additional content */}
        <div className='bg-gray-400 basis-1/6 p-4'>
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex gap-6 flex-wrap items-center justify-center py-4 bg-gray-200">
        {/* Footer Content */}
      </footer>
    </div>
  );
}
