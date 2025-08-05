import React, { useState } from "react";

const funcSet = new Set();

const Program2 = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  const incCnt = () => setCnt(cnt + 1);
  const decCnt = () => setCnt(cnt - 1);
  const incNum = () => setNum(num + 1);
  console.log(incCnt, "WithOut");
  console.log(decCnt, "WithOut");

  funcSet.add(incCnt);
  funcSet.add(decCnt);
  funcSet.add(incNum);
//   alert(funcSet.size);

  return (
    <div>
      <h2>Without useCallback Hook</h2>
      <p>{cnt}</p>
      <p>{num}</p>
      
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

export default Program2;
