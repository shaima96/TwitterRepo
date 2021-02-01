import React from "react";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./Homepage.css";
import { Redirect } from "react-router-dom";

function Homepage() {
  if (!localStorage.getItem("email")) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="homepage">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    );
  }
}

export default Homepage;
