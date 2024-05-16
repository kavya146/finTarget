import React from "react";
import "./Content.css";

const StrategyAddLeg = () => {
  return (
    <div>
      <div className="font-size">Instrument</div>
      <select>
        <option>Banknifty</option>
        <option>Nifty</option>
        <option>Finnifty</option>
        <option>Midcapnifty</option>
      </select>
    </div>
  );
};

export default StrategyAddLeg;
