import React from 'react';
import "./RestaurantPage.css";

export default function Restaurant() {
    return (
      <div id="all">
        <div id="header">
          <div id="headerInfo">
            <h1 id="name">NAME OF HALL</h1>
            <div id="header2">
              <div id="stars">
                <img src={require("./images/star.png")} className="star"></img>
                <img src={require("./images/star.png")} className="star"></img>
                <img src={require("./images/star.png")} className="star"></img>
                <img src={require("./images/star.png")} className="star"></img>
                <img src={require("./images/star.png")} className="star"></img>
              </div>

              <div id="activity">
                <p>ACTIVITY:</p>
                <img
                  src={require("./images/bar.jpg")}
                  className="statusBar"
                ></img>
              </div>
            </div>

            <p>HOURS: 7:00 - 10:00</p>
          </div>

          <button id="photoAdd">
            <b>ADD PHOTOS</b>
          </button>
        </div>
        <div id="bruh">a</div>

        <div id="bottom">
          <div id="menu">
            <h1 id="menuName">MENU</h1>
            <div id="menuCols">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <div id="reviews">
            <button>
              <b>ADD REVIEW</b>
            </button>
            <h1>
              <b>REVIEWS</b>
            </h1>
          </div>
        </div>
      </div>
    );
}
