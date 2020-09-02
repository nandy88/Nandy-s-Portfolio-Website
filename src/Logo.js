import React from 'react'
import './Logo.css'

export default class Logo extends React.Component{
  state = {
    
  }

  render() {
    const logoContent = "NTR"
    return(
      <div className="logo">
        <span className="logo-content">{logoContent}</span>
      </div>
    )
  }
}