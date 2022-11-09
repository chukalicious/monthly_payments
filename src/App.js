import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
// import axios from "axios";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="box-border">
      <Navbar /> <Home /> <Footer />
    </div>
  );
}

export default App;
