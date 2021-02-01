import React from "react";
import "./Explore.css";
import { Redirect } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

const Explore = () => {
  if (!localStorage.getItem("email")) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="explore">
        <Sidebar />
        <div>
          <div className='explore__header'>
          Trends for you
            </div>
            <div className="trend"><div># Hello</div><div className="number">10 Tweets</div></div>
            <div className="trend"><div># ok</div><div className="number">4 Tweets</div></div>
            <div className="trend"><div># Good night</div><div className="number">3 Tweets</div></div>
            <div className="trend"><div># test</div><div className="number">2 Tweets</div></div>
            <div className="trend"><div># hi</div><div className="number">2 Tweets</div></div>
        </div>
        <Widgets />
      </div>
    );
  }
};

export default Explore;
