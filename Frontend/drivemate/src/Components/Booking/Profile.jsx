import { CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";

function Profile() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const customerId = localStorage.getItem("customerId");

        const response = await axios.get(
          `http://localhost:4000/booking/${customerId}`
        );
        const bookingData = response.data.bookings || [];

        const carDetailsData = await Promise.all(
          bookingData.map(async (booking) => {
            const carResponse = await axios.get(
              `http://localhost:4000/getsinglecar/${booking.carId}`
            );
            return {
              ...booking,
              carDetails: carResponse.data,
            };
          })
        );

        setBookings(carDetailsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);
  return (
    <div>
      <Navbar2 />
      <div style={{ marginTop: "150px", marginLeft: "50px", color: "black" }}>
        <h1>Booking History</h1>
      </div>
      <div style={{ marginLeft: "300px", marginTop: "50px" }}>
        {bookings.map((booking, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
              <CardActionArea>
                <CardContent>
                  {booking.carDetails && (
                    <>
                      <Typography variant="h5" color="">
                        {booking.carDetails.model.toUpperCase()}
                      </Typography>
                      <br />
                      <Typography variant="body2" color="">
                        {booking.carDetails.brand.toUpperCase()}
                      </Typography>
                    </>
                  )}
                  <br />
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
