
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./components/reducer/LoginSignup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Dark from "./LightDark/dark";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user,'SELECT-USER');
  
  return (
    <div>
        {/* <Dark/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <button
    //     type="button"
    //     className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200"
    //     data-hs-theme-click-value="dark"
    //   >
    //     <span className="group inline-flex shrink-0 justify-center items-center size-9">
    //       <svg
    //         className="shrink-0 size-4"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    //       </svg>
    //     </span>
    //   </button>
    //   <button
    //     type="button"
    //     className="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200"
    //     data-hs-theme-click-value="light"
    //   >
    //     <span className="group inline-flex shrink-0 justify-center items-center size-9">
    //       <svg
    //         className="shrink-0 size-4"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <circle cx="12" cy="12" r="4"></circle>
    //         <path d="M12 2v2"></path>
    //         <path d="M12 20v2"></path>
    //         <path d="m4.93 4.93 1.41 1.41"></path>
    //         <path d="m17.66 17.66 1.41 1.41"></path>
    //         <path d="M2 12h2"></path>
    //         <path d="M20 12h2"></path>
    //         <path d="m6.34 17.66-1.41 1.41"></path>
    //         <path d="m19.07 4.93-1.41 1.41"></path>
    //       </svg>
    //     </span>
    //   </button>
    // </div>
  );
};

export default App;