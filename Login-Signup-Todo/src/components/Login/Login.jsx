import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/LoginSignAction";
import { InputSignup } from "../Elements/Input";
import Span from "../Elements/Span";
import { LabelLogin } from "../Elements/label";

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";
// import { FiPackage } from "react-icons/fi";
/*
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";
import "./App.css";
function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-yellow-100 dark:bg-black h-[400px]">
      <button onClick={() => darkModeHandler()}>
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </div>
  );
}
*/
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});
  const [isDark, setIsDark] = useState(false);
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  const validation = () => {
    let newError = {};
    if (!email) {
      newError.email = "Email is Required !!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Enter a valid email address";
    }

    if (!password) {
      newError.password = "Password is Required !!";
    }
    setErrors(newError);

    return Object.keys(newError).length === 0;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (currentUser) {
      // console.log("Login successful", currentUser);
      navigate("/home");
    }
  }, [currentUser, navigate]);

  return (
    // <div className="bg-black h-screen">
    // <div className={`h-screen bg-black ${isDark ? "bg-black" : "bg-white "}`}>
    // <div className="h-screen bg-white dark:bg-black">
    <div className="h-screen bg-blue border border-gray-200 rounded-lg shadow-sm  dark:bg-black dark:border-gray-700 text-black  dark:text-white">
      <nav className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center justify-end">
            <div className="flex items-center align-center ">
              {/* <input
                type="checkbox"
                id="toggleDark"
                className="sr-only peer"
                onChange={() => setIsDark(!isDark)}
              /> */}
              <div className="p-3">
                {/* <button
                  type="button"
                  class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none  mt-2"
                >
                  <label htmlFor="toggleDark" className="cursor-pointer ">
                    <span className="text-sm font-medium">
                      {isDark ? "Dark Mode" : "Light Mode"}
                    </span>
                  </label>
                </button> */}

                <button
                  onClick={() => darkModeHandler()}
                  className="text-white cursor-pointer"
                >
                  {dark && <IoSunny size={30} />}
                  {!dark && <IoMoon size={30} />}
                </button>
                {/* <FiPackage className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center pt-25 ">
        {/* DARK */}
        <div className="w-full max-w-sm p-4 bg-blue border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-black  dark:text-white">
          {/* <div
          className={`w-full max-w-sm p-4 bg-blue border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ${
            isDark
              ? "w-full max-w-sm p-4 bg-blue border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 text-white "
              : "w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 "
          }`}
        > */}
          {/* LIGHT */}
          {/* <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> */}
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className=" text-blue-400">
              <h4 className="text-3xl font-medium underline">Login</h4>
            </div>

            <div>
              {/*
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label> */}
              <LabelLogin label="Enter Email" />
              {/* <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter email Address..."
              /> */}
              <InputSignup
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address..."
              />
              {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.email}</span>
              </p> */}
              <Span label={error.email} />
            </div>

            <div>
              {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter password
              </label> */}
              <LabelLogin label="Enter Password" />
              {/* <input
              
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              /> */}
              <InputSignup
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Email Address..."
              />
              {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error.password}</span>
              </p> */}
              <Span label={error.password} />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
