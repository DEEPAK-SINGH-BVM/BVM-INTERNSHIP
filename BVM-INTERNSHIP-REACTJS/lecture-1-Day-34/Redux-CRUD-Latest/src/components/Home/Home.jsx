import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./crudAction";
export default function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        text,
      })
    );
    setText("");

    console.log(text, "TEXT");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div id="app">
      <h2>Redux-Crud </h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
      </ul>

      {/* <div>
        {todos && todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
      </div> */}
    </div>
  );
}
