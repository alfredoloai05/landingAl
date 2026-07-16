import './styles/index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/sections/Services.jsx';
import Process from './components/sections/Process.jsx';
import CTA from './components/sections/CTA.jsx';
import Footer from './components/Footer.jsx';
import ExperienceChrome from './components/ExperienceChrome.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import { useMotion } from './hooks/useMotion.js';

export default function App() {
  useMotion();

  return (
    <>
      <IntroLoader />
      <ExperienceChrome />
      <Navbar />
      <main>
        <Hero />
        <Process />
        <CTA />
        <Services />
      </main>
      <Footer />
    </>
  );
}
