import React, { useState } from "react";

const ProfitManagement = () => {
  const [display, setDisplay] = useState(0);
  return (
    <div>
      <div>
        <div style={{ marginLeft: "25px", marginTop: "20px" }}>
          Profit Management
        </div>
        <div>
          <select
            onChange={(e) => {
              let index = e.target.selectedIndex;
              setDisplay(index);
            }}
          >
            <option value="lockProfit">Lock Profit</option>
            <option value="lockTrail">Lock and Trail</option>
            <option value="trailProfit">Trail Profit</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: `${display === 0 ? "" : "none"}`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <label className="font-size">If Profit reaches: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
          <div>
            <label className="font-size">Lock Profit At: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
        </div>
      </div>

      <div
        style={{
          display: `${display === 1 ? "" : "none"}`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <label className="font-size">If Profit reaches: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
          <div>
            <label className="font-size">Lock Profit At: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <label className="font-size">
              For every increase in profit by:{" "}
            </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
          <div>
            <label className="font-size">Trail minimum profit by: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
        </div>
      </div>

      <div
        style={{
          display: `${display === 2 ? "" : "none"}`,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <label className="font-size">
              For every increase in profit by:{" "}
            </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
          <div>
            <label className="font-size">Trail minimum profit by: </label>
            <input type="text" style={{ width: "4vw" }}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitManagement;
