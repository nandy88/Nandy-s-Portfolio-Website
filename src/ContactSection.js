
import React from 'react'
import ResumePdf from './Nandy-Rodrigo-CV-draft.pdf';
import './ContactSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default class ContactSection extends React.Component{


  render() {
    return(
      <div className="contact-wrapper">
        <div className="resume-wrapper">
          <p className="contact-text">Quisque hendrerit, augue a aliquet dapibus, leo risus placerat lorem, eu porta magna orci eget est. Fusce dignissim ornare ante vel tincidunt. Sed commodo leo id sem aliquet interdum. Donec malesuada ullamcorper orci nec auctor. Phasellus consequat ligula in leo vehicula varius. Ut eget eros dolor. Nunc aliquet tempus nisl, sit amet pretium nunc dapibus eu. Suspendisse ac neque vitae quam pretium sollicitudin sagittis non leo. Vestibulum laoreet molestie nibh, quis vestibulum nunc laoreet eget. Integer eget enim imperdiet orci venenatis aliquam. Donec semper justo nec tellus elementum iaculis. Suspendisse lacinia, justo ut pulvinar rutrum, elit lorem facilisis sem, vel egestas sapien justo vitae felis. Nullam ultricies erat non purus iaculis dapibus.</p>
          <br/>
          <span className="download-resume-link">
            <a href={ResumePdf} target="_blank" className="downloadable-link">DOWLOAD RESUME</a>
          </span>
        </div>
        <section className="contact-fields">
          <div className="mobile">
          <span><FontAwesomeIcon href="" icon={faMobileAlt} size="2x"/></span>
            <p><span>Mobile:</span> 0430 045 676</p>
          </div>
          <div className="email">
            <a href="mailto:nandy.rodrigo@gmail.com"><span><FontAwesomeIcon href="" icon={faEnvelope} size="2x"/></span></a>
            <p><span>Email:</span> nandy.t.rodrigo@gmail.com</p>
          </div>
          <div className="github">
            <a href="https://github.com/nandy88" target="_blank"><FontAwesomeIcon href="" icon={faGithub} size="2x"/></a>
            <p><span>GitHub:</span> https://github.com/nandy88</p>
          </div>
          <div className="linkedin">
            <a href="https://au.linkedin.com/in/nandy-rodrigo" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
            <p><span>LinkedIn:</span> https://au.linkedin.com/in/nandy-rodrigo</p>
          </div>
        </section>
      </div>
    )
  }

}