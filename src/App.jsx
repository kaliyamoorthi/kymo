import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { Cursor } from './components/Cursor';
import { ProgressBar } from './components/ProgressBar';
import { BackgroundMusic } from './components/BackgroundMusic';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { CodingStats } from './components/CodingStats';
import { Projects } from './components/Projects';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { useCursor } from './hooks/useCursor';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useCursor();
  useScrollProgress();
  useScrollReveal();

  return (
    <>
      <Cursor />
      {/* <ProgressBar /> */}
      {/* <BackgroundMusic /> */}
      
      <Navbar /> 
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      {/* <CodingStats /> */}
      <Projects />
      {/* <Reviews /> */}
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
