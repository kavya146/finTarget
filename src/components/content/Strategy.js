import React from "react";
import CurrentTime from "./CurrentTime";
import StrategyAddLeg from "./StrategyAddLeg";
import StrikeCriteria from "./StrikeCriteria";
import StrikeType from "./StrikeType";
import Position from "./Position";
import OptionType from "./OptionType";
import Segments from "./Segments";
import StopLoss from "./StopLoss";
import TotalLots from "./TotalLots";
import OverallTarget from "./OverallTarget";
import ProfitManagement from "./ProfitManagement";

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

        <div>
          <div style={{ marginLeft: "25px", marginTop: "20px" }}>Add Leg</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#fafafa",
              padding: "30px",
            }}
          >
            <StrategyAddLeg />
            <Segments />
            <Position />
            <OptionType />
            <StrikeCriteria />
            <StrikeType />
            <TotalLots />
            <button>Add Leg</button>
          </div>
        </div>

        <div id="line-centre"></div>
        <div style={{ display: "flex" }}>
          <div>
            <div style={{ marginLeft: "25px", marginTop: "20px" }}>
              Overall MTM
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <StopLoss />
              </div>
              <div>
                <OverallTarget />
              </div>
            </div>
          </div>
          <div>
            <ProfitManagement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
