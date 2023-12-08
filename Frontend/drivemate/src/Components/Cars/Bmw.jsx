import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Navbar from "../Navbar";
import { Button } from "@mui/material";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Bmw() {
  const [car, setcar] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:4000/car/bmw");
        setcar(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <img
          style={{ width: "100%", height: "650px" }}
          src="https://wallpapercave.com/wp/wp11580125.jpg"
          alt=""
        />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", marginLeft: "200px", marginTop: "100px" }}>
          {car.map((obj, ind) => (
            <div key={ind}>
              <Card>
                <Card.Img
                  style={{
                    height: "400px",
                    width: "700px",
                    borderRadius: "15px",
                  }}
                  variant="top"
                  src={`http://localhost:4000/images/${obj.image}`}
                />
                <Card.Body>
                  <div style={{ display: "flex" }}>
                    <div>
                      <Card.Text>
                        <b>{obj.model}</b>
                        <br />
                        <b>₹{obj.cost} per day</b>
                      </Card.Text>
                    </div>
                    <Link to={`/booking/${obj._id}`}><Button
                      style={{
                        marginLeft: "500px",
                        width: "100px",
                        height: "50px",
                        marginTop: "20px",
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      book
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
       
      </div>

      <Footer />
    </div>
  );
}

export default Bmw;
