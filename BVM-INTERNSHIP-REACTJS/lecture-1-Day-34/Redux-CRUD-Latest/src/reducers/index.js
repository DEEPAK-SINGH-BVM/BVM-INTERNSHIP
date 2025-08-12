import { combineReducers } from "redux";
import crudReducer from "./crudReducers";

export default combineReducers({
  list: crudReducer,
});

// const todoReducers = combineReducers({
//     list:crudReducer,
// })

// export default todoReducers

// import { combineReducers } from "redux";
// import crudReducer from "./crudReducers";

// console.log("Combining reducers...");

// const rootReducer = combineReducers({
//   lists: crudReducer,
// });

// console.log("Initial combined state shape:", {
//   lists: crudReducer(undefined, {}), // simulate initial state
// });

// export default rootReducer;

// import todoReducer from "./components/Home/crudReducer";

// export default todoReducer;
// {
//   todos: [...]
//              }