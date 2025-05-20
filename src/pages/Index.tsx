import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WorkHistory from '@/components/WorkHistory';
import Projects from '@/components/Projects';
import Languages from '@/components/Languages';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkHistory />
        <Projects />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
