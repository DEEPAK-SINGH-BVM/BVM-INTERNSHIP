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

const initialState = {
  todos: [],

};

export default function todoReducer(state = initialState, action) {
  // console.log("ReducerAction",action.type ,"ActionPayload",action.payload);
  // console.log();
  // debugger
  switch (action.type) {
    case "ADD_TODO":
      // console.log("first ADD ",state.todos);
      // console.log("second ADD",[...state.todos,action.payload]);
      // console.log("....STATE",{...state});
      // console.log("....STATE",[...state.todos,action.payload]);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      // console.log("Old ADD ",state.todos);
      // console.log("New REMOVE:", state.todos.filter((todo) => todo.id !== action.payload));
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      console.log("first-EDIT",state.todos);
      console.log("second-EDIT", state.todos.map((todo) => todo === action.payload ? action.payload : todo));
      console.log("ACTION-PAYLOAD-ID",action.payload.id);
      
      // state.todos.forEach((todo) => {
      //   console.log("TODO-ID", todo.id);
      // });
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
}

/*
  case "EDIT_TODO":
  console.log("first-EDIT", state.todos);
  console.log(
    "second-EDIT",
    state.todos.map((todo) =>
      todo === action.payload ? action.payload : todo
    )
  );
  console.log("ACTION-PAYLOAD-ID", action.payload.id);

  state.todos.forEach((todo) => {
    console.log("TODO-ID", todo.id);
  });

  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.payload.id ? action.payload : todo
    ),
  };

 */