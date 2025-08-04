import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProducts = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="details-container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Details;
