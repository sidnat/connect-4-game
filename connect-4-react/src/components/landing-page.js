import React from "react";
import "./landing-page.scss";


export default function LandingPage() {
  return (
    //clean up nested divs
    
    <div className="fullBody">

<div class="content">
  <div class="content__container">
    <p class="content__container__text">
      Let's Play Connect 
    </p>
    <ul class="content__container__list">
      <li class="content__container__list__item">4</li>
      <li class="content__container__list__item">6</li>
      <li class="content__container__list__item">9</li>
      <li class="content__container__list__item">12</li>
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
