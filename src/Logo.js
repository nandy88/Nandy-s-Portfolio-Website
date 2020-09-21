import React from 'react'
import './Logo.css'
import {Link} from 'react-scroll'

export default class Logo extends React.Component{

  render() {
    const logoContent = "NTR"

    return(
      <div className="logo-wrapper">
        <div className="logo-border">
          <Link
            className="logo-content"
            activeClass="active"
            to="App"
            spy={true}
            smooth={true}
            offset={-90}
            duration= {500}
            >{logoContent}</Link>
        </div>
      </div>
    )
  }
}