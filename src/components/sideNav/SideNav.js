import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

const SideNav = ({ component }) => {
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
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstrategy_icon.d718b6f1.png&w=32&q=75"></img>
          </div>
          <Link to="/strategy">Strategy</Link>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbroker_icon.c643da69.png&w=32&q=75"></img>
          </div>
          <Link to="/broker">Broker</Link>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchart_pie.36d6f210.png&w=32&q=75"></img>
          </div>
          <Link to="/analytics">Analytics</Link>
        </div>
      </div>

      <div>
        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhelp_icon.3380c7f0.png&w=32&q=75"></img>
          </div>
          <Link>Help</Link>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsettings_icon.f2d17590.png&w=32&q=75"></img>
          </div>
          <Link>Settings</Link>
        </div>

        <div className="sidnav-content">
          <div>
            <img src="https://fintarget.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogout_icon.93af1f49.png&w=32&q=75"></img>
          </div>
          <Link>Log Out</Link>
        </div>
      </div>
      {component}
    </div>
  );
};

export default SideNav;
