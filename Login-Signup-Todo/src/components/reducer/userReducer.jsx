const initialState = {
  users: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((i) => i.id !== action.payload),
      };

    case "EDIT_USER":
      console.log("first-EDIT", state.users);
      console.log(
        "second-EDIT",
        state.users.map((data) =>
          data === action.payload ? action.payload : data
        )
      );
      console.log("ACTION-PAYLOAD-ID", action.payload.id);

      // state.users.forEach((user) => {
      //   console.log("user-ID", user.id);
      // });
      return {
        ...state,
        users: state.users.map((data) =>
          data.id === action.payload.id ? action.payload : data
        ),
      };

    default:
      return state;
  }
}
/*

const initialState = {
  users: [],
  currentUser: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP":
      console.log("signup action", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload,
      };

    case "LOGIN": {
      console.log("login action:", action.payload);
      const { email, password } = action.payload;

      const user = state.users.find(
        (e) => e.email === email && e.password === password
      );

      if (user) {
        console.log("login successful");
        return {
          ...state,
          currentUser: user,
        };
      } else {
        alert("Invalid Email & Password");
        return state;
      }
    }

    case "LOGOUT":
      console.log("logout action triggered");
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
}
*/
