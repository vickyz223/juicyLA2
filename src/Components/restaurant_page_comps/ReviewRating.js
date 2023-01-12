import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Rating from '@mui/material/Rating';
import "../../RestaurantPage.css";

const styles = {
    historical: {
        display: "flex",
        width: "20vw",
    },
    title: {
        marginRight: "1vw"
    }
}

function ReviewRating({ userArr }) {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        let count = 0;
        let ratingSum = 0;
        console.log(userArr);
        if (!userArr) {
            return;
        }
        userArr.forEach((user) => {
            ratingSum += user.rating;
            count++;
        });
        setRating(count === 0 ? 0 : ratingSum / count);
    }, [userArr])



    return (
        <div style={styles.historical}>
            <p style={styles.title}>Historical Rating: </p>
            <Rating
                value={rating}
                readOnly
            />
        </div>
    );
}

ReviewRating.propTypes = {
    userArr: PropTypes.array.isRequired,
};

export default ReviewRating;