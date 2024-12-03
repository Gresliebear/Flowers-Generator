import React from 'react'

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ label, min, max, step, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="mb-2">{label}</label>
      <input 
        id={label}
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider"
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;
