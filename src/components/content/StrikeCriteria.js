import React from "react";
import "./Content.css";

const StrikeCriteria = () => {
  return (
    <div>
      <div className="font-size">Strike Criteria</div>
      <select>
        <option>ATM Type</option>
        <option>Closest Premium</option>
      </select>
    </div>
  );
};

export default StrikeCriteria;
