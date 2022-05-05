import React from 'react';
import ReactDOM from 'react-dom/client';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav'>
            <div className = 'topBar'>
                <div className = 'title'> 
                JUICYLA
                </div>
                <div className='ButtonGroup'> 
                    <button className='register'>register</button>
                    <button>sign in </button>
                </div>
                

            </div>
        </div>
            
   
        
       
    )
}

export default NavBar;