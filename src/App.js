import "./App.css";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import axios from "axios";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/adopters/all`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box-border">
      <Navbar /> <Home /> <Footer />
    </div>
  );
}

export default App;
