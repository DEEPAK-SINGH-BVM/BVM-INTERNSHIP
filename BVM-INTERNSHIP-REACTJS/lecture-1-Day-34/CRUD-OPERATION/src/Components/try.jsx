import React, { useState } from "react";

const CrudApp2 = () => {
  const Product = {
    name: "",
    description: "",
    rating: "",
    price: "",
  };

  const [product, setProduct] = useState(Product);
  const [list, setList] = useState([]);

  function inputHandle(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function submitHandle(e) {
    e.preventDefault();
    setList([...list, product]);
    setProduct(Product);
  }

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          placeholder="Name"
        //   value={product.name}
          onChange={inputHandle}
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
        //   value={product.description}
          onChange={inputHandle}
        />
        <br />
        <br />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
        //   value={product.rating}
          onChange={inputHandle}
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
        //   value={product.price}
          onChange={inputHandle}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      <hr />
      {list.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} - {item.description} - {item.rating} - ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CrudApp2;
