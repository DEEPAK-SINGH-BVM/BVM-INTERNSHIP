import { createStore } from "redux";
import reducers from "./reducers";
const store = createStore(reducers);
export default store;
// import { createStore, combineReducers } from "redux";
// import todoReducer from "./reducers/crudReducers"; 

// const rootReducer = combineReducers({
//   todos: todoReducer,
// });

// const store = createStore(rootReducer);

// export default store;
