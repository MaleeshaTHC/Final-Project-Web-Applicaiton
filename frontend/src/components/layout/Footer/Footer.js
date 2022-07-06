import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download our AP4</h4>
        <p>Download APP for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>teech</h1>
        <p>High quality is our first priority</p>
        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow us</h4>
        <a href="https://www.linkedin.com/in/chathumini-maleesha-39a016215">
          linkedin
        </a>
        <a href="https://www.linkedin.com/in/chathumini-maleesha-39a016215">
          Youtube
        </a>
        <a href="https://www.linkedin.com/in/chathumini-maleesha-39a016215">
          Facebook
        </a>
        <a href="https://www.linkedin.com/in/chathumini-maleesha-39a016215">
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
