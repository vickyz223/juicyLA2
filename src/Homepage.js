import React from 'react';
import { useNavigate } from "react-router-dom";
import WriteReviewButton from './Components/WriteReviewButton';
import StarRating from './Components/StarRating';
import PodiumBox from './PodiumBox';

import './Homepage.css';

const Homepage = () => {
    let navigate = useNavigate();

    return (
        <>
            <div className='topDivider'>
                <div className='brand'>
                    JUICYLA
                </div>
                <div className='status'>
                    Current Rankings
                </div>
                <div className='podium'>

                    <div className='second'
                        id="podiumBoxes"
                        onClick={
                            () => { navigate('/RestaurantPage') }
                        }
                    >
                        <PodiumBox/>
                    </div>
                    <div className='first'
                    id='podiumBoxes'
                    onClick={
                        () => { navigate('/RestaurantPage') }
                    }
                >
                    <PodiumBox/>
                </div>
                <div className='third'
                    id="podiumBoxes"
                    onClick={
                        () => { navigate('/RestaurantPage') }
                    }
                >
                    <PodiumBox/>
                </div>
                </div>
                
            
            </div>

            <div className='leaderBoard'>
                hsvgjbckjndssdcv
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
                <h1>fyghj</h1>
            </div>
            <WriteReviewButton />
            <StarRating />
        </>
    );
}

export default Homepage;