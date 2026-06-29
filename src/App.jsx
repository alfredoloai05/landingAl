import './styles/index.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/sections/Services.jsx';
import Process from './components/sections/Process.jsx';
import About from './components/sections/About.jsx';
import CTA from './components/sections/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
