import React, { useState, useEffect } from "react";
import "./Content.css";

const Broker = () => {
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
        <div>Broker</div>
        <div>{currentTime.toLocaleString()}</div>
      </div>
      <div id="line"></div>
      <div style={{ padding: "30px" }}>Broker Setup</div>
      <div id="line-centre"></div>
      <div className="broker-box">
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFirstockBroker.ed250812.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>{" "}
              Setup
            </button>
          </div>
        </div>
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZerodahBroker.edc4dc3a.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>{" "}
              Setup
            </button>
          </div>
        </div>
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAngelOneBroker.caa15b70.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>{" "}
              Setup
            </button>
          </div>
        </div>
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFinvasiaBroker.764a4079.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>{" "}
              Setup
            </button>
          </div>
        </div>
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FupstoxBroker.0b79cc30.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              {" "}
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>{" "}
              Setup
            </button>
          </div>
        </div>
        <div className="box-style">
          <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFyresBroker.8ed356b5.png&w=256&q=75"></img>
          <div className="btn-box-centre">
            <button className="btn-broker">
              <img src="https://fintarget.in/_next/static/media/setup_icon.069c6012.svg"></img>
              Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broker;
