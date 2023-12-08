import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

function Footer() {
  return (
    <div
      style={{ height: "300px", backgroundColor: "black", marginTop: "50px" }}
    >
      <div className="footer">
        <div className="footer-1" style={{ marginTop: "50px", color: "black" }}>
          <h3>Drivemate</h3>
          <p>
            All the basic services at your <br />
            fingertips
          </p>
        </div>
        <div className="footer-parts" style={{ marginLeft: "300px" }}>
          <h3>About</h3>
          <a href="">Features</a>
          <br />
          <a href="">Pricing</a>
          <br />
          <a href="">Support</a>
          <br />
          <a href="">Forums</a>
        </div>
        <div className="footer-parts">
          <h3>Project</h3>
          <a href="">Contribute</a>
          <br />
          <a href="">Media assets</a>
          <br />
          <a href="">Changelog</a>
          <br />
          <a href="">Releases</a>
        </div>
        <div className="footer-parts">
          <h3>Community</h3>
          <a href="">Join Discord</a>
          <br />
          <a href="">Follow on Twitter</a>
          <br />
          <a href="">Email newsletter</a>
          <br />
          <a href="">GitHub discussions</a>
        </div>
      </div>
      <div className="gap" />
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "100px", color: "white" }}>
          <p>
            {" "}
            <CopyrightIcon />
            2023 Drivemate rights reserved{" "}
          </p>
        </div>
        <div className="icons" style={{ marginLeft: "800px" }}>
          <a href="">
            {" "}
            <TwitterIcon style={{ marginRight: "10px" }} />
          </a>
          <a href="">
            {" "}
            <WhatsAppIcon style={{ marginRight: "10px" }} />
          </a>
          <a href="">
            {" "}
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
