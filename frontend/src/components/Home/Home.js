import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Blue Tshirt",
  price: "$300",
  _id: "abishek",
};

const Home = () => {
  return (
    <div>
      <div className="banner">
        <p>Welcome</p>
        <h1>Find Amazing Education Here</h1>
        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Product</h2>
      <div className="container" id="container">
        <Product product={product} />
      </div>
    </div>
  );
};

export default Home;
