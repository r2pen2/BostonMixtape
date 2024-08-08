// Style Imports
import './App.css';
import "./libraries/Web-Legos/Layouts/wl.css";

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import powerBrick from "./assets/images/power-brick.gif";
import { Link, Spacer, Text } from '@nextui-org/react';
import { createContext, useState } from 'react';

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { AnalyticsManager } from './libraries/Web-Legos/api/analytics.ts'
import { WLThemeProvider, createWLTheme } from './libraries/Web-Legos/Layouts/WLThemes';
import Home from './routes/Home.jsx';
import '@mantine/core/styles.css';
import {MailManager} from "./libraries/Web-Legos/api/mail.ts"
import { WLTextV2 } from './libraries/Web-Legos/components/Text.jsx';


import { WLFooterSocials } from './libraries/Web-Legos/components/Footer.jsx';
import  {FooterAuthButton} from "./libraries/Web-Legos/components/Auth.jsx"

/** Context to keep track of current user */
export const CurrentSignInContext = createContext();

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

/** Site AnalyticsManager */
const analyticsManager = new AnalyticsManager(firebaseConfig)
analyticsManager.initialize();

const theme = createWLTheme();

export const BBOMailManager = new MailManager();
BBOMailManager.addRecipientEmail("joedobbelaar@gmail.com");

export function App(props) {

  const [currentSignIn, setCurrentSignIn] = useState(null);

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <AuthenticationManager.Context.Provider value={{authenticationManager}} >
      <AnalyticsManager.Context.Provider value={{analyticsManager}} >
      <TestingContext.Provider value={{isTestingEnvironment}} >
      <CurrentSignInContext.Provider value={{currentSignIn}} >
        {props.children}
      </CurrentSignInContext.Provider>
      </TestingContext.Provider>
      </AnalyticsManager.Context.Provider>
      </AuthenticationManager.Context.Provider >
    )
  }

  // If we're testing, just place everything in context provider
  if (props.children) {
    return (
      <AppContextProvider >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        {props.children}
      </AppContextProvider>
    )
  }

  // Return the app
  return (
    <div className="App d-flex flex-column align-items-center w-100" data-testid="app">
      <WLThemeProvider theme={theme}>
      <AppContextProvider>
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        <Router>
          <div className="app-content">
            {/** Place Navigation Here */}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            {/** Place Footer Here */}
          </div>
          
          <footer className="pt-5 flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  {/* <WLHeaderV2 size="$4xl" align="center">A New Day Coaching</WLHeaderV2>           */}
                  {/* <img src={logoTransparent} alt="A New Day Coaching" style={{width: "400px"}} /> */}
                  <WLTextV2 firestoreId="contact-name" />
                  <Link href="mailto:bbm@gmail.com">
                    <Text css={{textDecoration:"underline"}}>bbm@gmail.com</Text>
                  </Link>
                <Spacer y={1} />
                <WLFooterSocials>
                  <WLFooterSocials.Button color="#b3324a" size="42" platformKey="facebook" href="https://www.facebook.com/berachorchestra/" />
                </WLFooterSocials>
                  {/* <Link href="callto:2027982343">
                    <Text css={{textDecoration:"underline"}}>(202) 798-ADHD</Text>
                  </Link> */}
                </div>
                <div className="d-lg-flex w-100 d-none flex-row gap-2 align-items-end justify-content-around">
                  <Link href="https://www.joed.dev">
                    <Text css={{textDecoration:"underline"}}>Web Designer: Joe Dobbelaar</Text>
                  </Link>
                  <FooterAuthButton link authManager={authenticationManager} currentSignIn={currentSignIn} setCurrentSignIn={setCurrentSignIn}/>
                </div>
                <div className="d-flex d-lg-none flex-row gap-2 align-items-center justify-content-center">
                  <Link href="https://www.joed.dev">
                    <Text css={{textDecoration:"underline"}}>Web Designer: Joe Dobbelaar</Text>
                  </Link>
                </div>
                <div className="d-flex d-lg-none flex-row gap-2 align-items-center justify-content-center">
                  <FooterAuthButton link authManager={authenticationManager} currentSignIn={currentSignIn} setCurrentSignIn={setCurrentSignIn}/>
                </div>
              </footer>
        </Router>
      </AppContextProvider>
      </WLThemeProvider>
    </div>
  );
}

export default App;
