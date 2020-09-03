import React from 'react'
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default class Intro extends React.Component{
  render() {
    return(
      <div className="wrapper">
        <h1 className="name">Nandy Rodrigo</h1>
        <h2 className="job-title">Software Developer</h2>
        <div className="icons">
          <a href="https://github.com/nandy88" target="_blank"><FontAwesomeIcon href="" icon={faGithub} size="3x"/></a>
          <a href="https://au.linkedin.com/in/nandy-rodrigo" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
        </div>
      </div>
    )
  }
}