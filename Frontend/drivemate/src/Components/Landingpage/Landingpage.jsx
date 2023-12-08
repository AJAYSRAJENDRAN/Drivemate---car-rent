import React from "react";
import Navbar from "../Navbar";
import "./Landingpage.css";
import Cartypes from "../Cartypes/Cartypes";
import Footer from "../Footer";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <img
        style={{ width: "100%", height: "800px" }}
        src="https://wallpapercave.com/wp/wp8301190.jpg"
        alt=""
      />
      <b>
        {" "}
        <h1 className="h3">
          Experience the Drive <br /> Rent. Explore. Enjoy.
        </h1>
      </b>
      <Cartypes />
      <Footer />
    </div>
  );
}

export default Landingpage;
