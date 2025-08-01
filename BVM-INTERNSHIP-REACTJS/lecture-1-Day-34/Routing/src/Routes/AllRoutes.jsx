import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/signup";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AllRoutes;