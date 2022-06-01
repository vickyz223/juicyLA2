import React from "react";
import PropTypes from "prop-types";
import { getDatabase, ref, onValue } from "firebase/database";
import Rating from '@mui/material/Rating';
import "../RestaurantPage.css";

function ReviewRating({ hallName }) {
    const db = getDatabase();
    const dbRef = ref(db, 'written reviews' + '/' + hallName);
    let total = 0;
    let count = 0;

    // useEffect(() => {


    // });

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            total += childSnapshot.val().rating;
            count += 1;
        });
        total /= count;
        console.log(total);
    });

    return (
        <div>
            <Rating
                value={total}
                defaultValue='3'
                readOnly
            />
        </div>
    );
}

ReviewRating.propTypes = {
    hallName: PropTypes.string.isRequired,
};

export default ReviewRating;