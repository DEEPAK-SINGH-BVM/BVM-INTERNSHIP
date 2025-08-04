// import Navbar from "./Components/Navbar";
// import AllRoutes from "./Routes/AllRoutes";

// function App() {

//   return (
//     <div>
//       <AllRoutes/>
//       <Navbar/>
//     </div>
//   );
// }

// export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Signup from "./Pages/signup";
// import Welcome from "./Pages/welcome";
// import Contact from "./Pages/Contact";
// import PrivateRoute from "./Pages/Conditional";
// import Navbar from "./Components/Navbar";
// function App(){
//    return (
//      <BrowserRouter>
//      <Navbar/>
//        <Routes>
//          <Route path="/Home" element={<Home />} />
//          <Route path="/signup" element={<Signup />} />
//          <Route path="/login" element={<Login />} />
//          <Route path="/contact" element={<Contact />} />
//          <Route
//            path="/welcome"
//            element={
//             //  <PrivateRoute>
//             <PrivateRoute>
//                <Welcome/>
//             </PrivateRoute>
//            }
//          />
//        </Routes>
//      </BrowserRouter>
//    );
// }
// export default App;

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route
//         path="/welcome"
//         element={
//           <PrivateRoute>
//             <Welcome />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;

//App.js

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
// import PrivateRoutes from "./utils/PrivateRoutes";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route element={<PrivateRoutes />}>
//             {/* <Route element={<Home />} path="/" exact /> */}
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/Contact" element={<Contact />} />
//           </Route>

//           {/* <Route element={<Login />} path="/login" /> */}
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const isLoggedIn = false; 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;