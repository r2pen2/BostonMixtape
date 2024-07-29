import React, { useState } from 'react'

import "../assets/style/home.css"
import { Record, RecordColor, RecordTray } from '../components/homepage/Record'

import {WLHeader, WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"
import { Button, Text } from '@mantine/core'

export default function Home() {
  
  return (
    <div className="homepage-container">
      <section className="home-splash-container">
        <hgroup>
          <h1 className="anton-regular header-line-1">BERACH</h1>
          <h1 className="anton-regular header-line-2">Orchestra</h1>
          <WLHeaderV2 h2 className="poetsen-one-regular">Your happiness... set to music.</WLHeaderV2>
          <WLHeaderV2 h2 className="poetsen-one-regular">—Newton, MA—</WLHeaderV2>
        </hgroup>
        <RecordTray />
      </section>
      <section className="purple-content px-2 px-lg-0 py-5">
        <WLHeaderV2 h2 className="poetsen-one-regular">The Best of Both Worlds</WLHeaderV2>
        <WLTextV2 className="poetsen-one-regular">Specializing in events requiring a blend of styles and genres, the BERACH Orchestra defines itself through our uniquely customized approach, dynamic repertoire, exceptional versatility and uncompromising quality. We are particularly adept at integrating authentic traditional and contemporary Jewish music with a full range of American popular music. Our repertoire spans virtually every era and we are constantly adding songs to our repertoire so new requests are welcome.</WLTextV2>
        <div className="d-flex flex-row align-items-center justify-content-center pt-4 gap-2 contact-button-container">
          <div className="contact-line"></div>
          <Button color={"#FCB393"}>
            <Text className="contact-button poetsen-one-regular">Contact Us</Text>
          </Button>
          <div className="contact-line"></div>
        </div>
      </section>
    </div>
  )
}