import { Link, useParams } from "react-router-dom";
import "./App.css";
import { products } from "./data/data";

const Sample = () => {
  const { id } = useParams();
  let current = products[id - 1];
  console.log(current);
  return (
    <div className="parent">
      <div className="div1">
        <h2>{current.title}</h2>
        <p>{current.category}</p>
      </div>
      <div className="div2">
        <h2 className="CommentsH2">Comments</h2>
        <div className="comments1">
          <h2 className="commen1">{current.reviews[0].comment}</h2>
          <p className="rating1">{current.reviews[0].rating}</p>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/star-emoji.png"
            alt="star-emoji"
          />
          <div className="p1">
            <p className="reviewerName1">{current.reviews[0].reviewerName}</p>
            <p className="reviewerEmail1">{current.reviews[0].reviewerEmail}</p>
          </div>
        </div>
        <div className="comments2">
          <h2 className="commen2">{current.reviews[1].comment}</h2>
          <p className="rating2">{current.reviews[1].rating}</p>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/star-emoji.png"
            alt="star-emoji"
          />
          <div className="p2">
            <p className="reviewerName2">{current.reviews[1].reviewerName}</p>
            <p className="reviewerEmail2">{current.reviews[1].reviewerEmail}</p>
          </div>
        </div>
        <div className="comments3">
          <h2 className="commen3">{current.reviews[2].comment}</h2>
          <p className="rating3">{current.reviews[2].rating}</p>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/star-emoji.png"
            alt="star-emoji"
          />
          <div className="p3">
            <p className="reviewerName3">{current.reviews[2].reviewerName}</p>
            <p className="reviewerEmail3">{current.reviews[2].reviewerEmail}</p>
          </div>
        </div>
      </div>
      <div className="div3">
        <p className="decription">{current.description}</p>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/emoji/48/star-emoji.png"
          alt="star-emoji"
        /><p className="rating">{current.rating}</p>
      </div>
      <div className="div4">
        <img src={current.thumbnail} alt="" />
      </div>
      <div className="div5">
        <article>
          <span>price</span>
          <p className="price">{current.price}</p>
        </article>
        <article>
          <span>discountPercentage</span>
          <p className="discountPercentage">{current.discountPercentage}%</p>
        </article>
        <article>
          <span>tags</span>
          <p className="tags">{current.tags}</p>
        </article>
        <article>
          <span>brand</span>
          <p className="brand">{current.brand?current.brand:'none'}</p>
        </article>
      </div>
      <div className="div6">
        {" "}
        <img src={current.meta.qrCode} alt="" />
      </div>

      <Link to="/" className="sdfds">
        <h2>BACK</h2>
      </Link>
    </div>
  );
};

export default Sample;
