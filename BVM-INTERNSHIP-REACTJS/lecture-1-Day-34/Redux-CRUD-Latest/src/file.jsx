/*
    todoAction.js
    // src/actions/todoActions.js

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});

reducer.js
// src/reducers/todoReducer.js

const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}


app.js
// src/App.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./actions/todoActions";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
          completed: false,
        })
      );
      setText("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div id="app">
      <h2>Redux-Crud</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

*/