import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
       
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy;  Company. All rights reserved</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
