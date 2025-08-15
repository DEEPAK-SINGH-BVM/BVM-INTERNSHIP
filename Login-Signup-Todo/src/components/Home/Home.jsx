// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return(
    <div>
        <h1>
            Welcome <span>{user.name}</span>
        </h1>
        <button onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
  )
};

export default Logout