import React from 'react';
import StarRating from './Components/StarRating';
import PropTypes from "prop-types";

import './Homepage.css';


const PodiumBox = (props) => {
    return(
        <>
            <div className='podiumName'>
            {props.name} 
            </div>
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
    name: PropTypes.string.isRequired,
}
export default PodiumBox;