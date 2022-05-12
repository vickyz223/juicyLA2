import React from 'react';
import ReactDOM from 'react-dom/client';
import './Homepage.css';

const Homepage  = () =>{
    return(
        <>
        <div className='topDivider'>
            <div className='brand'>
                JUICYLA
            </div>
            <div className='status'>
                Current Rankings
            </div>
            <div className='podium'>
                
                <div className='second' id ="podiumBoxes">
                    <h1>Name</h1>
                    <div className='stars'>

                    </div>
                    <div className='activity'>
                        <h2> Activity</h2>
                    </div>
                    <div className= 'summary'>

                    </div>
                </div>
                <div className='first' id = 'podiumBoxes'>
                    <h1>Name</h1>
                    <div className='stars'>

                    </div>
                    <div className='activity'>
                        <h2> Activity</h2>
                    </div>
                    <div className= 'summary'>

                    </div>
                </div>
                <div className='third' id ="podiumBoxes">
                    <h1>Name</h1>
                    <div className='stars'>

                    </div>
                    <div className='activity'>
                        <h2> Activity</h2>
                    </div>
                    <div className= 'summary'>

                    </div>
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
        </>
    )
}

export default Homepage;