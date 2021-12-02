import React from "react";
import BillSpecs from "./BillSpecs";


export default function BillsCast({ cast }) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">{
          cast.map(c => <BillSpecs key={c.id} bill={c} />)
        }</div>
      </div>
    </div>
  );
}
