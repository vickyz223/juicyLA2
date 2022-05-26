import React from 'react';
import StarRating from './Components/StarRating';
import PropTypes from "prop-types";
import ActivityLevel from './activity_level.js';
import MenuComponent from './menu_component';


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
                            <div> Activity</div>
                        </div>
                        <ActivityLevel restaurant={props.name}/>

                </div>  
                        <div className='summary'>
                          <MenuComponent restaurant = {props.name}/> 
                        </div>
        </>
    )

}
PodiumBox.propTypes ={
    name: PropTypes.string.isRequired,
}

export default PodiumBox;