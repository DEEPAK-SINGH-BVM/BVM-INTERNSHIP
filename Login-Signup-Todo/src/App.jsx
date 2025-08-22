// import Login from "./components/Login/Login";
// import { useSelector } from "react-redux";
// import { selectUser } from "./components/reducer/LoginSignup";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Dark from "./LightDark/dark";

// const App = () => {
//   const user = useSelector(selectUser);
//   console.log(user,'SELECT-USER');

//   return (
//     <div>
//         {/* <Dark/> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import { faMoon } from "@fortawesome/free-regular-svg-icons";

import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-yellow-100 dark:bg-blue-900 bg-black">
      <div className="bg-blacK "></div>
      <button onClick={() => darkModeHandler()}>
        {dark && <IoSunny />}
        {!dark && <IoMoon />}
      </button>
    </div>
  );
}

export default App;
