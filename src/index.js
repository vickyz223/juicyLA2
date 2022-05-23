import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from './NavBar';
import Homepage from './Homepage';
import WriteReviews from './Components/WriteReviews';
// import Register from './Register';
import Login from './LoginPage';
import Signup from './SignupPage'
import RestaurantPage from './RestaurantPage';
import { UserAuthContextProvider } from './UserAuthContext'

function JuicyLa() {
    return (
		<UserAuthContextProvider>
			<div>
				<Router>
					<NavBar />
					<Routes>
						{/* <Route path="/Register" element={<Register/>}/>
					<Route path="/Login" element={<Login/>}/> */}
						<Route path="/RestaurantPage" element={<RestaurantPage />} />
						<Route path="/" element={<Homepage />} />
						<Route path="/" element={<WriteReviews />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Signup" element={<Signup />} />
					</Routes>
				</Router>
			</div>
		</UserAuthContextProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);