import React from "react";
import "./landing-page.scss";


export default function LandingPage() {
  return (
    //clean up nested divs
    
    <div className="fullBody">

<div className="content">
  <div className="content__container">
    <p className="content__container__text">
      Let's Play Connect 
    </p>
    <ul className="content__container__list">
      <li className="content__container__list__item">4</li>
      <li className="content__container__list__item">5</li>
      <li className="content__container__list__item">7</li>
      <li className="content__container__list__item">9</li>
    </ul>
  </div>
</div>     
 <div className="hero">
        <div className="mainimage">
          <div className="parent">
            <img
              className="image1"
              src="/images/connect4transparent.png"
              alt="Connect4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
