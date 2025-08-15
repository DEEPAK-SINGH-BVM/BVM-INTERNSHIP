// import Home from "./components/Home/Home";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import { BrowserRouter, Routes, Route } from "react-router";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         {/* <Home /> */}
//         {/* <Login/> */}
//         {/* <Signup /> */}
//         <Routes>
//           <Route path="/" element={<Signup />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { userSlice } from "./components/features/userSlice";
import Logout from "./components/Home/Home";

function App() {
  const user = useSelector(userSlice);
  return(
    <><div>{user ? <Logout /> : <Login />}</div><div><Login /></div></>
  )
}
export default App


//ERROR
/*
react-redux.js?v=345d93fd:941 Uncaught TypeError: Cannot read properties of undefined (reading 'getState')
    at react-redux.js?v=345d93fd:941:51
    at mountMemo (react-dom_client.js?v=345d93fd:5052:25)
    at Object.useMemo (react-dom_client.js?v=345d93fd:16513:20)
    at exports.useMemo (chunk-GN4BPQMF.js?v=345d93fd:918:36)
    at Provider (react-redux.js?v=345d93fd:941:31)
    at Object.react_stack_bottom_frame (react-dom_client.js?v=345d93fd:17424:20)
    at renderWithHooks (react-dom_client.js?v=345d93fd:4206:24)
    at updateFunctionComponent (react-dom_client.js?v=345d93fd:6619:21)
    at beginWork (react-dom_client.js?v=345d93fd:7654:20)
    at runWithFiberInDEV (react-dom_client.js?v=345d93fd:1485:72)

main.jsx:9 An error occurred in the <Provider> component.

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.
 */