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

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./components/Home/crudAction";
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
      <div>
        {todos && todos.map((todo) => <div key={todo.id}>{todo.text}</div>)}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo } from "./components/Home/crudAction";

// export default function App() {
//   const [todo, setTodo] = useState({ name: "", description: "" });

//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);

//   const handleAddTodo = () => {
//     // if (!todo.name || !todo.description) return;

//     dispatch(
//       addTodo({
//         id: Date.now(),
//         name: todo.name,
//         description: todo.description,
//       })
//     );
//     console.log(todo.name,"NAME");
//     console.log(todo.description, "Description");
//     setTodo({ name: "", description: "" });
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   return (
//     <div id="app">
//       <h2>Redux CRUD</h2>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={todo.name}
//         onChange={(e) => setTodo({ ...todo, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Enter Description"
//         value={todo.description}
//         onChange={(e) => setTodo({ ...todo, description: e.target.value })}
//       />
//       <button onClick={handleAddTodo}>Add</button>
  
//       <ul>
//         {todos &&
//           todos.map((todo) => (
//             <li key={todo.id}>
//               {todo.name}
//               {todo.description}
//               <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }
