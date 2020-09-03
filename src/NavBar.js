import React from 'react'
import './NavBar.css'


export default class NavBar extends React.Component{
  
  render() {
    return(
      <div className="nav-content">
        <div className="nav-bar">
          <span className="nav-item">PROJECTS</span>
          <span className="nav-item">ABOUT</span>
          <span className="nav-item2">CONTACT</span>
        </div>
      </div>
    )
  }
}