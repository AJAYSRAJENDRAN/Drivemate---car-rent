import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./Cartype.css";
import { Link } from "react-router-dom";

function Cartypes() {
  return (
    <div>
      <div style={{ marginTop: "150px", textAlign: "center" }}>
        <b>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#333",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            First Class Car Rental Services
          </h1>
        </b>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          style={{ marginLeft: "150px", marginTop: "100px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <div>
              <Link to="bmw">
                <Typography
                  variant="h4"
                  component="div"
                  style={{
                    position: "absolute",
                    top: "300px",
                    left: "20px",
                    color: "white",
                  }}
                >
                  <b>BMW</b>
                </Typography>

                <CardMedia
                  component="img"
                  height="350"
                  image="https://wallpapercave.com/wp/wp11826465.jpg"
                  alt="green iguana"
                />
              </Link>
            </div>
          </CardActionArea>
        </Card>

        <Card
          style={{ marginLeft: "90px", marginTop: "100px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <Link to="/mercedes">
              <Typography
                variant="h6"
                component="div"
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "20px",
                  color: "white",
                }}
              >
                <b>MERCEDES BENZ</b>
              </Typography>

              <CardMedia
                component="img"
                height="350"
                image="https://wallpapercave.com/wp/wp12048044.jpg"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
        </Card>

        <Card
          style={{ marginLeft: "90px", marginTop: "100px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <Link to="/porsche">
              <Typography
                variant="h4"
                component="div"
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "20px",
                  color: "white",
                }}
              >
                <b>PORSCHE</b>
              </Typography>

              <CardMedia
                component="img"
                height="350"
                image="https://wallpapercave.com/wp/wp11993153.jpg"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
        </Card>

        <Card
          style={{ marginLeft: "150px", marginTop: "50px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <Link to="/audi">
              <Typography
                variant="h4"
                component="div"
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "20px",
                  color: "white",
                }}
              >
                <b>AUDI</b>
              </Typography>

              <CardMedia
                component="img"
                height="350"
                image="https://grandcarrentalv1.b-cdn.net/wp-content/uploads/2017/01/Audi-A4-Avant-1-960x550.jpg"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
        </Card>

        <Card
          style={{ marginLeft: "90px", marginTop: "50px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <Link to="/lexus">
              <Typography
                variant="h4"
                component="div"
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "20px",
                  color: "white",
                }}
              >
                <b>LEXUS</b>
              </Typography>

              <CardMedia
                component="img"
                height="350"
                image="https://wallpapercave.com/wp/wp9837150.jpg"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
        </Card>

        <Card
          style={{ marginLeft: "90px", marginTop: "50px" }}
          sx={{ maxWidth: 345 }}
        >
          <CardActionArea>
            <Link to="/minicooper">
              <Typography
                variant="h4"
                component="div"
                style={{
                  position: "absolute",
                  top: "300px",
                  left: "20px",
                  color: "white",
                }}
              >
                <b>MINI</b>
              </Typography>

              <CardMedia
                component="img"
                height="350"
                image="https://wallpapercave.com/wp/wp2628522.jpg"
                alt="green iguana"
              />
            </Link>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Cartypes;
