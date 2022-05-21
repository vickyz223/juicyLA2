import React from 'react';
import StarRating from './Components/StarRating';
import PropTypes from "prop-types";

import './Homepage.css';


const PodiumBox = () => {
    return(
        <>
            <div className='podiumName'>Name</div>
                <div className="info">
                        <div className='stars'>
                        <StarRating />

                        </div>
                        <div className='activity'>
                            <h2> Activity</h2>
                        </div>
                </div>
                        
                        <div className='summary'>
                        </div>
        </>
    )

}
PodiumBox.propTypes ={
    name: PropTypes.string,
}

export default PodiumBox;