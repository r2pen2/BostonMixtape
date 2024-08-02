import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import {WLTextV2} from "../../libraries/Web-Legos/components/Text";
import { AuthenticationManager } from '../../libraries/Web-Legos/api/auth.ts';
import { useContext, useEffect, useState } from 'react';
import { BBOMailManager, CurrentSignInContext } from '../../App';
import { Modal, Spacer, Text } from '@nextui-org/react';
import {Accordion, Button, Input, Paper, Textarea} from "@mantine/core"
import { FormResponse } from '../../libraries/Web-Legos/api/admin.ts';

import ReCAPTCHA from "react-google-recaptcha";
import { IconAt } from '@tabler/icons-react';

export const Contact = () => {
   
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recaptchaModalOpen, setRecaptchaModalOpen] = useState(false);

  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditImages, setUserCanEditImages] = useState(false);

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManager.Context)

  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "siteImages").then(p => setUserCanEditImages(p));
  }, [currentSignIn, authenticationManager]);

  const ThankYou = () => (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <MarkEmailReadOutlinedIcon style={{fontSize: 64}} />
      <WLTextV2>Thank you!</WLTextV2>
    </div>
  )

  const FormContent = () => {
    if (formSubmitted) {
      return <ThankYou />
    }
    return [
      <Input key="name-input" id="name" placeholder="Your Name" size='lg' aria-label='Your Name' className='kiwi w-100' />,
      <Input key="email-input" id="email" placeholder="Your Email" size='lg' aria-label='Your Email' className='kiwi w-100' leftSection={<IconAt size={16} />} />,
      <Textarea key="message-input" id="message" placeholder="Your Message" size='lg' aria-label='Message' className='kiwi w-100' />,
      <div className="d-flex flex-row align-items-center justify-content-center pt-4 gap-2 contact-button-container">
        <div className="contact-line"></div>
          <Button color={"#FCB393"} onClick={() => {setRecaptchaModalOpen(true)}}>
            <Text className="contact-button poetsen-one-regular mb-0">Contact Us</Text>
          </Button>
        <div className="contact-line"></div>
      </div>
    ]
  }

  const CaptchaModal = () => {
    
    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const message = document.getElementById("message")?.value;
  
    function sendForm() {
      function getEmailBody() {
        const body = `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Message: ${message}`;
        return body;
      }
  
      console.log(getEmailBody());
  
      BBOMailManager.sendMail(
        `New ANewDayCoaching Contact Form Submission from ${name}`,
        getEmailBody()
      );
  
      const res = new FormResponse();
      res.content["Name"] = name;
      res.content["Email"] = email;
      res.content["Message"] = message;
      res.shortStrings.formId = "contact";
      res.shortStrings.formTitle = "Contact";
      res.sendFormData();
    }
  
  function handleCaptchaComplete(v) {
    if (v.length < 1) {
      setRecaptchaModalOpen(false);
      return;
    }
    sendForm();
    setFormSubmitted(true);
    setRecaptchaModalOpen(false);
  }
  
    return (
      <Modal
        blur
        open={recaptchaModalOpen}
        onClose={() => setRecaptchaModalOpen(false)}
        closeButton
      >
        <Modal.Body      
          className="d-flex flex-column w-100 align-items-center text-center py-3"
        >
          <Text>
            Prove that you're human:
          </Text>
          <ReCAPTCHA
            onChange={handleCaptchaComplete}
            sitekey="6LfuCIwmAAAAAOx25tZVJk5Jrw4hjjYWBPHU4IhU"
          />
        </Modal.Body>
      </Modal>
    )
  }

  const Peaks = () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="visual" version="1.1" viewBox="0 0 900 242">
      <path d="M0 231L129 242L257 167L386 199L514 231L643 190L771 240L900 182L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#c9394f"/>
      <path d="M0 199L129 158L257 196L386 128L514 186L643 177L771 199L900 126L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#b2324a"/>
      <path d="M0 103L129 149L257 106L386 113L514 91L643 133L771 158L900 158L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#9c2c45"/>
      <path d="M0 63L129 75L257 91L386 82L514 112L643 80L771 102L900 65L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#86263e"/>
      <path d="M0 56L129 35L257 30L386 64L514 71L643 38L771 41L900 58L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z" fill="#702137"/>
    </svg>
  )

  return (
    <section id="contact" className="d-flex flex-column align-items-center justify-content-center w-100" style={{backgroundColor: "#FCB393", position: "relative"}}>
      <Peaks />
      <Spacer y={2} />
      <div style={{maxWidth: 1000}} className='mt-3 gap-2 px-2 px-md-3 w-100 d-flex flex-column align-items-center'>
        <WLTextV2 size={24} editable={userCanEditText} firestoreId="contact-quote" />
        <Spacer y={0.5} />
        <form style={{backgroundColor: "white", }} className='shadow w-100 p-2 p-md-3 d-flex flex-column align-items-center gap-2'>
          <FormContent />
        </form>
        <Spacer y={1} />
      </div>
    </section>
  )
}