import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";
import socialimgs from "../../assets/List.png";
import digital from "../../assets/Link → image.png";
import redhen from "../../assets/Link → wallonie.svg.png";
import fed from "../../assets/Link → federation-wallonie.svg.png";
import socialend from "../../assets/List2.png";
import kcrd from "../../assets/SVG1.png";
import imges from "../../assets/List12.png";
import img from "../../assets/mobileList1.png"
import socialend1 from "../../assets/mobileList.png"

function Footer() {
  return (
    <div className="footer-bg-img">
      <div className=" top-text-2 ">
        <Button className="learn rounded-pill">#KIKK23</Button>
        <p className="talks text-warning follows">FOLLOW US</p>
        <img src={socialimgs} className="social" />
      </div>
      <div className=" space-between-divs">
        <div>
          <p className="text-bottm text-white mb-0">
            With the precious
            <br />
            <span className="text-warning">support of our partners</span>
          </p>
        </div>
        <div className="d-flex gap-4">
          <img src={digital} />
          <img src={redhen} />
          <img src={fed} />
        </div>
      </div>
      <div className="footer-socialimges space-between2">
        <img src={socialend} className="socail1" />
        <img src={socialend1} className="social11" />
      </div>
      <div className="kk kik-footer">
        <div className="footer-end">
        <div className="d-flex align-items-end justify-content-center">
          <img src={kcrd} className="k d-flex align-items-center" />
          <p className="text-white fw-5 pb-2">KIKK Festival was founded by</p>

        </div>
        <div>
        <img src={imges} className=" web-design" />
        <img src={img} className="mobile-design"/>
        </div>
        </div>
        <div className="footer-contact mb-2 text-white">
          <p>©2023 KIKK ASBL</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
