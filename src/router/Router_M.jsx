import { Routes, Route } from "react-router";
import App from "../App";
import Prods_main1 from '../Prods_main'
import El from "../Element";
import Sample from "../Sample";

const Router_Father = () => {
  return (
    <Routes>
      <Route path="/" element={<Prods_main1/>} />

      <Route path="/detail/:id" element={<Sample />} />
    </Routes>
  );
};

export default Router_Father;
