import React, { useState, useCallback } from "react";

const funcSet = new Set();

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  const incCnt = useCallback(() => setCnt(cnt + 1), [cnt]);
  const decCnt = useCallback(() => setCnt(cnt - 1), [cnt]);
  const incNum = useCallback(() => setNum(num + 1), [num]);

  console.log(incCnt, "With");
  console.log(decCnt, "With");

  funcSet.add(incCnt);
  funcSet.add(decCnt);
  funcSet.add(incNum);

  return (
    <div>
      <h2>With useCallback Hook</h2>
      <p>{cnt}</p>
      <p>{num}</p>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

export default App;
