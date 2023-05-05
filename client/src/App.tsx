import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch("http://localhost:8080/products/test")
      .then((res) => res.json())
      .then((json) => {
        setData(json.message);
        console.log(json);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>Test</h1>
      <p>{data ? data : "not fetched"}</p>
    </>
  );
}

export default App;
