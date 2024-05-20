import React, { useState } from "react";
import "./Content.css";

const Position = () => {
  const [position, setActivePosition] = useState({ BUY: true, SELL: false });
  return (
    <div className="position-btn">
      <div className="font-size">Position</div>
      <button
        onClick={() => setActivePosition({ SELL: false, BUY: true })}
        className={`${position.BUY ? "buyclass" : ""}`}
      >
        BUY
      </button>
      <button
        onClick={() => setActivePosition({ SELL: true, BUY: false })}
        className={`${position.SELL ? "sellclass" : ""}`}
      >
        SELL
      </button>
    </div>
  );
};

export default Position;
