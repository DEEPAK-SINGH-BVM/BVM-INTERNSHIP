// import { useState, createContext } from "react";
// import ReactDOM from "react-dom/client";

// const { useContext } = require("react");

// const UserContext = createContext();
// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component1 user={user} />
//     </UserContext.Provider>
//   );
// }
// export default Component1;

// import { useContext } from "react";
// import PageNameContext from "./PageNameContext";

// const ChildComponent = () => {
//   const pageName = useContext(PageNameContext);

//   return <p>This a sub-component, nested in the {pageName} page</p>;
// };

// export default ChildComponent;

import { useContext } from "react";
import PageNameContext from "./PageNameContext";

const ChildComponent = () => {
  const pageName = useContext(PageNameContext);
  return <div> Component 1 {pageName}</div>;
};
export default ChildComponent;
