import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "../Landingpage/Landingpage";
import Cardisplay from "../Admin/Cardisplay";
import Audi from "../Cars/Audi";
import Admin from "../Admin/Admin";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Bmw from "../Cars/Bmw";
import Lexus from "../Cars/Lexus";
import Minicooper from "../Cars/Minicooper";
import Mercedes from "../Cars/Mercedes";
import Porsche from "../Cars/Porsche";
import Bookingpage from "../Booking/Bookingpage";
import Profile from "../Booking/Profile";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="/admin" element={<Cardisplay />}></Route>
          <Route path="/audi" element={<Audi />}></Route>
          <Route path="/createadmin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/bmw" element={<Bmw />}></Route>
          <Route path="/lexus" element={<Lexus />}></Route>
          <Route path="/minicooper" element={<Minicooper />}></Route>
          <Route path="/mercedes" element={<Mercedes />}></Route>
          <Route path="/porsche" element={<Porsche />}></Route>
          <Route path="/booking/:id" element={<Bookingpage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
