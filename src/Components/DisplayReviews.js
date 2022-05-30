import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';
import "../RestaurantPage.css";

function DisplayReviews({ hallName }) {
    const db = getDatabase();
    const dbRef = ref(db, 'written reviews' + '/' + hallName);
    let userObj = {};
    let userArr = [];

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            userObj = {
                user: childSnapshot.key,
                rating: childSnapshot.val().rating,
                review: childSnapshot.val().review,
            };
            userArr.push(userObj);
        });
    });


    return (
        <div>
            {userArr.map((element) => {
                return (
                    <div key={element} className="review">
                        <div id="reviewHeader">
                            <img
                                src={require("../images/bqmfbsn2fpw51.jpeg")}
                                alt="profilePicture"
                                className="pp"
                            ></img>
                            <div className="reviewName">
                                <p>{element.user}</p>
                                <Rating
                                    value={element.rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        <p>{element.review}</p>
                    </div>
                );
            })}
        </div>
    );
}

DisplayReviews.propTypes = {
    hallName: PropTypes.string.isRequired,
};

export default DisplayReviews;