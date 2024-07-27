import React, { useState } from 'react'

import "../assets/style/home.css"
import { Record, RecordColor, RecordTray } from '../components/homepage/Record'

export default function Home() {
  
  return (
    <div className="homepage-container">
      <div className="home-splash-container">
        <hgroup>
          <h1 className="anton-regular header-line-1">BERACH</h1>
          <h1 className="anton-regular header-line-2">Orchestra</h1>
        </hgroup>
        <RecordTray />
      </div>
    </div>
  )
}