import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
       const data = await fetch("https://fakestoreapi.com/products");
       const response = await data.json();
       setData(response);
       console.log(response);
     };
     fetchData();
   }, []);

  return data;
};

export default useFetch;
