import React, { useState } from 'react'

import "../assets/style/home.css"
import { Record, RecordColor, RecordTray } from '../components/homepage/Record'

import {WLHeader, WLHeaderV2, WLTextV2} from "../libraries/Web-Legos/components/Text"
import { Button, Paper, Text } from '@mantine/core'
import { Contact } from '../components/homepage/Contact'
import { Performer, SiteModel } from '../api/siteModels.ts'
import { Carousel } from '@mantine/carousel'

import {TypeAnimation} from "react-type-animation"
import { IconBrain, IconCalendar, IconExchange, IconMicrophone, IconMicrophone2 } from '@tabler/icons-react'

export default function Home() {

  // const [performers, setPerformers] = useState([new SiteModel()])
  const [performers, setPerformers] = useState([Performer.examples.alternate, Performer.examples.alternate, Performer.examples.alternate, Performer.examples.alternate, Performer.examples.alternate])

  const PerformerSlide = ({performer}) => {

    return (
      <Carousel.Slide className="px-2" style={{maxWidth: "90vw"}}>
        <Paper style={{background: "#FCB393"}} className="p-0 px-md-2 m-0 pt-2 d-flex flex-column align-items-center justify-content-center">
          <img src={performer.imageHref} alt={performer.name} style={{height: 200, width: 200, objectFit: "cover", aspectRatio: "1/1", borderRadius: "50%"}}></img>
          <div className="px-2 d-flex flex-column align-items-center justify-content-center w-100">
            <Text className="poetsen-one-regular performer-text py-2" size="1.5rem" c="#6A2537">
              {performer.name}
            </Text>
            <Text className="poetsen-one-regular performer-text pb-2" c="#6A2537">
              {performer.bio}
            </Text>
          </div>
        </Paper>
      </Carousel.Slide>
    )
  }
  
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
      <section className="purple-content px-2 px-sm-3 py-5">
        <WLHeaderV2 h2 className="poetsen-one-regular">The Best of Both Worlds</WLHeaderV2>
        <WLTextV2 className="">Specializing in events requiring a blend of styles and genres, the BERACH Orchestra defines itself through our uniquely customized approach, dynamic repertoire, exceptional versatility and uncompromising quality. We are particularly adept at integrating authentic traditional and contemporary Jewish music with a full range of American popular music. Our repertoire spans virtually every era and we are constantly adding songs to our repertoire so new requests are welcome.</WLTextV2>
        <div className="d-flex flex-row align-items-center justify-content-center pt-4 gap-2 contact-button-container">
          <div className="contact-line"></div>
          <Button color={"#FCB393"}>
            <Text className="contact-button poetsen-one-regular">Contact Us</Text>
          </Button>
          <div className="contact-line"></div>
        </div>
      </section>
      <section className="purple-content px-2 px-sm-3 py-5 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 h2 className="poetsen-one-regular">Some of our Featured Performers</WLHeaderV2>
        <WLTextV2 className="wider lighter mb-2">
          Members of the BERACH Orchestra have been selected among hundreds of local talent and many have national and international performance experience, numerous recording credits and extensive experience performing an incredibly diverse range of music. Some serve as faculty at leading conservatories and all are proud to associate with our orchestra and its newly established educational affiliate.
        </WLTextV2>
        <Carousel 
          className="performer-container px-md-5 px-1"
          slideSize={{ base: '90%', sm: '50%', md: '33.333333%' }}
          slideGap="xl" 
          loop
        >
          {performers.map((performer, index) => <PerformerSlide key={index} performer={performer} />)}
        </Carousel>
        <WLTextV2 className="wider mt-2 lighter">
          Ensembles are configured to meet your specific needs based on a number of variables. Our objective is to carefully listen to what it is you are planning, offer some possible approaches to achieve your ideal result, and then carefully prepare and configure our services accordingly. The planning is only part of the process. Another differentiating factor about our services is that the person with whom you are discussing your plans is very likely going to be at your event implementing these very same plans so the chance for confusion and mistakes are minimized. Your enthusiastic satisfaction and trust are our utmost concern and our ultimate goal. We are immensely grateful to our clients for the opportunity to share in their wonderful celebrations.
        </WLTextV2>
      </section>
      <section className="red-content">
        <Peaks />
        <div className="container-fluid px-2 px-sm-3">
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <TypeAnimation
                sequence={[
                  'We Play Contemporary Jewish Music', 1000,
                  'We Play Traditional Jewish Music', 1000,
                  'We Play Authentic Israeli Songs', 1000,
                  'We Play Classical Music with String Ensembles', 1000,
                  'We Play Swing and Jazz', 1000,
                  'We Play Motown and R&B', 1000,
                  'We Play Rock n\' Roll', 1000,
                  'We Play Show Tunes', 1000,
                  'We Play Contemporary Hits', 1000
                ]}
                wrapper="span"
                speed={50}
                className="poetsen-one-regular"
                style={{ fontSize: '2.5rem', display: 'inline-block' }}
                repeat={Infinity}
              />
              
              <WLTextV2>
                The BERACH Orchestra customizes each performance to our client's specific needs and is proud to offer a comprehensive range of music including songs spanning the globe. Requests are welcome! Our goal is to provide the perfect combination of music to underscore the event at hand. Our exceptional team enjoys the challenge of learning something new and we always come prepared for last minute changes and welcome unusual and original requests, even in foreign languages (advance notice is generally recommended). We suggest that any very important requests (eg. First Dance, Parent-Child Dance or Last Dance) be communicated at least three weeks in advance to ensure adequate time to develop an appropriate arrangement.
              </WLTextV2>
            </div>
            <div className="col-12 col-lg-6 py-lg-0 py-5">
              <WLHeaderV2 h2 className="poetsen-one-regular">Services</WLHeaderV2>
              <div className="container-fluid">
                <div className="row">
                  <Service title="Event Planning" icon={<IconCalendar size={32} />}>
                    We have a wealth of experience planning and facilitating all sorts of events and would be happy to assist you with yours.
                  </Service>
                  <Service title="Full Master of Ceremonies" icon={<IconMicrophone2 size={32} />}>
                    MC service is always included should you need it.
                  </Service>
                  <Service title="Facilitation & Coordination" icon={<IconExchange size={32} />}>
                    We work closely with your planner, caterer, photo/videographer, facility manager, etc. to ensure seamless transitions and keep your event running smoothly.
                  </Service>
                  <Service title="Advice" icon={<IconBrain size={32} />}>
                    Need referrals for other services? We have worked with some of the best in the business and would be happy to offer suggestions based on your needs.
                  </Service>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Peaks flip />
      </section>
      <Contact />
    </div>
  )
}

const Service = (props) => {
  return (
    <div className="service col-6 py-3 text-start">
    <div className="service-content">
      <div className="gap-2 d-flex flex-row align-items-center justify-contet-start">
        {props.icon}
        <Text className="poetsen-one-regular">
          {props.title}
        </Text>
      </div>
      <Text className="service-description">
        {props.children}
      </Text>
    </div>
  </div>
  )
}



const Peaks = ({flip}) => (
  <svg className={flip ? "flip-svg" : ""} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="visual" version="1.1" viewBox={`0 ${flip ? "90" : "0"} 900 242`}>
    <path d="M0 231L129 242L257 167L386 199L514 231L643 190L771 240L900 182L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#c9394f"/>
    <path d="M0 199L129 158L257 196L386 128L514 186L643 177L771 199L900 126L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#b2324a"/>
    <path d="M0 103L129 149L257 106L386 113L514 91L643 133L771 158L900 158L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#9c2c45"/>
    {!flip && <path d="M0 63L129 75L257 91L386 82L514 112L643 80L771 102L900 65L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#86263e"/>}
    {!flip && <path d="M0 56L129 35L257 30L386 64L514 71L643 38L771 41L900 58L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#702137"/>}
  </svg>
)