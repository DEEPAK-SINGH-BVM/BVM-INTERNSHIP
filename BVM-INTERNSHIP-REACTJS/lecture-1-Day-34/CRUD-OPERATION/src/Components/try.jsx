// Form.js
import React, { useState } from "react";

function Form() {
  // const [formData, setFormData] = useState({
  //   username: "",
  // });

  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // if (Object.keys(newErrors).length === 0) {
  
    //   console.log("Form submitted successfully!");
    // } else {
    //   console.log("Form submission failed due to validation errors.");
    // }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }

    return errors;
  };

  return (
    <div className="form-container">
      {/* <h2 className="form-title">Form Validation</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label className="form-label">Username:</label> */}
          <input className="form-input"type="text"name="username"value={formData.username} onChange={handleChange} />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
