import React, { useEffect, useState } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

const url = "http://localhost:8002/bills ";

export default function App() {
  //start here with your code for step one
  const [bills, setBills] = useState([]);
  const [cast, setCast] = useState([]);


  useEffect(
    () =>
      fetch(url)
        .then((res) => res.json())
        .then((json) => setBills(json)),
    []
  );

  return (
    <div>
      <BillsCast cast={cast} />
      <BillCollection bills={bills}/>
    </div>
  );
}
