import React, { useState } from "react";

const CrudApp = () => {
    const Product = {
        name: "",
        description: "",
        rating: "",
        price: ""
    };

    const [product, setProduct] = useState(Product);
    const [list, setList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function inputHandle(e) {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value }); 
    }

    function submitHandle(e) {
        e.preventDefault();

        if (editIndex === null) {
            setList([...list, product]);
        } else {
        
            setList(list.map((item, index) =>
       
                index === editIndex ? product : item
            ));
            setEditIndex(null);
        }
        setProduct(Product);
    }

    function editItem(index) {
        setProduct(list[index]);
        setEditIndex(index);
    }
     console.log(setEditIndex);

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
                <br /><br />
                <input type="text" name="description" placeholder="Description" value={product.description} onChange={inputHandle}
                /><br /><br />
                <input type="text" name="rating" placeholder="Rating" value={product.rating} onChange={inputHandle}
                /><br /><br />
                <input type="text" name="price" placeholder="Price" value={product.price} onChange={inputHandle}
                /><br /><br />
                <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
            </form>
            <hr />
            {list.map((item, index) => (
                <div key={index}>
                    <p>
                        {item.name} - {item.description} - {item.rating} - ₹{item.price}
                    </p>
                    <button onClick={() => editItem(index)}>Edit</button>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CrudApp;