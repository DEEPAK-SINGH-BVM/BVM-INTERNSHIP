// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo } from "./crudAction";

// export default function App() {
//   const [todo, setTodo] = useState({ name: "", description: "" });

//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);

//   const handleAddTodo = () => {
//     if (!todo.name || !todo.description) return;

//     dispatch(
//       addTodo({
//         id: Date.now(),
//         name: todo.name,
//         description: todo.description,
//       })
//     );

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
//           todos.map((t) => (
//             <li key={t.id}>
//               <strong>{t.name}</strong> — {t.description}
//               <button onClick={() => handleRemoveTodo(t.id)}>Remove</button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// import "./App.css";
// import React, { useState } from "react";
// import { connect } from "react-redux";

// const App = ({ todos, addTodo, removeTodo, toggleTodo }) => {
//   const [text, setText] = useState("");
//   const handleAddTodo = () => {
//     if (text.trim() != "") {
//       addTodo({
//         id: new Date().getTime(),
//         text,
//       });
//       setText("");
//     }
//   };
//   const handleRemoveTodo = (id) => {
//     removeTodo(id);
//   };
//   const handleToggleTodo = (id) => {
//     toggleTodo(id);
//   };

//   return (
//     <div id="app">
//       <div>
//         <h2>Redux-Crud</h2>
//         <input
//           type="text"
//           placeholder="Enter Task"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li
//             className="Todo"
//             key={todo.id}
//             onClick={() => handleToggleTodo(todo.id)}
//           >
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addTodo: (todo) =>
//     dispatch({
//       type: "ADD_TODO",
//       payload: todo,
//     }),
//   removeTodo: (id) =>
//     dispatch({
//       type: "REMOVE_TODO",
//       payload: id,
//     }),
//   toggleTodo: (id) =>
//     dispatch({
//       type: "TOGGLE_TODO",
//       payload: id,
//     }),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);


