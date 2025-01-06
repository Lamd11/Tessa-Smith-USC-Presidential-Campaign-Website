import React from 'react';
import Landing from './components/Landing/Landing';
import Promises from './components/Promises';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar/Navbar';
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
      <Navbar />
      <Landing title="TESSA SMITH" description="USC President" image="/images/tessa_smith_landing.jpg"/>
      <Promises promises={promisesList} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
