import React, { useEffect, useState } from 'react';
import Landing from './components/Landing/Landing';
import Promises from './components/Promises';
import Contact from './components/Contact/Contact';
import About from './components/About';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const promisesList = [
    "Reduce tuition fees.",
    "Improve mental health services.",
    "Promote diversity and inclusion."
  ];

  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Show navbar after the intro animation (adjust duration + delay if needed)
    const timeout = setTimeout(() => setShowComponents(true), 4500);
    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="App">
      <IntroAnimation />
      {/* Had to add id's so I can scroll to them without affecting the component id props. Used div for simplicity lol. */}
      {showComponents && <>
        <div id="landing">
          <Landing
            title="TESSA SMITH"
            description="USC President"
            image="/images/tessa_smith_landing.jpg"
          />
        </div>
        <div id="promises">
          <Promises promises={promisesList} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </>}
    </div>
  );
}

export default App;
