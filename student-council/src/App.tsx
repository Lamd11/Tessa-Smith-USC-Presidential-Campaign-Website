import React from 'react';
import Landing from './components/Landing';
import Promises from './components/Promises';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  const promisesList = [
    "Reduce tuition fees.",
    "Improve mental health services.",
    "Promote diversity and inclusion."
  ];

  return (
    <div className="App">
      <Landing title="Tessa Smith for 2025-2026 USC" description="Vote for change and progress." />
      <Promises promises={promisesList} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
