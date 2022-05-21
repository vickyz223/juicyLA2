import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import './WriteReviews.css';
import { getDatabase, ref, set } from "firebase/database";

function writeUserData(diningId, username, review, stars) {
  const db = getDatabase();
  const reference = ref(db, 'written reviews' + '/' + diningId + '/' + username);

  set(reference, {
    // could add an optional username in here, in case we index the reviews in firebase
    review: review,
    rating: stars,
  });
}

writeUserData("Bplate", "jack", "Bplate be bussin", 5);
writeUserData("Epicuria", "jen", "L coveL", 2);

function WriteReview() {
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [rating, setRating] = React.useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDelete = () => {
    setName('');
    setValue('');
    setRating(0);
  }

  const handleClick = () => {
    // diningId should be taken from the page
    if (value !== '') {
      if (name === '') {
        const newName = 'Anonymous' + count;
        writeUserData("Feast", newName, value, rating);
        setCount(count + 1);
      }
      else {
        writeUserData("Feast", name, value, rating);
      }
    }
    setName('');
    setValue('');
    setRating(0);
  }

  return (
    <div id="WriteReviewHolder">
      <div className="review-box">
        <div>
          <h2 className="review-header">WRITE REVIEW</h2>
        </div>
        <div>
          <Box
            id="bruh"
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-helperText"
              label="Name (Optional)"
              variant="standard"
              value={name}
              onChange={handleName}
              sx={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
                fontWeight: "bold",
              }}
            />
          </Box>
        </div>
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-multiline-static"
                label="Leave a Review"
                multiline
                maxRows={5}
                value={value}
                onChange={handleChange}
                className="review-field"
                sx={{
                  width: "75%",
                }}
              />
            </div>
          </Box>
        </div>
        <div className="bottom-row">
          <div>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, ratingValue) => {
                setRating(ratingValue);
              }}
            />
          </div>
          <div className="review-post-btn">
            <Button
              variant="outlined"
              sx={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
                fontWeight: "bold",
                fontSize: 15,
                color: "#F2F2F0",
                backgroundColor: "transparent",
                border: 1,
                borderColor: "white",

                "&:hover": {
                  backgroundColor: "#868686",
                },
              }}
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
            <Button
              sx={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
                fontWeight: "bold",
                fontSize: 15,
                color: "#F2F2F0",
                backgroundColor: "transparent",
                border: 1,
                borderColor: "white",

                "&:hover": {
                  backgroundColor: "#868686",
                },
              }}
              variant="outlined"
              onClick={() => handleClick()}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReview;