import React, { useEffect, useState } from 'react';
import Landing from './components/Landing/Landing';
import Platform from './components/Platform/Platform';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import IntroAnimation from './components/IntroAnimation';
import Footer from './components/Footer';

function App() {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Show navbar after the intro animation (adjust duration + delay if needed)
    const timeout = setTimeout(() => setShowComponents(true), 4500);
    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="App h-screen">
      <IntroAnimation />
      {/* Had to add id's so I can scroll to them without affecting the component id props. Used div for simplicity lol. */}
      {showComponents &&
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
          <div>
            <Footer />
          </div>
        </>
      }
    </div>
  );
}

export default App;
