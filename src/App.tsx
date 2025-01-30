import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import ReactGA from "react-ga4";
import Landing from './components/Landing/Landing';
import Platform from './components/Platform/Platform';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import IntroAnimation from './components/IntroAnimation';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
  ReactGA.initialize(process.env.REACT_APP_PUBLIC_GA_ID || "");

  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Show navbar after the intro animation (adjust duration + delay if needed)
    const timeout = setTimeout(() => setShowComponents(true), 4500);
    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <Router>
      <div className="App h-screen">
        <IntroAnimation />
        {/* Had to add id's so I can scroll to them without affecting the component id props. Used div for simplicity lol. */}
        {showComponents &&
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="home" className="min-h-screen">
                    <Landing
                      title="TESSA SMITH"
                      description="USC President"
                      image="/images/tessa_smith_landing.jpg"
                    />
                  </div>
                  <div id="about">
                    <About />
                    <Experience />
                  </div>
                  <div id="platform">
                    <Platform />
                  </div>
                  <div id="contact" className="h-1/2">
                    <Contact />
                  </div>
                  <div className="h-1/6">
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="*" element={<NotFound/>}/>

          </Routes>
        }
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
