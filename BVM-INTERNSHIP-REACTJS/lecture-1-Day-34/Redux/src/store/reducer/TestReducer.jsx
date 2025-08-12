// const initialState = {
//   users: null,
// };

// export default function TestReducer(state = initialState, action) {
//   switch (action.type) {
//     case "DO_THIS":
//       return {
//         ...state,
//         users: action.payload,
//       };
//     default:
//       return state;
//   }
// }
import { combineReducers } from "redux";
import TestReducer from "./TestReducer";

const reducers = combineReducers({
  Test: TestReducer,
  //other reducers come here...
});

export default reducers;