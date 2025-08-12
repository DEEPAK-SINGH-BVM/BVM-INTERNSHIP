// import React from "react";
// import { Provider } from "react-redux";

// import store from "./store";
// import Home from "./components/Home/Home";
// export default function App() {
//   return (
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
// }

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// import Home from "./components/Home/Home";
// ReactDOM.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>,
//   document.getElementById("root")
// );

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo } from "./components/Home/crudAction";
// export default function App() {
//   const [text, setText] = useState("");

//   const dispatch = useDispatch();

//   const todos = useSelector((state) => state.todos);

//   const handleAddTodo = () => {
//     dispatch(
//       addTodo({
//         id: Date.now(),
//         text,
//       })
//     );
//     setText("");
//     console.log(text, "TEXT");
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//     console.log("Working");
//   };

//   return (
//     <div id="app">
//       <h2>Redux-Crud </h2>
//       <input
//         type="text"
//         placeholder="Enter Task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={handleAddTodo}>Add</button>
//       <br /> <br />
//       <button onClick={handleRemoveTodo}>Remove</button>
//       <div>
//         {todos && todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./components/Home/crudAction";
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

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.counter.list.todos);
  console.log(todos,'TODOS');
  
  const handleAddTodo = () => {
    // if (!todo.name || !todo.lastName) return;
    dispatch(
      addTodo({
        id: Date.now(),
        firstName: todo.firstName,
        lastName: todo.lastName,
        rollNoL: todo.rollNo,
        email: todo.email,
        contact: todo.contact,
        gender: todo.gender,
        date: todo.date,
        country: todo.country,
        language: todo.language,
      })
    );
    console.log(todo.firstName, "NAME");
    console.log(todo.lastName, "lastName");
    console.log(todo.rollNo, "RollNo");
    console.log(todo.email, "email");
    console.log(todo.contact, "contact");
    console.log(todo.gender, "gender");
    console.log(todo.date, "Date");
    console.log(todo.country, "country");
    console.log(todo.language, "language");
    setTodo(User);
  };

  // const handleRemoveTodo = (id) => {
  //   dispatch(removeTodo(id));
  // };

  return (
    <div id="app">
      <div className="flex p-3 justify-center">
        <div className="border-1 border-gray-200 text-lg w-[500px] shadow-2xl rounded-xl pl-10 ">
          <div className="flex justify-center pt-3">
            <h2>Redux CRUD</h2>
          </div>
          <div className="pt-3">
            <label className="mb-0">Enter First Name</label>

            <input
              className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-10 "
              placeholder="Enter FirstName"
              value={todo.firstName}
              onChange={(e) => setTodo({ ...todo, firstName: e.target.value })}
            />
            <br />
            {/* <span className="text-red-400">Error First Name</span> */}
          </div>
          <br />
          <label className="mb-0">Enter Last Name</label>

          <input
            type="text"
            className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-10 "
            placeholder="Enter lastName"
            value={todo.lastName}
            onChange={(e) => setTodo({ ...todo, lastName: e.target.value })}
          />
          <br />
          {/* <span className="text-red-400">Error Last Name</span> */}
          <br />
          <div className="flex ">
            <div>
              <label className="mb-0">Enter Roll No</label>
              <br />
              <input
                type="number"
                className="w-[190px] border-2 border-gray-400 rounded h-10 mt-2 pl-10 "
                placeholder="Enter RollNo"
                value={todo.rollNo}
                onChange={(e) => setTodo({ ...todo, rollNo: e.target.value })}
              />
              <br />
              {/* <span className="text-red-400">Error RollNo</span> */}
            </div>
            <br />
            <br />
            <div className="ml-4">
              <label className="mb-0">Enter Email Address</label>
              <br />
              <input
                type="email"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-10  "
                placeholder="Enter Email "
                value={todo.email}
                onChange={(e) => setTodo({ ...todo, email: e.target.value })}
              />
              <br />
              {/* <span className="text-red-400">Error Email</span> */}
            </div>
          </div>
          <br />
          <div>
            <label className="mb-0">Select Gender :</label>
            <br />
            <select
              className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-10  "
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
            {/* <span className="text-red-400">Error Gender</span> */}
          </div>
          <br />
          <div className="flex ">
            <div>
              <label className="mb-0">Enter Date of Birth</label>
              <br />
              <input
                type="date"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-10 "
                placeholder="Enter RollNo"
                value={todo.rollNo}
                onChange={(e) => setTodo({ ...todo, rollNo: e.target.value })}
              />
              <br />
              {/* <span className="text-red-400">Error RollNo</span> */}
            </div>
            <br />
            <br />
            <div className="ml-4">
              <label className="mb-0">Enter Contact No.</label>
              <br />
              <input
                type="email"
                className="w-[190px] border-2 border-gray-400 rounded h-10  mt-2 pl-10  "
                placeholder="Enter Email "
                value={todo.email}
                onChange={(e) => setTodo({ ...todo, email: e.target.value })}
              />
              <br />
              {/* <span className="text-red-400">Error Email</span> */}
            </div>
          </div>
          <br />
          <label className="mb-0">Select Country :</label>
          <br />
          <select
            name="country"
            className="w-[398px] border-2 border-gray-400 rounded h-10  mt-2 pl-10 "
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
          {/* <span className="text-red-400">Error Country</span> */}
          <br />

          <div className="text-[20px]">
            <label>Select Language :</label>
            <input type="checkbox" className="h-4 w-4 m-2" />
            <label>Hindi</label>

            <input type="checkbox" className="h-4 w-4 m-2" />
            <label>English</label>

            <input type="checkbox" className="h-4 w-4 m-2" />
            <label>Gujarati</label>
          </div>
          <br />

          <button
            onClick={handleAddTodo}
            className="h-[50px] w-[450px] bg-blue-500 text-white mb-5 rounded ml-7 cursor-pointer"
          >
            Submit
          </button>

          <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.firstName}
              {todo.lastName}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
      </ul>
        </div>
      </div>
    </div>
  );
}
