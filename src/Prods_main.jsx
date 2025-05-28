import "./App.css";
import { products } from "./data/data";
import El from "./Element";
import { Link } from "react-router-dom";

const Prods_main1 = () => {
  
  return (
    <div className="Grid container">
      {products.map((prod) => (
        <Link key={prod.id} to={`/detail/${prod.id}`}>
          <El key={prod.id} products={prod} />
        </Link>
      ))}
    </div>
  );
};

export default Prods_main1;
