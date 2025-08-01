import React, { useState } from "react";

function Color(){
    const [color,setColor] = useState("red");
    return (
      <div>
        <h1>My Car Color is {color}</h1>
        <button type="button" onClick={() => setColor("Blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setColor("Green")}>
          Green
        </button>
      </div>
    );
}
export default Color;