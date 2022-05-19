import React from 'react'
import Button from '@mui/material/Button';
import WriteReviews from './WriteReviews';

function WriteReviewButton() {
    const [show, setShow] = React.useState(false)
    const handleShow = () => {
        setShow(true);
    }

    return (
        <div>
            {show ? <WriteReviews /> : <Button variant="contained" onClick={() => handleShow()}>Contained</Button>}
        </div>
    );
}

export default WriteReviewButton;