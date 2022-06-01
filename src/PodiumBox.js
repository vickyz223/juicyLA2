import React from 'react';
import Rating from '@mui/material/Rating';
import PropTypes from "prop-types";
import ActivityLevel from './Components/ActivityLevel';
import MenuComponent from './Components/MenuComponent';
import './Homepage.css';


const PodiumBox = ({rating, name, mealperiod}) => {
    console.log("mealperiod" + mealperiod)
    return (
        <>
            <div className='podiumName'>
                {name}
            </div>
            <div className="info">
               
                
                {mealperiod ? 
                    <>
                        <div className='stars'>
                            <Rating
                                // defaultValue='3'
                                value={rating}
                                readOnly
                            />
                        </div>
                        <div className='activity'>
                            <div> Activity</div>
                        </div>
                            <ActivityLevel restaurant={name} />
                    </>
                    
                    : <div className="mealperiod" color='black'>
                        non meal period: no activity and live rating
                        </div> }

            </div>
            <div className='summary'>
                <MenuComponent restaurant={name} />
            </div>
        </>
    )

}

PodiumBox.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mealperiod: PropTypes.bool.isRequired
}

export default PodiumBox;