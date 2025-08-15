import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const User = {
    name: "",
    last: "",
    email: "",
    contact: "",
    gender: "",
    country: "",
    language: [],
  };
  const navigate = useNavigate()
  const [users, setUsers] = useState(User);
  console.log(users);
  
  const [list , setList] = useState([])
  //  const handleChange = (e) => {
  //    setUsers({ ...form, [e.target.name]: e.target.value });
  //  };
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setList([...list, users]);
    setUsers(User);
  };
 
  return (
    <div>
      <div className="flex justify-center pt-25 ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={submitHandle}>
            <div className="">
              <h4 className="text-3xl font-medium text-gray-900 dark:text-white">
                Signup
              </h4>
            </div>
            <hr className="bg-white" />
            <div className="flex justify-center gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter First Name
                </label>
                <input
                  type="text"
                  value={users.name}
                  onChange={inputHandle}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=" Enter First Name"
                />
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/* <span class="font-medium">First Name  !</span> */}
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter Last Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter Last Name"
                />
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  {/* <span class="font-medium">Last Name  !</span> */}
                </p>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label>
              <input
                type="text"
                autocomplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter email Address..."
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span class="font-medium">Email  !</span> */}
              </p>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span class="font-medium">Password  !</span> */}
              </p>
            </div>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled hidden>
                Choose a country
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              {/* <span class="font-medium">Country  !</span> */}
            </p>
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>

            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled hidden>
                Select Gender
              </option>
              <option value="US">Male</option>
              <option value="CA">Female</option>
            </select>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              {/* <span class="font-medium">Gender  !</span> */}
            </p>
            {/* Language  */}
            <div class="flex items-center text-white gap-1">
              <label
                for="checked-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 w-full"
              >
                Select Language :
              </label>

              <input
                type="checkbox"
                className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class=" text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                English
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class=" text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Hindi
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class=" text-sm font-medium text-gray-900 dark:text-gray-300 "
              >
                Gujarati
              </label>
            </div>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500">
              {/* <span class="font-medium">At List One Language  !</span> */}
            </p>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Signup
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have account !{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
