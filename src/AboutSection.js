import React from 'react'
import './AboutSection.css'

export default class AboutSection extends React.Component{

  state = {
    content: "I am Batman!!!",
    firstListItem: "first-about-list-item",
    secondListItem: "about-list-item-no-underline",
    thirdListItem: "about-list-item-no-underline",
    fourthListItem: "about-list-item-no-underline"
  }

  whoAmI = () => {
    this.setState({
      content: "I am Batman!!!",
      firstListItem: "first-about-list-item",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }


  myStory = () => {
    this.setState({
      content: "I am Superman!!!",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myInterests = () => {
    this.setState({
      content: "I am Green Lantern!!!",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myAspirations = () => {
    this.setState({
      content: "I am Flash!!!",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item"
    })
  }


  render() {
    return(
      <div className="about-section">
        <section className="about-fields">
          <ul>
            <li className={this.state.firstListItem} onClick={this.whoAmI}>Who am I?</li>
            <li className={this.state.secondListItem} onClick={this.myStory}>My Story</li>
            <li className={this.state.thirdListItem} onClick={this.myInterests}>My Interests</li>
            <li className={this.state.fourthListItem} onClick={this.myAspirations}>My Aspirations</li>
          </ul>
        </section>
        <div className="about-section-display"><span className="section-content">{this.state.content}</span></div>
      </div>
    )
  }
}