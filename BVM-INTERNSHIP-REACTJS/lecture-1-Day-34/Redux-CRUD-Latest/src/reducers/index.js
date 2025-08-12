import { combineReducers } from "redux";
import crudReducer from "./crudReducers";
export default combineReducers({
    lists:crudReducer
})
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
