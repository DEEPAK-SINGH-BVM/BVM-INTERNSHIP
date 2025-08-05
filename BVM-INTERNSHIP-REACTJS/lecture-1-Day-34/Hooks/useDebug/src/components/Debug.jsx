// import { useState, useDebugValue } from "react";
// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   useDebugValue(count);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return { count, increment, decrement };

// }
//  function DeBug() {
//    const { count, increment, decrement } = useCounter(0);
//    return (
//      <div>
//        <h1>{count}</h1>
//        <button onClick={increment}>+</button>
//        <button onClick={decrement}>-</button>
//      </div>
//    );
//  }
// export default DeBug;

import { useState, useEffect, useDebugValue } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setData(result);
    }

    fetchData();
  }, [url]);

  useDebugValue(url ? `Data loaded: ${url.length} items` : "Loading...");
  return data;
}
function MyData() {
  const data = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      <div>Data: {JSON.stringify(data)}</div>
      {/* {data &&
        data.map((item) => {
        return <p key={item.id}>{item.title}</p>;

        })} */}
    </div>
  );
}
export default MyData;
