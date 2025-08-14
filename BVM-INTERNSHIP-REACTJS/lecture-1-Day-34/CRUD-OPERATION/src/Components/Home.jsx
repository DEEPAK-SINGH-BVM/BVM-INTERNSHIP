import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import "./Home.css";
import { NearMe } from "@mui/icons-material";
const CrudApp = () => {
  // MATERIAL UI UPDATED]
  // Errors : Number Regex not WORK in (First & last Name) SEARCH  With first & last name
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
  // }));name
  /*

  */

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
  console.log(user, "USER");

  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [filters, setFilters] = useState({});
  const [searchItem, setSearchItem] = useState("");

  const [list, setList] = useState(() => {
    const storeList = localStorage.getItem("listData");
    return storeList ? JSON.parse(storeList) : [];
  });

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(list));
  }, [list]);

  // console.log(user, "USER");

  const imageHandler = (e) => {
    const file = e.target.files[0];
    console.log(file, "FILES ");
    const imgURL = URL.createObjectURL(file);
    console.log(imgURL, "IMAGE URL ");
    setUser({ ...user, image: imgURL });
  };

  const inputHandle = (e) => {
    const { name, value } = e.target;
    // console.log(name, "NAME");
    // console.log(value, "VALUE");
    setUser({ ...user, [name]: value });
    // console.log(name, value, "NAME - VALUE");
  };

  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, "NAME");
    // console.log(value, "VALUE");
    // console.log(checked, "CHECKED");

    if (name === "language") {
      const current = user.language;
      // console.log(current, "CURRENT");
      let updated = [];
      if (checked) {
        console.log(checked, "CHECKED");
        updated = [...current, value];
        // console.log(updated, "UPDATE");
      } else {
        updated = current.filter((lang) => lang !== value);
        console.log("Else Update", updated);
      }
      setUser({ ...user, [name]: updated });
    }
  };
  function editItem(index) {
    setUser(list[index]);
    setEditIndex(index);
  }
  function deleteItem(index) {
    list.splice(index, 1);
    console.log(index);
    setList([...list]);
    console.log(...list, "LIST");
  }

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(formErrors, "FormError");
    const formErrors = validateForm(user);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    if (editIndex !== null) {
      const updatedList = [...list];
      console.log(updatedList, "UPDATED LIST");
      updatedList[editIndex] = user;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, user]);
    }
    setUser(User);
    setErrors({});
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "First Name is required!";
    } else if (!/^[A-Za-z]+$/.test(data.name)) {
      errors.name = "Number Are Not Allow !";
    }
    if (!data.last) {
      errors.last = "Last name is required!";
    } else if (!/^[A-Za-z]+$/.test(data.last)) {
      errors.last = "Number Are Not Allow !";
    }

    if (!data.rollNo) errors.rollNo = "Roll No is required!";

    if (!data.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email!";
    }
    if (!data.contact) {
      errors.contact = "Contact is required!";
    } else if (data.contact.length !== 10) {
      errors.contact = "Contact must be 10 digits!";
    }
    if (!data.gender) errors.gender = "Gender is required!";
    if (!data.date) errors.date = "DOB is required!";
    if (!data.country) errors.country = "Country is required!";
    if (!data.language || data.language.length === 0) {
      errors.language = "Select at least one language!";
    }
    return errors;
  };
  const filterList = list
    .filter((item) => {
      const Gender = !filters.gender || item.gender == filters.gender;
      console.log(Gender, " GENDER");
      const Country = !filters.country || item.country == filters.country;
      console.log(Country, " GENDER");
      const Language =
        !filters.language || item.language.includes(filters.language);
      console.log(Language, " GENDER");
      return Gender && Country && Language;
    })

    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.last.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <div className="pt-15">
      {/* <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1> */}
      <div className="flex justify-center items-center ">
        <div className="border-1 border-gray-300 text-lg w-[500px] shadow-2xl rounded-xl ">
          <div className="flex justify-center">
            <h2 className="error-message mt-6 text-3xl font-bold">
              SUBMIT FORM
            </h2>
          </div>
          <form onSubmit={submitHandle}>
            <div className="flex p-3"></div>

            <div className="child ml-12">
              <label>Enter First Name :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10  mt-2 pl-2"
                type="text"
                name="name"
                placeholder="Enter First Name "
                value={user.name}
                onChange={inputHandle}
              />
              <br />
              <span className="error-message text-red-400">{errors.name}</span>
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
                  className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
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
                    className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-2 "
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={inputHandle}
                  />
                  <br />
                  <span className=" text-red-400">{errors.email}</span>
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
                <option value="" disabled>
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
                    <option value="" disabled>
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
                checked={user.language.includes("english")}
                onChange={inputHandleLanguage}
              />
              English
              <input
                type="checkbox"
                name="language"
                value="hindi"
                className="checkBox h-4 w-10"
                checked={user.language.includes("hindi")}
                onChange={inputHandleLanguage}
              />
              Hindi
              <input
                type="checkbox"
                name="language"
                value="gujarati"
                className="checkBox h-4 w-10"
                checked={user.language.includes("gujarati")}
                onChange={inputHandleLanguage}
              />
              Gujarati
              <br />
              <span className=" text-red-400">{errors.language}</span>
            </div>

            <br />
            <div className="ml-10 ">
              <label>Select Profile Pic : </label>

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
      </div>
      <div className="flex justify-center items-center text-center text-lg">
        <table className="border-separate border border-gray-400 ">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">First Name</th>
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
            {filterList.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>{item.rollNo}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.gender}</td>
                <td>{item.date}</td>
                <td>{item.country}</td>
                <td>{item.language.join(", ")}</td>
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
