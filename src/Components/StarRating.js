import React from 'react';
import { getDatabase, ref, onValue, set } from "firebase/database";
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
// import { NoteTwoTone } from '@material-ui/icons';

function StarRating({ hallName }) {
    const [rating, setRating] = React.useState(0);

    const db = getDatabase();
    const dbRef = ref(db, 'ratings' + '/' + hallName);
    
    let num, count;
    const getMealPeriod = () =>
    {
        const now = new Date() ;
        let time = now.getHours();
        // time  = 10.5;
        if ((time < 10 && time >=8) ||(time < 15 && time >=11) || time >= 17 && time < 21){
             return true

        }
        return false
    }
    onValue(dbRef, (snapshot) => {
        num = snapshot.val().rating;
        count = snapshot.val().count;
    });

    const updateRating = () => {
 
        if (!getMealPeriod()){
            console.log('not a meal period')
            return
        } else {
            num = ((num * count) + rating);
            count += 1;
            count > 0 ? num /= count : 0;
        }

        
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