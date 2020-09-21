import React from 'react'
import './NavBar.css'
import {Link} from 'react-scroll'


export default class NavBar extends React.Component{
  
  render() {
    return(
      <div className="nav-content">
        <div className="nav-bar">
          <Link
            className="nav-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration= {500}
            >PROJECTS</Link>
          <Link
              className="nav-item"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration= {500}
            >ABOUT</Link>
          <Link
              className="nav-item2"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration= {500}
            >CONTACT</Link>
        </div>
      </div>
    )
  }
}
