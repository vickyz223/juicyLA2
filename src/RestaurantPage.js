import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import StarRating from './Components/StarRating';
import ReviewRating from "./Components/ReviewRating";
import WriteReviews from './Components/WriteReviews';
import MenuComponent from './Components/MenuComponent.js';
import ActivityLevel from './Components/ActivityLevel.js';
import DisplayReviews from './Components/DisplayReviews';
import { auth } from './firebase';
import "./RestaurantPage.css";
import { onValue, getDatabase, ref } from "firebase/database";

export default function Restaurant() {
  const db = getDatabase();
  const navigate = useNavigate();
  const location = useLocation();
  const diningHallName = location.state.name;
  const isMealPeriod = location.state.isMealPeriod;
  const [userArr, setUserArr] = useState([]);
  const dbRef = ref(db, 'written reviews' + '/' + diningHallName);

  const [show, setShow] = React.useState(false)
  const handleShow = () => {
    setShow(!show);
  }

  useEffect(() => {
    return onValue(dbRef, (snapshot) => {
        let userArrTemp = [];
        snapshot.forEach((childSnapshot) => {
            let userObj = {
                user: childSnapshot.key,
                rating: childSnapshot.val().rating,
                review: childSnapshot.val().review,
            };
            userArrTemp.push(userObj);
        });
        setUserArr(userArrTemp);
    });
  }, []);
  
  function Menu() {
    return (
      <div>
        <div id="stars" className="star-rating">
          <StarRating hallName={diningHallName} isMealPeriod={isMealPeriod}/>
        </div>
        <div id="MenuHolder">
          <h1 id="menuName">MENU</h1>
          <div id="menuCols">
            <div className="col"><MenuComponent restaurant={diningHallName} /></div>
            {/* <div className="col"></div> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="all">
      <div id="header">
        <div id="headerInfo">
          <h1 id="name">{diningHallName}</h1>
          <div id="header2">
            <div>
              <ReviewRating userArr={userArr} />
            </div>
            <div id="activity">
              <p>ACTIVITY:</p>
              <ActivityLevel restaurant={diningHallName} />
            </div>
          </div>
          <div className='times'>
            <p>BREAKFAST:<br/> 7:00am - 10:00am </p>  
            <p> LUNCH:<br/> 11:00am - 3:00pm </p>
            <p> DINNER: <br/>5:00pm - 9:00pm</p>
          </div>
           
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
            {show ? <WriteReviews hallName={diningHallName} /> : <Menu />}
          </div>

          <div id="reviews">
            <div id="reviewTop">
              <div>
                {auth.currentUser ? <Button
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
                  : <Button
                    variant="contained"
                    disabled
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
                  >Login to leave a Review</Button>}

              </div>
              <h1>
                <b>REVIEWS</b>
              </h1>
            </div>
            <div id="reviewHolder">
              <DisplayReviews userArr={userArr} />
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