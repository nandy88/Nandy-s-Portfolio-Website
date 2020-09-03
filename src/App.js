import React from 'react';
import './App.css';
import Logo from './Logo'
import NavBar from './NavBar'
import Intro from './Intro'
import ProjectTile from './ProjectTile'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'

function App() {
  return (
    <div className="App">

      <header className="header">
        <div className="header-content">
          <a href="http://nandy_rodrigo.surge.sh/"><Logo className="logo" /></a>
          <NavBar className="navbar"/>
        </div>
      </header>

      <section className="backdrop">
        <aside className="cartoonized-image"><img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f2/Iron_Man_Armor_-_Mark_LXXXV.png/revision/latest/top-crop/width/360/height/450?cb=20190401222437" alt=""/></aside>
        <Intro className="intro"/>
      </section>

        <main className="projects">
          <h1 className="project-title">Projects</h1>
          <ProjectTile />
        </main>

        <main className="about">
          <h1 className="about-title">About</h1>
          <AboutSection />
        </main>

        <main className="contact">
          <h1 className="contact-title">Contact</h1>
          <ContactSection />
        </main>

    </div>
  );
}

export default App;
