import React from 'react'
import './AboutSection.css'

export default class AboutSection extends React.Component{

  state = {
    content: ""
  }

  whoAmI = () => {
    this.setState({
      content: "I am Batman!!!"
    })
  }


  myStory = () => {
    this.setState({
      content: "I am Superman!!!"
    })
  }

  myInterests = () => {
    this.setState({
      content: "I am Green Lantern!!!"
    })
  }

  myAspirations = () => {
    this.setState({
      content: "I am Flash!!!"
    })
  }


  render() {
    return(
      <div className="about-section">
        <section className="about-fields">
          <ul>
            <li className="first-about-list-item" onClick={this.whoAmI}>Who am I?</li>
            <li className="about-list-item" onClick={this.myStory}>My Story</li>
            <li className="about-list-item" onClick={this.myInterests}>My Interests</li>
            <li className="about-list-item" onClick={this.myAspirations}>My Aspirations</li>
          </ul>
        </section>
        <div className="about-section-display"><span className="section-content">{this.state.content}</span></div>
      </div>
    )
  }
}