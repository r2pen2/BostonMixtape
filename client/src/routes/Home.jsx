import React, { useState } from 'react'

import "../assets/style/home.css"
import { Record, RecordColor } from '../components/homepage/Record'

export default function Home() {
  
  const [glareRotation, setGlareRotation] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * 180 / Math.PI + 90;
    setGlareRotation(angle);
  };
  
  
  return (
    <div className="homepage-container">
      <div className="home-splash-container" onMouseMove={handleMouseMove} style={{"--record-glare-rotation": glareRotation}}>
        <hgroup>
          <h1 className="anton-regular header-line-1">BERACH</h1>
          <h1 className="anton-regular header-line-2">Orchestra</h1>
        </hgroup>
        <Record active color={RecordColor.Red} glareRotation={glareRotation}/>
      </div>
    </div>
  )
}