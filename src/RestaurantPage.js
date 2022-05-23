import React from 'react';
import "./RestaurantPage.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import profilePic from './images/bqmfbsn2fpw51.jpeg'
import starPic from './images/star.png'
import barPic from './images/bar.jpg'

class Review extends React.Component {
  render() {
    return (
      <div className="review">
        <div id="reviewHeader">
          <img
            src={profilePic}
            alt="profilePicture"
            className="pp"
          ></img>
          <div className="reviewName">
            <p>Username </p>
            <div id="stars2">
              <img
                src={starPic}
                className="star2"
              ></img>
              <img
                src={starPic}
                className="star2"
              ></img>
              <img
                src={starPic}
                className="star2"
              ></img>
              <img
                src={starPic}
                className="star2"
              ></img>
              <img
                src={starPic}
                className="star2"
              ></img>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor si gt amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
        </p>
      </div>
    )
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1 id="menuName">MENU</h1>
        <div id="menuCols">
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

// class WriteReview extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 id="menuName">WRITE REVIEW</h1>
//         <form>
//           <textarea rows="5" cols="50" id="TITLE"></textarea>
//         </form>
//         <div id="submitRev">
//           <div>
//             <img src={require("./images/star.png")} className="star3"></img>
//             <img src={require("./images/star.png")} className="star3"></img>
//             <img src={require("./images/star.png")} className="star3"></img>
//             <img src={require("./images/star.png")} className="star3"></img>
//             <img src={require("./images/star.png")} className="star3"></img>
//           </div>
//           <Button
//             sx={{
//               fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs',
//               fontWeight: 'bold',
//               fontSize: 15,
//               color: '#F2F2F0',
//             }}
//           >
//             <b>DELETE REVIEW</b>
//           </Button>
//           <Button>
//             <b>POST REVIEW</b>
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

export default function Restaurant() {
  let navigate = useNavigate();

  return (
    <div id="all">
      <div id="header">
        <div id="headerInfo">
          <h1 id="name">NAME OF HALL</h1>
          <div id="header2">
            <div id="stars">
              <img src={starPic} className="star"></img>
              <img src={starPic} className="star"></img>
              <img src={starPic} className="star"></img>
              <img src={starPic} className="star"></img>
              <img src={starPic} className="star"></img>
            </div>

            <div id="activity">
              <p>ACTIVITY:</p>
              <img
                src={barPic}
                className="statusBar"
              ></img>
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

            '&:hover': {
              backgroundColor: '#868686',
            }
          }}
        >

          ADD PHOTOS
        </Button>
      </div>
      {/* <div id="bruh">a</div> */}

      <div id="lower">
        <div id="bottom">
          <div id="menu">
            <Menu />
          </div>

          <div id="reviews">
            <div id="reviewTop">
              <Button
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
              >
                <b>ADD REVIEW</b>
              </Button>
              <h1>
                <b>REVIEWS</b>
              </h1>
            </div>
            <div id="reviewHolder">
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
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
