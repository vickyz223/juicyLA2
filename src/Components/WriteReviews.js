import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './WriteReviews.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHXTuxVK57ApJppliMgrtK5GlcZ7sWJmg",
    authDomain: "juicyla-7d596.firebaseapp.com",
    databaseURL: "https://juicyla-7d596-default-rtdb.firebaseio.com",
    projectId: "juicyla-7d596",
    storageBucket: "juicyla-7d596.appspot.com",
    messagingSenderId: "723240759802",
    appId: "1:723240759802:web:6f8babc225fadfd250b443",
    measurementId: "G-D3G6YJ6538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
function writeUserData(diningId, username, review) {
    const db = getDatabase();
    const reference = ref(db, diningId + '/' + username);

    set(reference, {
        // could add an optional username in here, in case we index the reviews in firebase
        review: review,
    });
}

writeUserData("Bplate", "jack", "Bplate be bussin");
writeUserData("Epicuria", "jen", "L coveL");

function WriteReview() {
    const [value, setValue] = React.useState('');
    const [name, setName] = React.useState('');
    const [count, setCount] = React.useState(0);

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        setName('');
        setValue('');
        // diningId should be taken from the page
        if (value !== '') {
            if (name === '') {
                const newName = 'Anonymous' + count;
                console.log(newName);
                writeUserData("Feast", newName, value);
                setCount(count + 1);
            }
            else {
                writeUserData("Feast", name, value);
            }
        }
    }

    return (
        <div>
            <div className='review-box'>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
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
                        />
                    </Box>
                </div>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50 ch' },
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
                                rows={7}
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                    </Box>
                </div>
                <div>
                    <Button variant="outlined" onClick={() => handleClick()}>Post</Button>
                </div>
            </div>
        </div>
    );
}

export default WriteReview;