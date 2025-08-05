import {   useReducer  } from "react";

function reducer(state, action) {
  if (action.type == "age_increment") {
    return {
      age: state.age + 1,
    };
  }
  if (action.type == "age_decrement") {
    return {
      age: state.age - 1,
    };
  }
  
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "age_increment" })}>
        Click For Increment
      </button>
      <br />
      <button onClick={() => dispatch({ type: "age_decrement" })}>
        Click For Decrement
      </button>
      <p>Hello, Your Age is {state.age}</p>
    </div>
  );
}

export default Counter;
