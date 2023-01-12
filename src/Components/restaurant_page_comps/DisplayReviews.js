import React from "react";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';
import "../component_styles/RestaurantPage.css";

function DisplayReviews({ userArr }) {
    return (
        <div>
            {userArr.map((element, i) => {
                return (
                    <div key={i} className="review">
                        <div id="reviewHeader">
                            <img
                                src={require("../../images/bqmfbsn2fpw51.jpeg")}
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
    userArr: PropTypes.array.isRequired
};

export default DisplayReviews;