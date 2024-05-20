import React, { useState } from "react";
import "./Content.css";

const Segments = () => {
  const [segment, setActiveSegment] = useState({ OPT: true, FUT: false });
  return (
    <div className="position-btn">
      <div className="font-size">Segments</div>
      <button
        onClick={() => setActiveSegment({ FUT: false, OPT: true })}
        className={`${segment.OPT ? "blueclass" : ""}`}
      >
        OPT
      </button>
      <button
        onClick={() => setActiveSegment({ FUT: true, OPT: false })}
        className={`${segment.FUT ? "blueclass" : ""}`}
      >
        FUT
      </button>
    </div>
  );
};

export default Segments;
