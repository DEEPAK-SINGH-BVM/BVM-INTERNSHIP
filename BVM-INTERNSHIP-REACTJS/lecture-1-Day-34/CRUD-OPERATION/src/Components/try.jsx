import React, { useState } from "react";

const CrudApp2 = () => {
  const Product = {
    name: "",
  };
 
  const [product, setProduct] = useState(Product);
   console.log(product);
  
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

      <form onSubmit={submitHandle}>
        <input type="text" name="name" placeholder="Name" value={product.name} onChange={inputHandle} />

        <button type="submit">Add</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp2;
