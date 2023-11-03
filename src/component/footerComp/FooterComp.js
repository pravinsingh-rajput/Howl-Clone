import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <footer>
      <InstagramIcon className="instaicon" />
      <ul className="bottomlist">
        <li>PRESS</li>
        <li>CAREERS</li>
        <li>JOIN THE PACK</li>
      </ul>
      <div className="newsletter">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Sign up to our newsletter"
        />
        <p className="enterArrow">&rarr; </p>
      </div>
      <p className="copright">
        All rights reserved Designed. developed & povvered by HOWL Digital
        Agency
      </p>
    </footer>
  );
};

export default FooterComp;
