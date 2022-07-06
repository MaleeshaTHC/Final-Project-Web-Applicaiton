import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Blue Tshirt",
  price: "$300",
  image: [{url:'https://media.istockphoto.com/vectors/navy-blue-tshirt-vector-for-template-vector-id1133815061?k=20&m=1133815061&s=170667a&w=0&h=i8EJWQ2XYgdhGw3GpOL6oJtE8JdUPKu3OS-nlCfYVfc='}],
  _id: "admin",
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
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </div>
  );
};

export default Home;
