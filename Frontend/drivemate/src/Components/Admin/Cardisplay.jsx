import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cardisplay() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getcar");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleremove = (id) => {
    axios.delete(`http://localhost:4000/delete/${id}`).then(() => {
      setCars(cars.filter((cars) => cars._id !== id));
    });
  };

  return (
    <div>
      {cars.map((car, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`http://localhost:4000/images/${car.image}`}
                alt={car.model}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.model} ( {car.brand})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {car.year} - ${car.cost}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button>edit</Button>
            <Button onClick={() => handleremove(car._id)}>delete</Button>
          </Card>
        </div>
      ))}
      <Link to="/createadmin">
        {" "}
        <Button>Create</Button>
      </Link>
    </div>
  );
}

export default Cardisplay;
