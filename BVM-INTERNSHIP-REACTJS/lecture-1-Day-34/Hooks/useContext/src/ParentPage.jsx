// import React, { useState, useContext, createContext } from "react";
// const UserContext = createContext();
// const UseContext = () => {
//   function Component1() {
//     const [user, setUser] = useState("React");
//     return (
//       <>
//         <UserContext.Provider value={user}>
//           <h1>{`hELLO ${user}`}</h1>
//           <Component2 />
//         </UserContext.Provider>
//       </>
//     );
//   }

//   function Component2() {
//     return (
//       <div>
//         <h1>Component2</h1>
//         <Component3 />
//       </div>
//     );
//   }

//   function Component3() {
//     return (
//       <div>
//         <h1>Component3</h1>
//         <h2>{`Hello ${user} again!`}</h2>
//       </div>
//     );
//   }
//   // const UseContext = () => {
//   //   //   function Component() {
//   //   //     const [user, setUser] = useState("React");
//   //   //     return (
//   //   //       <div>
//   //   //         <h1>Hello {user}</h1>
//   //   //         <Component2 user={user} />
//   //   //       </div>
//   //   //     );
//   //   //   }
//   //   //   function Component2({ user }) {
//   //   //     return <h1>Component 2 </h1>;
//   //   //   }
//   // };
// }
// export default UseContext;

import ChildComponent from "./components/ChildComponent";
import ChildComponent2 from "./components/ChildComponent2";
import PageNameContext from "./components/PageNameContext";

const ParentPage2 = () => (
  <PageNameContext.Provider value="Parent Page">
    <h1>Parent page title</h1>
    <ChildComponent />
    <ChildComponent2/>
  </PageNameContext.Provider>
);

export default ParentPage2;

// import ChildComponent from "./components/ChildComponent";
// import PageNameContext from "./components/PageNameContext";

// const ParentPage = () => {
//     <PageNameContext.Provider value="ParentPage">
//         <h1>Parent Page </h1>
//         <ChildComponent/>
//     </PageNameContext.Provider>
// };
// export default ParentPage;
