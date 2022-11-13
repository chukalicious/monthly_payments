import "./App.css";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import axios from "axios";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log("loader: ", loader);

  console.log("App.js: dataFromAPI: ", dataFromAPI);

  const handleSetData = () => {
    setDataFromAPI([...dataFromAPI]);
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/adopters/all`)
      .then((res) => setDataFromAPI(res.data))
      .catch((err) => console.log(err))
      .then(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="box-border">
      <Navbar handleSetData={handleSetData} /> <Home /> <Footer />
    </div>
  );
}

export default App;
