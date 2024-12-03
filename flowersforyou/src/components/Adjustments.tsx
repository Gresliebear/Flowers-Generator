import React from 'react';
import Slider from './Slider';

interface AdjustmentsProps {
  sliders: {
    petalNum: number;
    diameter: number;
    pLen: number;
    pSharp: number;
    height: number;
    curvature1: number;
    curvature2: number;
    bump: number;
    bumpNum: number;
  };
  setPetalNum: (value: number) => void;
  setDiameter: (value: number) => void;
  setPLen: (value: number) => void;
  setPSharp: (value: number) => void;
  setHeight: (value: number) => void;
  setCurvature1: (value: number) => void;
  setCurvature2: (value: number) => void;
  setBump: (value: number) => void;
  setBumpNum: (value: number) => void;
}

const Adjustments: React.FC<AdjustmentsProps> = ({
  sliders,
  setPetalNum,
  setDiameter,
  setPLen,
  setPSharp,
  setHeight,
  setCurvature1,
  setCurvature2,
  setBump,
  setBumpNum
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <Slider label="Number of Petals" min={1} max={20} step={1} value={sliders.petalNum} onChange={setPetalNum} />
      <Slider label="Diameter" min={20} max={250} step={10} value={sliders.diameter} onChange={setDiameter} />
      <Slider label="Petal Length" min={0} max={300} step={10} value={sliders.pLen} onChange={setPLen} />
      <Slider label="Petal Sharpness" min={0.0} max={10.0} step={0.1} value={sliders.pSharp} onChange={setPSharp} />
      <Slider label="Flower Height" min={0} max={600} step={10} value={sliders.height} onChange={setHeight} />
      <Slider label="Curvature 1" min={0.0} max={4.0} step={0.1} value={sliders.curvature1} onChange={setCurvature1} />
      <Slider label="Curvature 2" min={0.0} max={1.0} step={0.05} value={sliders.curvature2} onChange={setCurvature2} />
      <Slider label="Bumpiness" min={0.0} max={5.0} step={0.5} value={sliders.bump} onChange={setBump} />
      <Slider label="Bumpiness Number" min={0} max={20} step={1} value={sliders.bumpNum} onChange={setBumpNum} />
    </div>
  );
}

export default Adjustments;
