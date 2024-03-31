import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Bio from './components/about/Bio'
import Skills from './components/experience/Skills';
// import Projects from './components/Projects';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import './styles.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage  />
      <Bio />
      <Skills/>
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;