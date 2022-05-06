import React from 'react';
import "./RestaurantPage.css";

export default function Restaurant() {
    return (
      <div>
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

        <div id="menu">
          <h1>Menu</h1>
        </div>
      </div>
    );
}
