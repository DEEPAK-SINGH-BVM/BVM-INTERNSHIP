// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default Counter;
// import React, { useState, useEffect } from "react";

// const RandomUser = () => {
//   const [userData, setUserData] = useState([]);
//   useEffect(() => {
//     fetch("https://random-data-api.com/api/v2/users?size=5")
//       .then((response) => response.json())
//       .then((data) => setUserData(data));
//   });
//   return(
//     <div>
//         <h2>Random UserData</h2>
//         {userData.map(user=>{
//             <li key={user.id}>
//                 <p>
//                     Name:{user.first_name}
//                     {user.last_name}
//                 </p>
//                 <p>
//                     Email:{user.email}
//                 </p>
//             </li>
//         })}
//   </div>
//   )
// };

// export default RandomUser;
/* RandomUserList.js */

import React, { useState, useEffect } from "react";

function RandomUserList() {
  const [userList, setUserList] = useState([]);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => response.json())

  //       .then((data) => setUserList(data));
  //   }, []);
  //   const fetchData = async () => {
  //     const data = await fetch("https://fakestoreapi.com/products");
  //     const response = data.json();
  //     setUserList(response);
  //     // console.log(response, "Working!!");
  //   };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setUserList(response);
      console.log(response);
    };
    fetchData();
  },[]);

  return (
    <div>
      <h2>Random User List</h2>
      <ul>
        {userList.map((user) => (
          <li>
            <p>{user.id}</p>
            <p>
              Title:
              {user.title}
            </p>
            <p>
              Price:
              {user.price}
            </p>
            <p>
              IMG:
              <img src={user.image} alt="" height="50px" />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomUserList;
