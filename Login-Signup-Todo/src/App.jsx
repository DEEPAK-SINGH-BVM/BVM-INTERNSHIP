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
// 
// export default App;
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import Logout from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup/Signup";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Home" element={user ? <Logout /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;