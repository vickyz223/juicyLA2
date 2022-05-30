import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import StarRating from './Components/StarRating';
import WriteReviews from './Components/WriteReviews';
import MenuComponent from './menu_component.js';
import ActivityLevel from './activity_level.js';
import DisplayReviews from './Components/DisplayReviews';
import "./RestaurantPage.css";

export default function Restaurant() {
  const navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = React.useState(false)
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <div id="all">
      <div id="header">
        <div id="headerInfo">
          <h1 id="name">{location.state.name}</h1>
          <div id="header2">
            <div id="activity">
              <p>ACTIVITY:</p>
              <ActivityLevel restaurant="DeNeve" />
            </div>
          </div>

          <p>HOURS: 7:00 - 10:00</p>
        </div>


        <Button id="photoAdd" variant="contained"
          sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs',
            fontWeight: 'bold',
            fontSize: 15,
            width: 150,
            color: '#F2F2F0',
            backgroundColor: "transparent",
            border: 1,
            borderColor: "white",
            marginLeft: '2%',

            '&:hover': {
              backgroundColor: '#868686',
            }
          }}
          onClick={
            () => { navigate('/PhotoGallery ', { state: { name: location.state.name } }) }
          }
        >

          PHOTOS
        </Button>
      </div>
      {/* <div id="bruh">a</div> */}

      <div id="lower">
        <div id="bottom">
          <div id="menu">
            {show ? <WriteReviews hallName={location.state.name} /> : <Menu />}
          </div>

          <div id="reviews">
            <div id="reviewTop">
              <div>
                <Button
                  variant="contained"
                  onClick={() => handleShow()}
                  sx={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs',
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#F2F2F0',
                    backgroundColor: "transparent",
                    border: 1,
                    borderColor: "white",

                    '&:hover': {
                      backgroundColor: '#868686',
                    }
                  }}
                >{show ? "Back to Menu" : "Add Review"}</Button>
              </div>
              <h1>
                <b>REVIEWS</b>
              </h1>
            </div>
            <div id="reviewHolder">
              <DisplayReviews hallName={location.state.name} />
            </div>
            <div id="reviewFooter"></div>
          </div>
        </div>

        <div id="footer">
          <Button id="backButton"
            variant="contained"
            onClick={
              () => { navigate('/') }
            }

            sx={{
              fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs',
              fontWeight: 'bold',
              fontSize: 15,
              color: '#F2F2F0',
              backgroundColor: "#EA4033",
              '&:hover': {
                backgroundColor: '#EA4033',
              }
            }}
          >
            Back to ratings
          </Button>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <div id="stars" className="star-rating">
        <p>Rate Your Meal:</p>
        <StarRating />
      </div>
      <div id="MenuHolder">
        <h1 id="menuName">MENU</h1>
        <div id="menuCols">
          <div className="col"><MenuComponent restaurant="DeNeve" /></div>
          {/* <div className="col"></div> */}
        </div>
      </div>
    </div>
  );
}