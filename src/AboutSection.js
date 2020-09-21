import React from 'react'
import './AboutSection.css'

export default class AboutSection extends React.Component{

  state = {
    content: "I am a Software Engineer with experience in React, Sinatra, Node.js and much more. With a focus on creative problem solving, I strive to deliver exceptional results at every opportunity. Both intelligent and well mannered, my aim is to continuously improve my skills whilst working towards the best outcome for customers, clients and peers.",
    firstListItem: "first-about-list-item",
    secondListItem: "about-list-item-no-underline",
    thirdListItem: "about-list-item-no-underline",
    fourthListItem: "about-list-item-no-underline"
  }

  whoAmI = () => {
    this.setState({
      content: "I am a Software Engineer with experience in React, Sinatra, Node.js and much more. With a focus on creative problem solving, I strive to deliver exceptional results at every opportunity. Both intelligent and well mannered, my aim is to continuously improve my skills whilst working towards the best outcome for customers, clients and peers.",
      firstListItem: "first-about-list-item",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }


  myStory = () => {
    this.setState({
      content: "As most of my working career thus far has been centered around Facilities Management, I have always worked as part of a larger team and have excelled in that environment. However, feeling unchallenged in my position and seeking new avenues of growth, I began looking into technology and was drawn to Software Engineering. Having previously completed a Materials Engineering degree at Monash University, I had already demonstrated the ability to learn advanced subjects which convinced me to undertake the Software Engineering Immersive course with General Assembly. Having completed this intensive program, I am now looking for new challenges in Software and Web development.",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myInterests = () => {
    this.setState({
      content: "Software Development: HTML, CSS, Javascript, Node.js, React, SQL and Sinatra",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myAspirations = () => {
    this.setState({
      content: "I am looking for developer role with a forward-thinking and innovative company with a people focused culture. I look forward to hearing from you.",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item"
    })
  }


  render() {
    return(
      <div className="nandys-about">
          <ul className="about-list">
            <li className={this.state.firstListItem} onClick={this.whoAmI}>Who am I</li>
            <li className={this.state.secondListItem} onClick={this.myStory}>My Story</li>
            <li className={this.state.thirdListItem} onClick={this.myInterests}>My Interests</li>
            <li className={this.state.fourthListItem} onClick={this.myAspirations}>My Aspirations</li>
          </ul>
        <div className="about-section-display"><span className="section-content">{this.state.content}</span></div>
      </div>
    )
  }
}