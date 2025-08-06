import { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import "./Home.css";
const CrudApp = () => {
  // MATERIAL UI
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
  // const UserDetails = {
  //   name: "",
  //   last: "",
  //   rollNo: "",
  //   email: "",
  //   contact: "",
  //   gender: "",
  //   data: "",
  //   country: "",
  //   language: "",
  // };
  // console.log(UserDetails);

  // const [user, setUser] = useState(UserDetails);
  // console.log(user);

  // const [list, setList] = useState([]);

  // function inputHandler(e) {
  //   const { name, value } = e.target;
  //   setUser({...user, [name]: value });
  // }

  // function submitHandle(e) {
  //   e.preventDefault();
  //   setList([...list, user]);
  //   setUser(UserDetails);
  // }
  const User = {
    name: "",
    last: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: "",
  };

  const [user, setUser] = useState(User);
  console.log(user);

  const [list, setList] = useState([]);

  function inputHandle(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function submitHandle(e) {
    e.preventDefault();
    setList([...list, user]);
    setUser(User);
  }

  // const <UserDetails></UserDetails>
  return (
    <div className="pt-15">
      {/* <h1 className="text-3xl font-bold underline text-red-400">Hello world!</h1> */}
      <div className="parentBox flex justify-center items-center ">
        <div className="border-1 border-gray-300 text-lg w-[500px] shadow-2xl rounded-xl ">
          <div className="flex justify-center">
            <h2 className="mt-3 text-3xl font-bold">SUBMIT FORM</h2>
          </div>
          <form onSubmit={submitHandle}>
            <div className="flex p-6">{/* Children 2 */}</div>
            <div className="child ml-12">
              <label>Enter Name :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={inputHandle}
              />
              <br />
              {/* <span className=" text-red-400">Name Error</span> */}
            </div>
            <div className="child ml-12">
              <label>Enter Last Name :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                type="text"
                name="last"
                placeholder="Enter Last Name"
                value={user.last}
                onChange={inputHandle}
              />
              {/* <br /> */}
              {/* <span className=" text-red-400">LastName </span> */}
            </div>
            <div className="flex p-6 ml-5">
              <div>
                <label>Roll No :</label>
                <input
                  className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                  type="Number"
                  name="rollNo"
                  placeholder="Enter Roll No"
                  value={user.rollNo}
                  onChange={inputHandle}
                />
                {/* <span className=" text-red-400">Roll No Error</span> */}
              </div>
              <div>
                <div>
                  <label>Email :</label>

                  <input
                    className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={inputHandle}
                  />
                  {/*  <span className=" text-red-400">Email Error</span> */}
                </div>
              </div>
            </div>

            <div className="ml-12">
              <label>Enter Contact No. :</label>
              <input
                className="w-[400px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                type="number"
                name="contact"
                placeholder="Enter Contact "
                value={user.contact}
                onChange={inputHandle}
              />
              <br />
              {/* <span className=" text-red-400">Enter Contact Error</span> */}
            </div>

            <div className="ml-12 ">
              <label>Select Gender :</label>
              <select
                className="w-[400px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                name="gender"
                value={user.gender}
                onChange={inputHandle}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              {/* <span className=" text-red-400">Select Gender Error</span> */}
            </div>
            <div className="flex p-6 ml-5">
              <div>
                <label>Date Of Birth :</label>

                <input
                  className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                  type="date"
                  name="date"
                  placeholder="Enter Date Of Birth "
                  value={user.date}
                  onChange={inputHandle}
                />
                {/* <span className=" text-red-400">Date Of Birth Error</span> */}
              </div>
              <div>
                <div>
                  <label>Select Country :</label>

                  <select
                    className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2"
                    name="country"
                    value={user.country}
                    onChange={inputHandle}
                  >
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                  </select>

                  {/* <span className=" text-red-400">Select Country Error</span> */}
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
              />
              <label>English</label>
              <input
                type="checkbox"
                className="checkBox h-4 w-10"
                name="language"
                value="hindi"
                // onChange={inputHandler}
              />
              <label>Hindi</label>
              <input
                type="checkbox"
                className="checkBox h-4 w-10"
                name="language"
                value="gujarati"
                // onChange={inputHandler }
              />
              <label>Gujarati</label>
              <br />
              {/* <span className="text-red-400">Select Language Error</span> */}
            </div>

            {/*  */}
            <br />
            <div className="ml-10">
              <label>Select Profile Pic : </label>
              <input className="text-red-400" type="file" />
            </div>
            <br />
            <button
              type="submit"
              className="h-[50px] w-[450px] bg-blue-500 text-white mb-5 rounded ml-7"
            >
              <b>SUBMIT</b>
            </button>
            <br />
          </form>
        </div>
      </div>
      <br />
      <br /> <br />
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
              </tr>
            ))}
          </tbody>
        </table> */}
        <table className="border-separate border border-gray-400 ">
          <thead>
            <tr>
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
            {list.map(
              (item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.last}</td>
                  <td>{item.rollNo}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>{item.gender}</td>
                  <td>{item.date}</td>
                  <td>{item.country}</td>
                </tr>
              ),
              console.log(list.name, "LOG")
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CrudApp;
