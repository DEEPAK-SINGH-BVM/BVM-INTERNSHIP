const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  // console.log("ReducerAction",action.type ,"ActionPayload",action.payload);
  // console.log();
  // debugger
  switch (action.type) {
    case "ADD_USER":
      // console.log("first ADD ",state.todos);
      // console.log("second ADD",[...state.todos,action.payload]);
      // console.log("....STATE",{...state});
      // console.log("....STATE",[...state.todos,action.payload]);
      return {
        ...state,
        user: [...state.users, action.payload],
      };
   default:
      return state;
  }
}