import { useState, useEffect } from "react";
import "./App.css";
import { products } from "./data/data";
import El from "./Element";
import { Link } from "react-router-dom";
import Router_Father from "./router/Router_M";

const App = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const ppp = async () => {
      try {
        const responce = await fetch("https://dummyjson.com/products");
        const data = await responce.json();
        console.log(data);
        const jsonString = JSON.stringify(data);
        setInfo(jsonString);
        console.log(info);
      } catch (error) {
        console.error(error);
      }
    };
    ppp();
  }, []);

  return (
    <>
      <Router_Father />
    </>
  );
};

export default App;
