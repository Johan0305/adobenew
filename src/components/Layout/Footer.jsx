import React from "react";
import logofoo from "../../assets/logo-footer-adobe.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo-adobe-footer">
        <img src={logofoo} alt="logo-adobe-footer" width={120} />
      </div>
      <div className="text-copyright">
        <p>Copyright © 2022 Adobe. All rights reserved. Privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
