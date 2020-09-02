import React from 'react'
import './NavBar.css'

export default class Logo extends React.Component{
  render() {
    return(
      <div className="nav-bar">
        <div className="nav-bar-content">
          <span className="nav-item">PROJECTS</span>
          <span className="nav-item">ABOUT</span>
          <span className="nav-item2">CONTACT</span>
        </div>
      </div>
    )
  }
}