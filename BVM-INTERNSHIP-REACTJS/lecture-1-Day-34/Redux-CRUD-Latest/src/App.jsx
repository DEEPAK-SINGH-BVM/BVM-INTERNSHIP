import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./components/Action/crudAction";
import "./App.css";
export default function App() {
  const User = {
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: [],
    image: "",
  };
  const [todo, setTodo] = useState(User);

  const [edit, setEdit] = useState(null);
  const [error, setErrors] = useState({});
  const [filters, setFilters] = useState({});
  const [searchItem, setSearchItem] = useState("");
  // console.log(searchItem, "SEARCH");

  // console.log(filters,'FILTER');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // console.log(todos,'PATH');
  
  //  const todos = useSelector((state) => state.counter.todos);
  
  // console.log(todos, "TODOS");

  // const handleAddTodo = () => {
  //   // debugger
  //   // if (!todo.name || !todo.lastName) return;
  //   if (!validate()) return;
  //   console.log(validate(), "VALIDATION");

  //   dispatch(
  //     addTodo({
  //       id: Date.now(),
  //       firstName: todo.firstName,
  //       lastName: todo.lastName,
  //       rollNo: todo.rollNo,
  //       email: todo.email,
  //       contact: todo.contact,
  //       gender: todo.gender,
  //       date: todo.date,
  //       country: todo.country,
  //       language: todo.language,
  //     })
  //   );
  //   // console.log(todo.firstName, "NAME");
  //   // console.log(todo.lastName, "lastName");
  //   // console.log(todo.rollNo, "RollNo");
  //   // console.log(todo.email, "email");
  //   // console.log(todo.contact, "contact");
  //   // console.log(todo.gender, "gender");
  //   // console.log(todo.date, "Date");
  //   // console.log(todo.country, "country");

  //   // console.log(todo.language, "language");

  //   setTodo(User);
  // };
  const validate = () => {
    let newErrors = {};
    // debugger
    if (!todo.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(todo.firstName)) {
      newErrors.firstName = "Number Are Not Allow";
    }
    if (!todo.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(todo.lastName)) {
      newErrors.lastName = "Number Are Not Allow";
    }
    if (!todo.email) {
      newErrors.email = " email required";
    } else if (!/\S+@\S+\.\S+/.test(todo.email)) {
      newErrors.email = "Not Found @.com !";
    }
    if (!todo.rollNo) newErrors.rollNo = " RollNo required";
    if (!todo.contact) newErrors.contact = " contact required";
    else if (todo.contact.length != 10) {
      newErrors.contact = " Enter  Valid Number (10 digits)";
    }
    if (!todo.date) newErrors.date = " date required";
    if (!todo.country) newErrors.country = "country required";
    if (todo.language.length === 0)
      newErrors.language = "At List One Language Required";
    // if (!todo.language) newErrors.language = "At List One Language Required";

    if (!todo.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    // console.log(Object.keys(newErrors).length);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log(edit, "EDIT");

    if (edit) {
      dispatch(editTodo({ ...todo}));
      setEdit(null);
      // console.log(dispatch(editTodo({ ...todo})), "all -data");
      // console.log(editTodo, "all-data");
    } else {
      dispatch(addTodo({ ...todo, id: Date.now() }));
    }
    setTodo(User);
  };

  /*
  if (edit) {
  const updatedTodo = { ...todo, id: edit };
  console.log(updatedTodo, 'all -data');
  dispatch(editTodo(updatedTodo));
  setEdit(null);
} 
*/
  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    // console.log(name, "NAME");
    // console.log(value, "VALUE");
    // console.log(checked, "CHECKED");

    if (name === "language") {
      const current = todo.language;
      // console.log(current, "CURRENT");

      let updated = [];
      if (checked) {
        updated = [...current, value];
        // console.log(updated, "UPDATE");
        // console.log(...current, "....CURRENT");
      }
      // else {
      //   updated = current.filter((lang) => lang !== value);
      // }
      setTodo({ ...todo, [name]: updated });
    }
  };
  // const handleEdit = (data) => {
  //   dispatch(editTodo({ ...todos, id: data }));
  //   setTodo(data);
  //   console.log(setTodo(data), "SET-TODO-DATA");
  //   setEdit(data.id);
  //   console.log(setEdit(todos.id), "SET-TODO-ID");
  //   console.log("Working !!");
  // };
  const handleEdit = (data) => {
    setTodo(data);
    setEdit(data.id);
    console.log(data);
    console.log(data.id);
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    // console.log(dispatch(removeTodo(id), "REMOVE-FEATURE"));
  };
  const filterList = todos
    .filter((item) => {
      const Gender = !filters.gender || item.gender == filters.gender;
      // console.log(Gender, " GENDER");
      const Country = !filters.country || item.country == filters.country;
      // console.log(Country, " country");
      const Language =
        !filters.language || item.language.includes(filters.language);
      return Gender && Country && Language;
    })
    .filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchItem.toLowerCase())
    );
  return (
    <div id="app">
      <div className="flex p-3 justify-center">
        <div className="border-1 border-gray-200 text-lg w-[500px] shadow-2xl rounded-xl pl-5 ">
          <div className="flex justify-center pt-3">
            <h2 className="font-serif">REGISTRATION FORM</h2>
          </div>
          <div className="pt-3">
            <label className="mb-0">Enter First Name</label>
            <input
              className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-3 "
              placeholder="Enter FirstName"
              value={todo.firstName}
              onChange={(e) => setTodo({ ...todo, firstName: e.target.value })}
            />
            <br />
            <span className="text-red-400">{error.firstName}</span>
          </div>
          <br />
          <label className="mb-0">Enter Last Name</label>

          <input
            type="text"
            className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-3 "
            placeholder="Enter lastName"
            value={todo.lastName}
            onChange={(e) => setTodo({ ...todo, lastName: e.target.value })}
          />
          <br />
          <span className="text-red-400">{error.lastName}</span>
          <br />
          <div className="flex ">
            <div>
              <label className="mb-0">Enter Roll No</label>
              <br />
              <input
                type="number"
                className="w-[190px] border-2 border-gray-400 rounded h-10 mt-2 pl-3 "
                placeholder="Enter RollNo"
                value={todo.rollNo}
                onChange={(e) => setTodo({ ...todo, rollNo: e.target.value })}
              />
              <br />
              <span className="text-red-400">{error.rollNo}</span>
            </div>
            <br />
            <br />
            <div className="ml-4">
              <label className="mb-0">Enter Email Address</label>
              <br />
              <input
                type="email"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-3  "
                placeholder="Enter Email "
                value={todo.email}
                onChange={(e) => setTodo({ ...todo, email: e.target.value })}
              />
              <br />
              <span className="text-red-400">{error.email}</span>
            </div>
          </div>
          <br />
          <div>
            <label className="mb-0">Select Gender :</label>
            <br />
            <select
              className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-3  "
              name="gender"
              value={todo.gender}
              onChange={(e) => setTodo({ ...todo, gender: e.target.value })}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <span className="text-red-400">{error.gender}</span>
          </div>
          <br />
          <div className="flex ">
            <div>
              <label className="mb-0">Enter Date of Birth</label>
              <br />
              <input
                type="date"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-3 "
                value={todo.date}
                onChange={(e) => setTodo({ ...todo, date: e.target.value })}
              />
              <br />
              <span className="text-red-400">{error.date}</span>
            </div>
            <br />
            <br />
            <div className="ml-4">
              <label className="mb-0">Enter Contact No.</label>
              <br />
              <input
                type="number"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-3  "
                placeholder="Enter Contact"
                value={todo.contact}
                onChange={(e) => setTodo({ ...todo, contact: e.target.value })}
              />
              <br />
              <span className="text-red-400">{error.contact}</span>
            </div>
          </div>
          <br />
          <label className="mb-0">Select Country :</label>
          <br />
          <select
            name="country"
            className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-3 "
            value={todo.country}
            onChange={(e) => setTodo({ ...todo, country: e.target.value })}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="usa">USA</option>
            <option value="china">China</option>
            <option value="india">India</option>
          </select>
          <br />
          <span className="text-red-400">{error.country}</span>

          <br />

          <div className="text-[20px]">
            <label>Select Language :</label>

            <input
              type="checkbox"
              name="language"
              value="hindi"
              checked={todo.language.includes("hindi")}
              onChange={inputHandleLanguage}
              className="h-4 w-4 m-2"
            />
            <label>Hindi</label>

            <input
              type="checkbox"
              name="language"
              value="english"
              checked={todo.language.includes("english")}
              onChange={inputHandleLanguage}
              className="h-4 w-4 m-2"
            />
            <label>English</label>

            <input
              type="checkbox"
              name="language"
              value="gujarati"
              checked={todo.language.includes("gujarati")}
              onChange={inputHandleLanguage}
              className="h-4 w-4 m-2"
            />
            <label>Gujarati</label>
            <br />
            <span className="text-red-400">{error.language}</span>
          </div>
          <br />
          <div className="ml-[-15px]">
            {/* <button
              onClick={handleAddTodo}
              className="h-[50px] w-[450px] bg-blue-500 text-white mb-4 rounded  cursor-pointer"
            >
              Submit
            </button> */}

            <button
              onClick={handleSubmit}
              className="h-[50px] w-[450px] bg-blue-500 text-white mb-4 rounded  cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* <div>
          <table className="border-2 ">
            <thead className="border-2 ">
              <tr className="border-2 ">
                <th className="border-2 ">First Name</th>
                <th className="border-2 ">Last Name</th>
                <th className="border-2 ">Roll No</th>
                <th className="border-2 ">Email</th>
                <th className="border-2 ">Gender</th>
                <th className="border-2 ">Date of Birth</th>
                <th className="border-2 ">Contact</th>
                <th className="border-2 ">Country</th>
                <th className="border-2 ">Language</th>
                <th className="border-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {todos &&
                todos.map((todo) => (
                  <tr key={todo.id} className="border-2 ">
                    <td className="border-2 ">{todo.firstName}</td>
                    <td className="border-2 ">{todo.lastName}</td>
                    <td className="border-2 ">{todo.rollNo}</td>
                    <td className="border-2 ">{todo.email}</td>
                    <td className="border-2 ">{todo.gender}</td>
                    <td className="border-2 ">{todo.date}</td>
                    <td className="border-2 ">{todo.contact}</td>
                    <td className="border-2 ">{todo.country}</td>
                    <td className="border-2 ">English</td>
                    <td className="bg-red-600 border-2 ">
                      <button onClick={() => handleRemoveTodo(todo.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div> */}

        {/* FILTER SECTION */}
        <div className="flex justify-center items-center p-10">
          <div className="text-lg">
            <select
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              name="gender"
              onChange={(e) =>
                setFilters({ ...filters, gender: e.target.value })
              }
            >
              <option value="">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="text-lg m-3">
            <select
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              name="country"
              onChange={(e) =>
                setFilters({ ...filters, country: e.target.value })
              }
            >
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="text-lg m-3">
            <select
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              name="language"
              onChange={(e) =>
                setFilters({ ...filters, language: e.target.value })
              }
            >
              <option value="">Select Language</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="gujarati">Gujarati</option>
            </select>
          </div>
          <div className="text-lg m-3">
            <input
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              type="text"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pl-50 pr-50">
          <table className="w-full text-base text-left rtl:text-right text-white dark:text-white">
            <thead className="text-base text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-white">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Roll No
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Language
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {/* <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 ">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody> */}
            <tbody>
              {filterList &&
                filterList.map((todo) => (
                  <tr
                    key={todo.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-black"
                  >
                    <td className="px-6 py-4">{todo.firstName}</td>
                    <td className="px-6 py-4">{todo.lastName}</td>
                    <td className="px-6 py-4">{todo.rollNo}</td>
                    <td className="px-6 py-4">{todo.email}</td>
                    <td className="px-6 py-4">{todo.gender}</td>
                    <td className="px-6 py-4">{todo.date}</td>
                    <td className="px-6 py-4">{todo.contact}</td>
                    <td className="px-6 py-4">{todo.country}</td>
                    <td className="px-6 py-4">{todo.language.join(", ")}</td>
                    <td>
                      <button
                        className="w-[100px] border-2 border border-gray-300 p-2 bg-red-600 text-white cursor-pointer "
                        onClick={() => handleRemoveTodo(todo.id)}
                      >
                        Delete
                      </button>
                      {/* <button
                        className="w-[100px] border-2 border border-gray-300 p-2 bg-sky-600 text-white cursor-pointer "
                        onClick={() => handleEdit(todo)}
                      >
                        Edit
                      </button> */}
                      <button
                        onClick={() => handleEdit(todo)}
                        className="w-[100px] border-2 border border-gray-300 p-2 bg-sky-600 text-white cursor-pointer "
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
