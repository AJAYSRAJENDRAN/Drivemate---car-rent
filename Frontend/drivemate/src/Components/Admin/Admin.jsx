import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function Admin() {
  const [model, setmodel] = useState("");
  const [year, setyear] = useState("");
  const [cost, setcost] = useState("");
  const [brand, setbrand] = useState("");
  const [image, setimage] = useState(null);

  const handlemodel = (e) => {
    setmodel(e.target.value);
  };
  const handleyear = (e) => {
    setyear(e.target.value);
  };
  const handlecost = (e) => {
    setcost(e.target.value);
  };
  const handlebrand = (e) => {
    setbrand(e.target.value);
  };
  const handleImageUpload = (e) => {
    setimage(e.target.files[0]);
  };
  console.log(image);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("model", model);
    formData.append("year", year);
    formData.append("cost", cost);
    formData.append("brand", brand);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
    console.log(submit);
  };
  return (
    <div>
      <div className="regform" style={{ marginTop: "150px" }}>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            id="brand"
            label="Brand"
            variant="standard"
            color="error"
            onChange={handlebrand}
            className="textfield"
          />
          <br />
          <TextField
            id="model"
            label="Model"
            variant="standard"
            color="error"
            onChange={handlemodel}
            className="textfield"
          />
          <br />

          <TextField
            id="year"
            label="Year"
            variant="standard"
            color="error"
            onChange={handleyear}
            className="textfield"
          />
          <br />
          <TextField
            id="cost"
            label="Cost"
            variant="standard"
            color="error"
            onChange={handlecost}
            className="textfield"
          />
          <br />
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <br />

          <Button
            type="submit"
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            onClick={submit}
          >
            Register
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Admin;
