import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";

  
const App = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    if (text.trim() != "") {
      addTodo({
        id: new Date().getTime(),
        text,
      });
      setText("");
    }
  };
  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };
  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  return (
    <div id="app">
      <div>
        <h2>Redux-Crud</h2>
        <input
          type="text"
          placeholder="Enter Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            className="Todo"
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) =>
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    }),
  removeTodo: (id) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    }),
  toggleTodo: (id) =>
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    }),

});
export default connect(mapStateToProps, mapDispatchToProps)(App);
