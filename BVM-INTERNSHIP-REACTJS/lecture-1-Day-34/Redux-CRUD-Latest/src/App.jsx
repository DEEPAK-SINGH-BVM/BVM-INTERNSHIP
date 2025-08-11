

// function App() {

//   return (
//     <div>
//         <h1>Hello</h1>
//     </div>
//   )
// }
// export default App
import React from "react";
import { Provider } from "react-redux";
//import "../../App.scss";
import store from "./store";
import Home from "./components/Home/Home";
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}