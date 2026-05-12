import './styles/index.css';
import ParticlesCanvas from './components/ParticlesCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/sections/Services.jsx';
import Projects from './components/sections/Projects.jsx';
import Process from './components/sections/Process.jsx';
import About from './components/sections/About.jsx';
import CTA from './components/sections/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <ParticlesCanvas />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
