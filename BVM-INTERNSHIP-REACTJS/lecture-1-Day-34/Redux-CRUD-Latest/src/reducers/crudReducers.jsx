// const LIST_ITEMS = "LIST_ITEMS";
// const initialState = {
//   lists: [],
//   item: {},
// };

// export default function rootReducer(state = initialState, action) {
//   console.log(action.payload,"Action payload");
//   console.log(state, "State");
//   switch (action.type) {
//     case LIST_ITEMS:
//       return {
//         ...state,
//         lists: action.payload,
//       };
//     default:
//       return state;
//   }
// }
// import { createStore } from "redux";
// 

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
    default:
      return state;
  }
}

// const LIST_ITEMS = "LIST_ITEMS";
// const initialState = {
//   lists: [],
//   item: {},
// };
//
// export default function rootReducer(state = initialState, action) {
//   console.log("Reducer action:", action);
//   console.log("Current state update:", state);

//   switch (action.type) {
//     case LIST_ITEMS:
//       console.log("LIST_ITEM action detected");
//       console.log("Payload received:", action.payload);

//       return {
//         ...state,
//         lists: action.payload,
//       };

//     default:return state;
//   }
// }
