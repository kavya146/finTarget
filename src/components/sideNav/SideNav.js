import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sidenav-style">
      <div>
        <img
          className="sidenav-img"
          src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.011e050e.png&w=1920&q=75"
        ></img>
      </div>

      <div>
        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard_icon_active.e8ca9e16.png&w=32&q=75"></img>
          </div>
          <div>Dashboard</div>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrategy_icon.d718b6f1.png&w=32&q=75"></img>
          </div>
          <div>Strategy</div>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbroker_icon.c643da69.png&w=32&q=75"></img>
          </div>
          <div>Broker</div>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchart_pie.36d6f210.png&w=32&q=75"></img>
          </div>
          <div>Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
