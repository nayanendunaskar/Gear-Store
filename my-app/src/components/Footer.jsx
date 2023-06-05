import "./Footer.css";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export function Footer(){
  return(
      <div>
           <footer>
          <div className="footer">

              <div className="help-section">
                  <div className="section-header"><strong>Help</strong></div>
                  
                  <div>Contact us</div>
                  <div>FAQ</div>
                  <div>Size guide</div>
                  <div>Sale Exclusions</div>

              </div>

              <div className="help-section">
                  <div className="section-header"><strong>Help</strong></div>
                 
                  <div>Contact us</div>
                  <div>FAQ</div>
                  <div>Size guide</div>
                  <div>Sale Exclusions</div>
              </div>

              <div className="help-section">
                  <div className="section-header"><strong>Help</strong></div>
                  
                  <div>Contact us</div>
                  <div>FAQ</div>
                  <div>Size guide</div>
                  <div>Sale Exclusions</div>
              </div>

              <div className="help-section">
                  <div className="section-header"><strong>Help</strong></div>
                  <div>Contact us</div>
                  <div>FAQ</div>
                  <div>Size guide</div>
                  <div>Sale Exclusions</div>
              </div> 

              <div className="about-us-section">
                  <div className="our-logo">GearStore</div>
                  <p className="about-us-content">Made with ❤️ by <strong>Nayanendu Naskar</strong> @{new Date().getFullYear()}</p>
                  <div className="subFooterContainer">

                  <div>
                    <a
                      href="https://twitter.com/nayanendunaskar"
                      target="_blank">
                      <FaTwitter className="footerPills fab fa-twitter" />
                    </a>
                    </div>

                      <div>
                    <a
                      href="https://www.linkedin.com/in/nayanendu-naskar-802344245/"
                      target="_blank">
                      <FaLinkedin className="footerPills fab fa-linkedin" />
                    </a>
                    </div>

                      <div>
                    <a
                      href="https://github.com/nayanendunaskar"
                      target="_blank">
                      <FaGithub className="footerPills fab fa-github" />
                    </a>
                    </div>
                  </div>
              </div>

          </div>
      </footer>

      </div>
  )
}