import React from "react";
import SideNav from "../sideNav/SideNav";
import "./MainContent.css";

const MainContent = ({ component }) => {
  return (
    <div className="main-content-style">
      <SideNav></SideNav>
      {component}
    </div>
  );
};

export default MainContent;
