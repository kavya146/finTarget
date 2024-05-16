import React from "react";
import CurrentTime from "./CurrentTime";
import StrategyAddLeg from "./StrategyAddLeg";
import StrikeCriteria from "./StrikeCriteria";
import StrikeType from "./StrikeType";

const Strategy = () => {
  return (
    <div className="main-style">
      <div className="dashboard-style">
        <div>Create Strategy</div>
        <div>
          <CurrentTime />
        </div>
      </div>
      <div id="line"></div>

      <div>
        <div className="strategy-time-box">
          <div>
            <div style={{ marginBottom: "20px" }}>Strategy Name</div>
            <div>
              <input type="text" placeholder="Eg: Straddle"></input>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: "20px" }}>Time Setting</div>
            <div className="time-section">
              <div>
                Entry Time
                <input placeholder="select time"></input>
              </div>
              <div>
                Exit Time
                <input placeholder="select time"></input>
              </div>
            </div>
          </div>
        </div>
        <div id="line-centre"></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <StrategyAddLeg />
          <StrikeCriteria />
          <StrikeType />
        </div>
      </div>
    </div>
  );
};

export default Strategy;
