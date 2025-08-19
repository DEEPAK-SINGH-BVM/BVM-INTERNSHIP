/*
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Home Page</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("Email not found. Please signup first.");
      return;
    }

    if (storedUser.email !== form.email) {
      alert("Email not found.");
      return;
    }

    if (storedUser.password !== form.password) {
      alert("Password not match.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline"
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css'
const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    country: "",
    language: []
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm({ ...form, language: [...form.language, value] });
    } else {
      setForm({
        ...form,
        language: form.language.filter((lang) => lang !== value)
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.last ||
      !form.email ||
      !form.password ||
      !form.contact ||
      !form.gender ||
      !form.country ||
      form.language.length === 0
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");

    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <form className="space-y-4" onSubmit={handleSignup}>
       
          <div>
            <label className="block font-medium mb-1">First Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="last"
              value={form.last}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter last name"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Contact</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
              placeholder="Enter contact number"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Country</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            >
              <option value="">Select country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Languages</label>
            <div className="flex flex-wrap gap-4">
              {["English", "Hindi", "Spanish"].map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={lang}
                    checked={form.language.includes(lang)}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("isLoggedIn") === "true" ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
*/