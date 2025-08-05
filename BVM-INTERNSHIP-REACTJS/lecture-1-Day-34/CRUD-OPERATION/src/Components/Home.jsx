import React, { useState } from "react";
import "./Home.css";
const CrudApp = () => {
  return (
    <div>
      <div className="parentBox">
        <div className="childBox">
          <h2>SUBMIT FORM</h2>
          <form>
            <div className="flex">
              <div className="child">
                <label>Enter Name :</label>

                <input
                  className="inputWidth"
                  type="text"
                  placeholder="Enter Name"
                />

                {/* <span className="span_Error">Name Error</span> */}
              </div>
              {/* Children 2 */}
              <div className="child">
                <label>Enter Last Name :</label>

                <input
                  className="inputWidth"
                  type="text"
                  placeholder="Enter Last Name"
                />

                {/* <span className="span_Error">Last Name Error</span> */}
              </div>
            </div>
            <div className="flex">
              <div>
                <label>Enter Roll No :</label>
                <input
                  className="inputWidth"
                  type="number"
                  placeholder="Enter Email"
                />
                {/* <span className="span_Error">Email Roll</span> */}
              </div>

              <div>
                <label>Enter Email :</label>

                <input
                  className="inputWidth"
                  type="email"
                  placeholder="Enter Email"
                />
                {/* <span className="span_Error">Email Error</span> */}
              </div>
            </div>
            <div className="flex">
              <div>
                <label>Enter Contact No. :</label>

                <input
                  type="number"
                  className="inputWidth"
                  placeholder="Enter Contact"
                />

                {/* <span className="span_Error">Enter Contact Error</span> */}
              </div>
              <div>
                <div>
                  <label>Select Gender :</label>

                  <select className="inputWidth" name="" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                  {/* <span className="span_Error">Select Gender Error</span> */}
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <label>Date Of Birth :</label>

                <input className="inputWidth" type="date" id="DateOfBirth" />

                {/* <span className="span_Error">Select Date Of Birth Error</span> */}
              </div>
              <div>
                <div>
                  <label>Select Country :</label>

                  <select className="inputWidth" name="" id="Country">
                    <option value="usa">USA</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                  </select>

                  {/* <span className="span_Error">Select Country Error</span> */}
                </div>
              </div>
            </div>

            <div>
              <label>Select Language:</label>
              <input
                type="checkbox"
                className="checkBox"
                name="language"
                value="english"
              />
              <label>English</label>
              <input
                type="checkbox"
                className="checkBox"
                name="language"
                value="hindi"
              />
              <label>Hindi</label>
              <input
                type="checkbox"
                className="checkBox"
                name="language"
                value="gujarati"
              />
              <label>Gujarati</label>

              {/* <span id="error_language" className="span_Error">Select Language Error</span> */}
            </div>

            {/*  */}
            <br />
            <div>
              <label>Select Profile Pic : </label>
              <input className="span_Error" type="file" />
            </div>
            <br />
            <button type="submit" className="submit">
              <b>SUBMIT</b>
            </button>
            <br />
          </form>
        </div>
      </div>
      <br />
      <br /> <br />
      <div className="tableCenter">
        <table border={1}>
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>Contact No.</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Country</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>?</td>
              <td>React</td>
              <td>JS</td>
              <td>1</td>
              <td>React@gmail.com</td>
              <td>894593457</td>
              <td>Male</td>
              <td>22/11/2002</td>
              <td>India</td>
              <td>English</td>

              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CrudApp;
