// import React, { useState } from "react";
// function Color(){
//     const [color,setColor] = useState("red");
//     return (
//       <div>
//         <h1>My Car Color is {color}</h1>
//         <button type="button" onClick={() => setColor("Blue")}>
//           Blue
//         </button>
//         <button type="button" onClick={() => setColor("Green")}>
//           Green
//         </button>
//       </div>
//     );
// }
// export default Color;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClickPlus() {
    // setCount(count + 1);
    setCount((pre) => {
      console.log(pre);
      return pre + 1;
    });
  }
  function handleClick() {
    setCount(count - 1);
    setCount((dec)=>{
      console.log(dec);
      return dec - 1
    })
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClick}>-</button>
    </div>
  );
};

export default Counter;
