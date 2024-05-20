import React, { useState } from "react";
import "./Content.css";

const StopLoss = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="font-size margin-right">Stop Loss</div>
        <select
          className="margin-right"
          onChange={(e) => {
            let index = e.target.selectedIndex;
            setDisplay(index);
          }}
        >
          <option value="none">None</option>
          <option value="mtm">MTM</option>
          <option value="premium">Premium %</option>
        </select>
        <input
          className="margin-right"
          type="text"
          style={{ width: "4vw", display: `${display === 0 ? "none" : ""}` }}
        ></input>
      </div>
      <div>
        <input type="checkbox"></input>
        <label className="font-size">SL Re-entry</label>
      </div>
    </div>
  );
};

export default StopLoss;
