import React, { useEffect, useState } from "react";
import Navbar2 from "../Navbar2";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {} from "@mui/material";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

function Bookingpage() {
  const [car, setcar] = useState({});

  const { id } = useParams();
  const loggedInCustomerId = localStorage.getItem("customerId");
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/getsinglecar/${id}`
        );
        setcar(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const book = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try {
        const response = await axios.post("http://localhost:4000/booking", {
          customerId: loggedInCustomerId,
          carId: id,
        });
        console.log(response.data);

        swal({
          title: "",
          icon: "success",
        });

        history("/");
      } catch (error) {
        console.error("Error while booking:", error);
        swal({
          title: "",
          text: "Error while booking.",
          icon: "error",
        });
      }
    } else {
      swal({
        title: "",
        text: "Invalid details.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Navbar2 />

      <div>
        <div
          style={{ width: "900px", marginTop: "200px", marginLeft: "350px" }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              overflow: { xs: "auto", sm: "initial" },
            }}
          >
            <Card
              orientation="horizontal"
              sx={{
                width: "75%",
                flexWrap: "wrap",
                [`& > *`]: {
                  "--stack-point": "500px",
                  minWidth:
                    "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                },
              }}
            >
              <CardContent>
                <div style={{ display: "flex" }}>
                  <div>
                    <Typography fontSize="xl" fontWeight="lg">
                      {car && <h3>{car.model && car.model.toUpperCase()}</h3>}
                    </Typography>
                    <Typography
                      level="body-sm"
                      fontWeight="lg"
                      textColor="text.tertiary"
                    >
                      {car.brand}
                    </Typography>
                  </div>
                </div>
                <Sheet
                  sx={{
                    bgcolor: "background.level1",
                    borderRadius: "sm",
                    p: 1.5,
                    my: 1.5,
                    display: "flex",
                    gap: 2,
                    "& > div": { flex: 1 },
                  }}
                >
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Cost
                    </Typography>
                    <Typography fontWeight="lg"> ₹{car.cost}per day</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      year
                    </Typography>
                    <Typography fontWeight="lg">{car.year}</Typography>
                  </div>
                  <div>
                    <Typography level="body-xs" fontWeight="lg">
                      Contact no
                    </Typography>
                    <Typography fontWeight="lg">1800 255 44</Typography>
                  </div>
                </Sheet>

                <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                  <Button
                    onClick={book}
                    variant="contained"
                    style={{
                      color: "white",
                      width: "200px",
                      backgroundColor: "black",
                    }}
                  >
                    Book
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Bookingpage;
