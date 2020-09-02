import React from 'react';
import './App.css';
import Logo from './Logo'
import NavBar from './NavBar'
import Intro from './Intro'
import ProjectTile from './ProjectTile'
import AboutSection from './AboutSection'

function App() {
  return (
    <div className="App">
      <header>
        <a href="http://nandy_rodrigo.surge.sh/"><Logo className="logo" /></a>
        <NavBar className="navbar"/>
      </header>
      <section className="backdrop">
        <aside></aside>
        <Intro className="intro"/>
      </section>
        <h1>Projects</h1>
        <main className="projects">
          <ProjectTile />
        </main>
        <h1>About</h1>
        <main className="about">
          <AboutSection />
        </main>
        <h1>Contact</h1>
        
        <main className="contact">
        </main>
    </div>
  );
}

export default App;
