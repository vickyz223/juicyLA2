import React from 'react';
import Rating from '@mui/material/Rating';

function StarRating() {
    const [rating, setRating] = React.useState(0);
    // Need user authentication to finish
    return (
        <div>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, ratingValue) => {
                    setRating(ratingValue);
                }}
            />
        </div>
    );
}

export default StarRating;