import React from 'react'
import './AboutSection.css'

export default class AboutSection extends React.Component{

  state = {
    content: "Morbi sed est vel tortor volutpat porta vitae eu metus. Sed molestie felis efficitur augue aliquam sagittis. Nullam mollis vulputate nisl, sit amet semper quam. Aenean ultricies nulla a mi tempus, nec feugiat urna elementum. Duis sed justo felis. Quisque turpis elit, tristique id tellus sit amet, euismod ornare lectus. Integer maximus dolor sit amet diam pretium, imperdiet lacinia elit ultricies. Aenean congue ligula vel ex iaculis, id consectetur tortor mattis. Nunc ac mauris neque. Nulla bibendum semper laoreet. Praesent non nibh vel ante laoreet porta vitae eget arcu. Morbi eget feugiat magna. Praesent eget elit sem.",
    firstListItem: "first-about-list-item",
    secondListItem: "about-list-item-no-underline",
    thirdListItem: "about-list-item-no-underline",
    fourthListItem: "about-list-item-no-underline"
  }

  whoAmI = () => {
    this.setState({
      content: "Morbi sed est vel tortor volutpat porta vitae eu metus. Sed molestie felis efficitur augue aliquam sagittis. Nullam mollis vulputate nisl, sit amet semper quam. Aenean ultricies nulla a mi tempus, nec feugiat urna elementum. Duis sed justo felis. Quisque turpis elit, tristique id tellus sit amet, euismod ornare lectus. Integer maximus dolor sit amet diam pretium, imperdiet lacinia elit ultricies. Aenean congue ligula vel ex iaculis, id consectetur tortor mattis. Nunc ac mauris neque. Nulla bibendum semper laoreet. Praesent non nibh vel ante laoreet porta vitae eget arcu. Morbi eget feugiat magna. Praesent eget elit sem.",
      firstListItem: "first-about-list-item",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }


  myStory = () => {
    this.setState({
      content: "Aliquam luctus feugiat porttitor. Vestibulum urna sem, efficitur ac viverra ac, ornare et nibh. Pellentesque porta neque sem, et cursus magna hendrerit a. Aliquam lacinia condimentum felis quis suscipit. Nulla sit amet mauris vel nulla cursus mattis ut ut augue. Sed tincidunt massa ut ipsum dignissim eleifend. Fusce vitae justo ipsum. Suspendisse sagittis eleifend ullamcorper. Fusce luctus tellus at arcu volutpat malesuada.",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item",
      thirdListItem: "about-list-item-no-underline",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myInterests = () => {
    this.setState({
      content: "Ut quis feugiat lorem. Quisque vestibulum eget nibh eu aliquam. Aenean quis aliquam lorem, in tempus velit. In tellus neque, interdum sit amet felis fermentum, tempus imperdiet lectus. Vivamus posuere nisi eu accumsan aliquet. Fusce gravida elit ac sagittis egestas. Praesent luctus ornare commodo. Mauris ut mauris tellus.",
      firstListItem: "first-about-list-item-no-underline",
      secondListItem: "about-list-item-no-underline",
      thirdListItem: "about-list-item",
      fourthListItem: "about-list-item-no-underline"
    })
  }

  myAspirations = () => {
    this.setState({
      content: "Proin faucibus ut turpis et dictum. Suspendisse nec nisi sed sapien viverra luctus eget eu magna. Sed sed nulla augue. Nullam a porttitor odio. Pellentesque accumsan diam nibh. Cras sit amet dolor non justo dignissim hendrerit ac eget justo. Nulla facilisi. Praesent at sapien semper justo commodo euismod id et ante. Cras enim mauris, imperdiet sit amet mattis ac, accumsan eu lectus. Donec est ex, interdum non euismod nec, fermentum id ligula.",
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