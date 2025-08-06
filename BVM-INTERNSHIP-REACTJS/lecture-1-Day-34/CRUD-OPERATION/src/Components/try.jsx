import React, { useState } from "react";

const CrudApp = () => {
    const Product = {
        name: "",
      
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

    function deleteItem(index) {
        list.splice(index, 1);
 
        setList([...list]);
    }
     function deleteItem(index) {
        const remainingItems = list.filter((item, currentIndex) => currentIndex !== index);
        setList(remainingItems); 
    }

    return (
        <div>
            <h2>Submit Form</h2>
            <form onSubmit={submitHandle}>
                <input type="text" name="name" placeholder="Name" value={product.name} onChange={inputHandle} />
                <button type="submit">Add</button>
            </form>
            <hr />
            {list.map((item, index) => (
                <div key={index}>
                    <p>
                        {item.name} 
                    </p>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CrudApp;