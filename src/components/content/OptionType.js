import React, { useState } from "react";
import "./Content.css";

const OptionType = () => {
  const [OptionType, setActiveOption] = useState({ CE: true, PE: false });
  return (
    <div className="position-btn">
      <div className="font-size">Option Type</div>
      <button
        onClick={() => setActiveOption({ PE: false, CE: true })}
        className={`${OptionType.CE ? "blueclass" : ""}`}
      >
        CE
      </button>
      <button
        onClick={() => setActiveOption({ PE: true, CE: false })}
        className={`${OptionType.PE ? "blueclass" : ""}`}
      >
        PE
      </button>
    </div>
  );
};

export default OptionType;
