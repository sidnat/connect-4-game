import React from "react";
import './landing-page.css';

export default function LandingPage() {

  return (
    //clean up nested divs
    <div className="fullBody">
      <div className="hero">
        <div className="mainimage">
          <div className="parent">
            <img className="image1" src="/images/connect4transparent.png" alt="Connect4" />
          </div>
        </div>
      </div>
    </div>
  );
}