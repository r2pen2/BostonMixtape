import React, { useContext, useEffect, useState } from 'react'

import "../assets/style/home.css"
import { Record, RecordColor, RecordTray } from '../components/homepage/Record'

import {WLHeader, WLHeaderV2, WLText, WLTextV2} from "../libraries/Web-Legos/components/Text"
import { Button, Paper, Text } from '@mantine/core'
import { Contact } from '../components/homepage/Contact'
import { Performer } from '../api/siteModels.ts'
import { Carousel } from '@mantine/carousel'
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';

import {TypeAnimation} from "react-type-animation"
import { IconBrain, IconCalendar, IconExchange, IconMicrophone, IconMicrophone2 } from '@tabler/icons-react'
import { CurrentSignInContext } from '../App.jsx'
import { AuthenticationManager } from '../libraries/Web-Legos/api/auth.ts'

import {AddModelButton, ModelEditButton, ModelEditModal} from "../libraries/Web-Legos/components/Modals.jsx"
import { getHostname } from '../libraries/Web-Legos/api/development.ts'


export default function Home() {

  
  const [userCanEditText, setUserCanEditText] = useState(false);

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManager.Context)

  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    Performer.getAndSet(setPerformers);
  }, [currentSignIn, authenticationManager]);

  const [performers, setPerformers] = useState([])

  const Ensemble = () => {

    const PerformerSlide = ({performer}) => {
      console.log(performer)
      return (
        <Carousel.Slide className="px-2" style={{maxWidth: "90vw"}}>
          <Paper style={{background: "#FCB393"}} className="p-0 px-md-2 m-0 pt-2 d-flex flex-column align-items-center justify-content-center">
            <img src={getHostname() + "/" + performer.imageSource} alt={performer.name} style={{height: 200, width: 200, objectFit: "cover", aspectRatio: "1/1", borderRadius: "50%"}}></img>
            <div className="px-2 d-flex flex-column align-items-center justify-content-center w-100">
              <Text className="poetsen-one-regular performer-text py-2" size="1.5rem" c="#6A2537">{performer.name}</Text>
              <Text className="poetsen-one-regular performer-text pb-2" c="#6A2537">{performer.bio}</Text>
            </div>
            <ModelEditButton userCanEdit={userCanEditText} data={performer} model={Performer} setEditModalOpen={setEditModalOpen} setCurrentModel={setCurrentModel} />
          </Paper>
        </Carousel.Slide>
      )
    }

    return (
      <section className="purple-content px-2 px-sm-3 py-5 d-flex flex-column align-items-center justify-content-center">
        <WLHeaderV2 firestoreId="ensemble-header" editable={userCanEditText} h2 className="poetsen-one-regular" />
        <WLTextV2 className="wider lighter mb-2" firestoreId="ensemble-body-1" editable={userCanEditText} />
        <Carousel 
          className="performer-container px-md-5 px-1"
          slideSize={{ base: '90%', sm: '50%', md: '33.333333%' }}
          slideGap="xl" 
          loop
        >
          {performers.map((performer, index) => <PerformerSlide key={index} performer={performer} />)}
        </Carousel>
        <AddModelButton
          userCanEdit={userCanEditText} 
          model={Performer} 
          setCurrentModel={setCurrentModel} 
          setEditModalOpen={setEditModalOpen}
          buttonComponent={
          <Button color="#FCB393">
            <Text c="#702137" className="poetsen-one-regular">
              Add Performer
            </Text>
          </Button> }
        />
        <WLTextV2 className="wider mt-2 lighter" firestoreId="ensemble-body-2" editable={userCanEditText}/>
      </section>
    )
  }

  const Services = () => {

    const Service = (props) => {
      return (
        <div className="service col-6 py-3 text-start">
        <div className="service-content">
          <div className="gap-2 d-flex flex-row align-items-center justify-contet-start">
            {props.icon}
            <WLTextV2 firestoreId={props.firestoreId + "-title"} editable={userCanEditText} align="left" className="poetsen-one-regular" />
          </div>
          <WLTextV2 firestoreId={props.firestoreId + "-description"} editable={userCanEditText} className="service-description" />
        </div>
      </div>
      )
    }

    return (
      <div className="col-12 col-lg-6 py-lg-0 py-5">
        <WLHeaderV2 h2 className="poetsen-one-regular" firestoreId="services-header" editable={userCanEditText} />
        <div className="container-fluid">
          <div className="row">
            <Service firestoreId="service-1"  icon={<IconCalendar size={32} />}     />
            <Service firestoreId="service-2"  icon={<IconMicrophone2 size={32} />}  />
            <Service firestoreId="service-3"  icon={<IconExchange size={32} />}     />
            <Service firestoreId="service-4"  icon={<IconBrain size={32} />}        />
          </div>
        </div>
      </div>
    )
  }

  const Repretoire = () => (
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
      <WLTextV2 firestoreId="repretoire-body" editable={userCanEditText} />
    </div>
  )
  
  return (
    <div className="homepage-container">
      <ModelEditModal open={editModalOpen} setOpen={setEditModalOpen} model={currentModel} />
      <section className="home-splash-container">
        <hgroup>
          <h1 className="anton-regular header-line-1">BERACH</h1>
          <h1 className="anton-regular header-line-2">Orchestra</h1>
          <WLHeaderV2 h2 className="poetsen-one-regular">Your happiness... set to music.</WLHeaderV2>
          {/* <WLHeaderV2 h2 className="poetsen-one-regular">—Newton, MA—</WLHeaderV2> */}
        </hgroup>
        <RecordTray userCanEditText={userCanEditText} />
        <div className="d-flex flex-column align-items-center justify-content-center w-100 px-2 px-sm-3" style={{position: "absolute", top: "82%"}}>
          <WLTextV2 headerLevel={2} firestoreId="hero-text-1" editable={userCanEditText} className="poetsen-one-regular hero h2-container" />
          <WLTextV2 headerLevel={2} firestoreId="hero-text-2" editable={userCanEditText} className="poetsen-one-regular hero h2-container" />
        </div>
      </section>
      <section className="purple-content px-2 px-sm-3 py-5">
        <WLHeaderV2 h2 className="poetsen-one-regular" firestoreId="call-to-action-header" editable={userCanEditText} />
        <WLTextV2 firestoreId="call-to-action-body" editable={userCanEditText} />
        <div className="d-flex flex-row align-items-center justify-content-center pt-4 gap-2 contact-button-container">
          <div className="contact-line"></div>
          <Button color={"#FCB393"} onClick={() => window.location = "/#contact"}>
            <Text className="contact-button poetsen-one-regular">Contact Us</Text>
          </Button>
          <div className="contact-line"></div>
        </div>
      </section>
      <Ensemble />
      <section className="red-content">
        <Peaks />
        <div className="container-fluid px-2 px-sm-3">
          <div className="row">
            <Repretoire />
            <Services />
          </div>
        </div>
        <Peaks flip />
      </section>
      <Contact />
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