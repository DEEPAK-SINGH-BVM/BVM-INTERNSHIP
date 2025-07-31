import React, { useState, useRef } from "react";

const CrudApp = () => {
    const Product = {
        firstName: "",
        lastName: "",
        rollNo: "",
        dob: "",
        country: "",
        gender: "",
        language: [],
        image: []
    };
    //
    const fileInputRef = useRef();
    //  Store and update form input data.
    const [product, setProduct] = useState(Product);
    //  Maintain list of submitted entries.
    const [list, setList] = useState([]);
    //  Track which item is edited.
    const [editIndex, setEditIndex] = useState(null);
    // Error handle
    const [error, setErrors] = useState({})
    // fOR Error Msg
    const validate = (data) => {
        let errors = {}
        if (!data.firstName) errors.firstName = "FirstName Is Required";
        if (!data.lastName) errors.lastName = "lastName Is Required";
        if (!data.rollNo) errors.rollNo = "rollNo Is Required";
        if (!data.dob) errors.dob = "dob Is Required";
        if (!data.country) errors.country = "country Is Required";
        if (!data.gender) errors.gender = "gender Is Required";
        if (data.language.length == 0) errors.language = "At list 1 language Required";
        return errors
    }
    function inputHandle(e) {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setProduct(prev => ({
                ...prev,
                [name]: checked

                    ? [...prev[name], value]
                    : prev[name].filter(item => item !== value)
            }));
        }
        else {
            // Handle regular input
            setProduct({ ...product, [name]: value });
        }
    }
    function submitHandle(e) {
        e.preventDefault();
        const errors = validate(product);
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }
        if (editIndex === null) {
            setList([...list, product]);
        } else {
            // Update product at editIndex using map
            setList(list.map((item, index) =>
                //updated : Org 
                index === editIndex ? product : item
            ));
            setEditIndex(null);// Exit edit mode
        }

        setProduct(Product); // Clear form
        setErrors({});   // Clear errors
        fileInputRef.current.value = null // clear Img
    }
    function editItem(index) {
        console.log(index);
        setProduct(list[index]);
        setEditIndex(index);
    }
    function deleteItem(index) {
        const remainingItems = list.filter((_, currentIndex) => currentIndex !== index);
        setList(remainingItems);
    }
    function handleImageChange(e) {
        const files = [...e.target.files];
        const imageData = [];

        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                imageData.push(reader.result);
                if (imageData.length === files.length) {
                    setProduct(prev => ({
                        ...prev,
                        image: [...prev.image, ...imageData]
                    }));
                }
            };
            reader.readAsDataURL(file);
        });
    }
    const headers = [
        "First Name",
        "Last Name",
        "Roll No",
        "Date of Birth",
        "Country",
        "Gender",
        "Language",
        "Image",
        "Actions",
    ];
    return (
        <div>
            <form onSubmit={submitHandle} style={{ textAlign: "center" }}>
                <h2>React CRUD</h2>
                <input type="text" name="firstName" placeholder="FirstName" value={product.firstName} onChange={inputHandle} />
                <br /> <span style={{ color: "red" }}>{error.firstName}</span><br />
                <input type="text" name="lastName" placeholder="lastName" value={product.lastName} onChange={inputHandle}
                /><br /> <span style={{ color: "red" }}>{error.lastName}</span><br />
                <input type="text" name="rollNo" placeholder="rollNo" value={product.rollNo} onChange={inputHandle}
                /><br /> <span style={{ color: "red" }}>{error.rollNo}</span><br />
                <input type="date" name="dob" placeholder="dob" value={product.dob} onChange={inputHandle}
                /><br /><span style={{ color: "red" }}>{error.dob}</span><br />
                <select name="country" value={product.country} onChange={inputHandle}>
                    <option value="" disabled selected hidden >Select Country</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                </select><br /> <span style={{ color: "red" }}>{error.country}</span><br />
                Gender:
                <input type="radio" name="gender" value='male' checked={product.gender === "male"} onChange={inputHandle} />Male
                <input type="radio" name="gender" value='female' checked={product.gender === "female"} onChange={inputHandle} />Female
                <input type="radio" name="gender" value='other' checked={product.gender === "other"} onChange={inputHandle} />Other
                <br /> <span style={{ color: "red" }}>{error.gender}</span><br />
                Language:
                <input type="checkbox" name="language" value='English' checked={product.language.includes("English")} onChange={inputHandle} />English
                <input type="checkbox" name="language" value='Hindi' checked={product.language.includes("Hindi")} onChange={inputHandle} />Hindi
                <input type="checkbox" name="language" value='Gujarati' checked={product.language.includes("Gujarati")} onChange={inputHandle} />Gujarati
                <br /> <span style={{ color: "red" }}>{error.language}</span><br />
                <input type="file" onChange={handleImageChange} ref={fileInputRef} multiple />
                {/* Submit */}
                <br /><br />
                <button type="submit">{editIndex === null ? "Add" : "Update"}</button>
            </form>
            <hr />
            <table border="1"  >
                {/*Reusable Component*/}
                <thead >
                    <tr>
                        {headers.map((headers, index) => {
                            return <th key={index}>{headers}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.dob}</td>
                            <td>{item.country}</td>
                            <td>{item.gender}</td>
                            <td>{item.language}</td>
                            <td>
                                {item.image.map((img, imgIndex) => (
                                    <img key={imgIndex} src={img} width="60" height="60" style={{ marginRight: '5px' }} />
                                ))}
                            </td>
                            <td>
                                <button onClick={() => editItem(index)}>Edit</button>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CrudApp;
