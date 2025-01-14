import React from 'react';
import Landing from './components/Landing/Landing';
import Promises from './components/Promises';
import Contact from './components/Contact';
import About from './components/About';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const promisesList = [
    "Reduce tuition fees.",
    "Improve mental health services.",
    "Promote diversity and inclusion."
  ];

  return (
    <div className="App">
      <IntroAnimation />
      {/* Had to add id's so I can scroll to them without affecting the component id props. Used div for simplicity lol. */}
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
    </div>
  );
}

export default App;
