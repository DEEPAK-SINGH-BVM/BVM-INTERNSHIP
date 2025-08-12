import { createStore } from "redux";
import reducers from "./reducers";

// const store = createStore(reducers, ["Use Redux"]);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";

 const store = configureStore({
  reducer: {
    counter: reducers,
  },
});
// import { createStore, combineReducers } from "redux";
// import todoReducer from "./reducers/crudReducers"; 

// const rootReducer = combineReducers({
//   todos: todoReducer,
// });

// const store = createStore(rootReducer);

export default store;
