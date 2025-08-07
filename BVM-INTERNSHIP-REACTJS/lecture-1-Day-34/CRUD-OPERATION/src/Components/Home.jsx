import { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import "./Home.css";
const CrudApp = () => {
  // MATERIAL UI
  // The test() method returns true if it finds a match, otherwise false
  // Searching base on (NAME & LAST-NAME)
  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));

  // Material UI

  const User = {
    name: "",
    last: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: [],
    image: "",
  };

  const [user, setUser] = useState(User);

  const [editIndex, setEditIndex] = useState(null);

  const [errors, setErrors] = useState({});

  console.log(editIndex, "EditIndex");

  console.log(user, "USER");

  const [list, setList] = useState([]);

  const imageHandler = (e) => {
    const file = e.target.files[0];
    // console.log(file,'FILES ');
    const imgURL = URL.createObjectURL(file);
    // console.log(imgURL,"IMAGE URL ");
    setUser({ ...user, image: imgURL });
  };

  const inputHandle = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setUser({ ...user, [name]: value });
    // console.log(name,value);
  };
  const inputHandleLanguage = (e) => {
    const { name, value } = e.target;
    console.log(name, "NAME");
    console.log(value, "VALUE");
    if (name == "language") {
      const current = user.language || [];
      console.log(current, "CURRENT");
      console.log("CURRENT");
      let updated = [];
      console.log(updated, "UPDATE");
      updated = [...current, value];
      setUser({ ...user, [name]: updated });
    }
  };

  function editItem(index) {
    setUser(list[index]);
    setEditIndex(index);
  }
  function deleteItem(index) {
    list.splice(index, 1);
    // console.log(index);
    setList([...list]);
    // console.log(...list,'LIST');
  }

  function submitHandle(e) {
    e.preventDefault();
    const newErrors = validateForm(User);
    setErrors(newErrors);

    if (editIndex !== null) {
      list[editIndex] = user;
      // console.log(user,'EDIT-INDEX');
      // setList([...list]);
      //
      setEditIndex(null);
    } else {
      setList([...list, user]);
      // setUser(User);
    }
    setUser(User);
    // console.log("working");
  }

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "name is required !!";
    }
    if (!data.last) {
      errors.last = "Last name is required !!";
    }
    if (!data.rollNo) {
      errors.rollNo = "RollNo is required !!";
    }
    if (!data.email) {
      errors.email = "Email is required !!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid !!";
    }
    if (!data.contact) {
      errors.contact = "Contact is required !!";
    } else if (data.contact >= 10) {
      errors.contact = "Enter Contact Length 10 !!";
    }
    if (!data.gender) {
      errors.gender = "Gender is required !!";
    }
    if (!data.date) {
      errors.date = "DOB is required !!";
    }
    if (!data.country) {
      errors.country = "Country is required !!";
    }
    if (!data.language) {
      errors.language = "At List One Language is required !!";
    }
    return errors;
  };

  return (
    <div className="pt-15">
      {/*  <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1> */}
      <div className="flex justify-center items-center ">
        <div className="border-1 border-gray-300 text-lg w-[500px] shadow-2xl rounded-xl ">
          <div className="flex justify-center">
            <h2 className="error-message mt-6 text-3xl font-bold">
              SUBMIT FORM
            </h2>
          </div>
          <form onSubmit={submitHandle}>
            <div className="flex p-3">{/* Children 2 */}</div>
            <div className="child ml-12">
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10  mt-2 pl-2"
                type="text"
                name="name"
                placeholder="Name"
                value={User.name}
                onChange={inputHandle}
              />
              <br />

              <span className="error-message text-red-400">{errors.name}</span>

              {/* <label>Enter Name :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={inputHandle}
              /> */}
              <br />
            </div>
            <div className="child ml-12">
              <label>Enter Last Name :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
                type="text"
                name="last"
                placeholder="Enter Last Name"
                value={user.last}
                onChange={inputHandle}
              />
              <br />
              <span className="error-message text-red-400">{errors.last}</span>
            </div>
            <div className="flex p-6 ml-5">
              <div>
                <label>Roll No :</label>
                <input
                  className="w-[200px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
                  type="Number"
                  name="rollNo"
                  placeholder="Enter Roll No"
                  value={user.rollNo}
                  onChange={inputHandle}
                />
                <br />
                <span className=" text-red-400">{errors.rollNo}</span>
              </div>
              <div>
                <div>
                  <label>Email :</label>
                  <input
                    className="w-[200px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={inputHandle}
                  />
                  <br />
                  <span className=" text-red-400">{errors.rollNo}</span>
                </div>
              </div>
            </div>

            <div className="ml-12">
              <label>Enter Contact No. :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10 mt-2 pl-2 "
                type="number"
                name="contact"
                placeholder="Enter Contact "
                value={user.contact}
                onChange={inputHandle}
              />
              <br />
              <span className=" text-red-400">{errors.contact}</span>
            </div>

            <div className="ml-12 ">
              <label>Select Gender :</label>
              <select
                className="w-[400px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
                name="gender"
                value={user.gender}
                onChange={inputHandle}
              >
                <option value="" select disabled hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <span className=" text-red-400">{errors.gender}</span>
            </div>
            <div className="flex p-6 ml-5">
              <div>
                <label>Date Of Birth :</label>

                <input
                  className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 pl-10 "
                  type="date"
                  name="date"
                  placeholder="Enter Date Of Birth "
                  value={user.date}
                  onChange={inputHandle}
                />
                <span className=" text-red-400">{errors.date}</span>
              </div>
              <div>
                <div>
                  <label>Select Country :</label>

                  <select
                    className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
                    name="country"
                    value={user.country}
                    onChange={inputHandle}
                  >
                    <option value="" select disabled hidden>
                      Select Country
                    </option>
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                  </select>

                  <span className=" text-red-400">{errors.country}</span>
                </div>
              </div>
            </div>

            <div className="ml-10">
              <label>Select Language:</label>
              <input
                type="checkbox"
                className="checkBox h-4 w-10"
                name="language"
                value="english"
                onChange={inputHandleLanguage}
              />
              <label>English</label>
              <input
                type="checkbox"
                className="checkBox h-4 w-10"
                name="language"
                value="hindi"
                onChange={inputHandleLanguage}
              />
              <label>Hindi</label>
              <input
                type="checkbox"
                className="checkBox h-4 w-10"
                name="language"
                value="gujarati"
                onChange={inputHandleLanguage}
              />
              <label>Gujarati</label>
              <br />
              <span className=" text-red-400">{errors.language}</span>
            </div>
            <br />
            <div className="ml-10 ">
              <label>Select Profile Pic : </label>
              {/* <input
                className="text-red-400"
                type="file"
                onChange={imageHandler}
              /> */}
              <input type="file" onChange={imageHandler} />
            </div>
            <br />
            <button
              type="submit"
              className="h-[50px] w-[450px] bg-blue-500 text-white mb-5 rounded ml-7 cursor-pointer"
            >
              <b>SUBMIT</b>
            </button>
            <br />
          </form>
        </div>
      </div>
      <br />
      <br /> <br />
      <div>
        {/* Filter Section */}
        <div className="flex justify-center items-center p-10">
          <div className="text-lg">
            <select
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              name="country"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="text-lg m-3">
            <select
              className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
              name="country"
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
              name="country"
            >
              <option value="">Select Language</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
              <option value="gujarati">Gujarati</option>
            </select>
          </div>
          <div className="text-lg m-3">
            <input
              type="text"
              placeholder="Search Name"
              className="w-[200px] border-2 border-gray-400 rounded h-10 p-2 mt-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-lg">
        {/* <table className="border-separate border border-gray-400 ">
          <thead>
            <tr className="">
              <th className="border border-gray-300 m-10">Profile Pic</th>
              <th className="border border-gray-300 ">Name</th>
              <th className="border border-gray-300 ">Last Name</th>
              <th className="border border-gray-300 ">Roll No</th>
              <th className="border border-gray-300 ">Email</th>
              <th className="border border-gray-300 ">Contact No.</th>
              <th className="border border-gray-300 ">Gender</th>
              <th className="border border-gray-300 ">Date Of Birth</th>
              <th className="border border-gray-300 ">Country</th>
              <th className="border border-gray-300 ">Language</th>
              <th className="border border-gray-300 ">Action</th>
            </tr>
            </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                 <td>
                <img src={item.image} alt="Profile" width="50" height="50" />
              </td>
              </tr>
            ))}
          </tbody>
        </table> 
         */}

        <table className="border-separate border border-gray-400 ">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Roll No</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Contact No.</th>
              <th className="border border-gray-300 p-2">Gender</th>
              <th className="border border-gray-300 p-2">Date Of Birth</th>
              <th className="border border-gray-300 p-2">Country</th>
              <th className="border border-gray-300 p-2">Language</th>
              <th className="border border-gray-300 p-2">Profile</th>
              <th className="border border-gray-300 p-2 w-[200px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>{item.rollNo}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.gender}</td>
                <td>{item.date}</td>
                <td>{item.country}</td>
                <td>{item.language}</td>
                <td>
                  <img src={item.image} alt="Profile" width="50" height="50" />
                </td>

                <td>
                  <button
                    className="w-[100px] border-2 border border-gray-300 p-2 bg-red-600 text-white cursor-pointer"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="w-[100px] border-2 border border-gray-300 p-2 bg-sky-500 text-white cursor-pointer"
                    onClick={() => editItem(index)}
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
  );
};

export default CrudApp;
