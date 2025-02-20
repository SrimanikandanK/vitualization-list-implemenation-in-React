import React, { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log("hello", result);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
