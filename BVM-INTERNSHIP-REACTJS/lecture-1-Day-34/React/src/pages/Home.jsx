import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(({ id, title , image}) => (
        <div key={id} className="product-item">
          <img src={image} alt={title} className="product-image" />
          <Link to={`/product/${id}`} className="product-link">{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
