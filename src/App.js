import React from 'react';
import './App.css';
import Logo from './Logo'
import NavBar from './NavBar'
import Intro from './Intro'
import ProjectTile from './ProjectTile'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ProfileImg from "./profile-picture.png"

function App() {
  return (
    <div className="App" id="App">

      <header className="header">
        <div className="header-content">
          <Logo className="logo"/>
          <NavBar className="navbar"/>
        </div>
      </header>

      <section className="backdrop">
        <aside className="cartoonized-image-section"><img className="cartoonized-image" src={ProfileImg} alt=""/></aside>
        <Intro className="intro"/>
      </section>

        <main className="projects" id="projects">
          <h1 className="project-title">Projects</h1>
          <ProjectTile />
        </main>

        <main className="about" id="about">
          <h1 className="about-title">About</h1>
          <AboutSection />
        </main>

        <main className="contact" id="contact">
          <h1 className="contact-title">Contact</h1>
          <ContactSection />
        </main>

        <br/><br/><br/><br/><br/><br/><br/><br/>
        <p className="copyright">Built by Nandy Rodrigo using ReactJS © Nandy Rodrigo 2020. All rights reserved.</p>
        <br/><br/><br/><br/><br/>

    </div>
  );
}

export default App;
