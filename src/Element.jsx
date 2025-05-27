import "./App.css";

const El = ({ products }) => {
  return (
    <div className="Child">
      <img src={products.thumbnail} alt="" />
      <h2>{products.title}</h2>
      <div className="content">
        <p>{products.brand}  <span>{products.category}</span></p>
        <p>{products.price}$</p>
      </div>
      <h6>{products.description}</h6>
    </div>
  );
};

export default El;
