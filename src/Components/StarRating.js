import React from 'react';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function StarRating({ hallName }) {
    const [rating, setRating] = React.useState(0);

    const db = getDatabase();
    const dbRef = ref(db, 'ratings' + '/' + hallName);

    let num, count;
    onValue(dbRef, (snapshot) => {
        num = snapshot.val().rating;
        count = snapshot.val().count;
    });

    const updateRating = () => {
        num = ((num * count) + rating);
        count += 1;
        num /= count;

        set(dbRef, {
            rating: num,
            count: count,
        });
    }

    function handleClick() {
        updateRating();
    }

    return (
        <div>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, ratingValue) => {
                    setRating(ratingValue);
                }}
            />
            <Button
                sx={{
                    color: 'white',
                    width: 50,
                }}
                variant="outlined"
                onClick={() => handleClick()}
            >
                Vote
            </Button>
        </div>
    );
}

StarRating.propTypes = {
    hallName: PropTypes.string.isRequired,
};

export default StarRating;