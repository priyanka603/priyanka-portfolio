import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FloatingContactButton from './components/FloatingContactButton';
import SocialBar from './components/SocialBar';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <FloatingContactButton />
      <SocialBar />
    </div>
  );
}

export default App;
