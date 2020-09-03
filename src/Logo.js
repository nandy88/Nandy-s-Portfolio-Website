import React from 'react'
import './Logo.css'

export default class Logo extends React.Component{

  render() {
    const logoContent = "NTR"

    return(
      <div className="logo-wrapper">
        <div className="logo-border">
          <span className="logo-content">{logoContent}</span>
        </div>
      </div>
    )
  }
}