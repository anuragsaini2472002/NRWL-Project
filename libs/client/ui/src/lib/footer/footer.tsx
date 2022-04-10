import styles from './footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="section-footer section">
      <div className="grid-four-column">
        <div className="f-about">
          <h3>About</h3>
          <p>
          Consult a doctor online on DrPlus for any health concern. With trusted 
          doctors across 30+ specialities will ensure all your health queries are answered.
          </p>
        </div>
        {/* <!-- end --> */}
        <div className="f-links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        {/* <!-- end  --> */}
        <div className="f-services">
          <h3>Services</h3>
          <ul>
            <li>
              Easy Online consultations
            </li>
            <li>
              Online Pharmacy
            </li>
            <li>
              Lab Tests as Home
            </li>

            <li>
              Group Health Insurance
            </li>
            <li>
              Covid Care Packages
            </li>
          </ul>
        </div>
        {/* <!-- end  --> */}
        <div className="f-address">
          <h3>Have any Questions?</h3>
          <address>
            <div>
              <p>
                
                London, UK
              </p>
            </div>

            <div>
              <p>
        
                <a href="#"> +91 1111111111 </a>
              </p>
            </div>

            <div>
              <p>
        
                <a href="#">
                  info@drplus.com
                </a>
              </p>
            </div>
          </address>
        </div>
      </div>

      <div className="container">
        <div className="f-social-icons">
          <a href="#" target="_blank">
            <ion-icon className="icons" name="logo-instagram"></ion-icon>
          </a>

          <a href="#" target="_blank">
            <ion-icon className="icons" name="logo-discord"></ion-icon>
          </a>

          <a href="#" target="_blank">
            <ion-icon className="icons" name="logo-youtube"></ion-icon>
          </a>
        </div>

        <div className="f-credits">
          <p>
            Copyright ©2022 All rights reserved by ❤ DrPlus<sup>+</sup>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
