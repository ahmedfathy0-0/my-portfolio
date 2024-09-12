import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
