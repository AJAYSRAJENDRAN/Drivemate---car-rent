import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

function Navbar() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [scrollPosition, setScrollPosition] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const userName = localStorage.getItem("username");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const landingPageHeight = 580;
  const isLandingPage = scrollPosition < landingPageHeight;
  const navbarColor = isLandingPage ? "rgba(0, 0, 0, 0)" : "#000000";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("customerId");
    navigate("/login");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: navbarColor,
            transition: "background-color 0.3s ease",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              Drivemate
            </Typography>

            {userName ? (
              <div>
                <Button
                  style={{ color: "white" }}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {userName}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link
                    to={"/profile"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <MenuItem>Profile</MenuItem>
                  </Link>

                  <MenuItem onClick={handlelogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <>
                <Link to="/login">
                  {" "}
                  <Button color="inherit" style={{ color: "white" }}>
                    Login
                  </Button>{" "}
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
