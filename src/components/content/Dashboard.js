import React, { useState, useEffect } from "react";
import "./Content.css";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="main-style">
      <div className="dashboard-style">
        <div>Welcome</div>
        <div>Dashboard</div>
        <div>{currentTime.toLocaleString()}</div>
      </div>

      <div id="line"></div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        Complete <span className="span-color-decoration">broker login</span> to
        get live ticker update
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="span-style">
            <span style={{ color: "#a2a2a2" }}>Total PNL</span>
            <span>0/-</span>
          </div>

          <div className="span-style">
            <span style={{ color: "#a2a2a2" }}>Total Order</span>
            <span>0</span>
          </div>

          <div>
            <span className="span-color-decoration">Total Strategies:</span>
            <span>0</span>
          </div>

          <div>
            <input type="text" placeholder="Search Strategies"></input>
          </div>
          <div>
            <button>Create New Strategy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
