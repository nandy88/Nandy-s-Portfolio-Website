import React from 'react'
import './ProjectTile.css'
import Picture1 from "./project1.png"
import Picture2 from "./project2.png"
import Picture3 from "./project3.png"
import Picture4 from "./project4.png"

export default class ProjectTile extends React.Component{
  render() {
    return(
      <div className="nandys-projects">
        <article className="project-tile">
          <a href="https://nandy88.github.io/project1-TicTacToe/" target="_blank"><img className="img1" src={Picture1} alt=""/></a>
          <div>
            <h2 className="project-names">Tic-Tac-Toe</h2> 
            <p className="project-description">A classic favourite played using colours.</p>
          </div>
        </article>
        <article className="project-tile">
          <a href="https://fathomless-sea-02094.herokuapp.com/" target="_blank"><img className="img2" src={Picture2} alt=""/></a>
          <div>
            <h2 className="project-names">Gotei 13</h2> 
            <p className="project-description">Which Captain of the Soul Society are you?</p>
          </div>
        </article>
        <article className="project-tile">
          <a href="https://floating-cliffs-04957.herokuapp.com/index.html" target="_blank"><img className="img3" src={Picture3} alt=""/></a>
          <div>
            <h2 className="project-names">The Happy Path</h2> 
            <p className="project-description">Collaborative project to to provide Australians with some positive support throughout the COVID crisis. </p>
          </div>
        </article>
        <article className="project-tile">
          <a href="http://nandy_rodrigo.surge.sh/"><img className="img4" src={Picture4} alt=""/></a>
          <div>
            <h2 className="project-names">Portfolio Website</h2> 
            <p className="project-description">My own personal site designed by yours truly</p>
          </div>
        </article>
      </div>
    )
  }
}
