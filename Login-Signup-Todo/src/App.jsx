import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Home" element={user ? <Home /> : <Signup />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
