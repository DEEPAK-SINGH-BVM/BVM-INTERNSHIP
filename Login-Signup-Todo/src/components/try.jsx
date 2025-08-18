/*

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },

    logout: (state) => {
      state.user = null;
      console.log(state.user);
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
import "./Login.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validation = () => {
    let newError = {};
    // console.log(newError,'newError');
    if (!email) {
      newError.email = "Email is required";
      // console.log(newError.email, "NEW EMAIL");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Enter a valid email address";
    }

    if (!password) {
      newError.password = "Password is required";
    }
    setErrors(newError);

    // console.log(Object.keys(newError).length,'Length');

    return Object.keys(newError).length == 0;
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
    navigate("/home");
  };
  import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Home" element={user ? <Home /> : <Login />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
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
  console.log(searchItem, "SEARCH");

  // console.log(filters,'FILTER');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.counter.list.todos);
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
    //
    if (!todo.gender) newErrors.gender = "Gender is required";

    setErrors(newErrors);
    // console.log(Object.keys(newErrors).length);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log(edit, "EDIT");

    if (edit) {
      dispatch(editTodo({ ...todo, id: edit }));
      setEdit(null);
      console.log(dispatch(editTodo({ ...todo })), "all -data");
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
 */