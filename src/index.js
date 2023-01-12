import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import NavBar from "./Components/navbar_components/NavBar";
import Homepage from "./Components/homepage_components/Homepage";
import WriteReviews from "./Components/restaurant_page_comps/WriteReviews";
import Login from "./Components/navbar_components/LoginPage";
import Signup from "./Components/navbar_components/SignupPage";
import Profile from "./Components/navbar_components/ProfilePage";
import app from './firebase';
import RestaurantPage from './Components/restaurant_page_comps/RestaurantPage';
import { UserAuthContextProvider } from './UserAuthContext'
import PhotoGallery from './Components/gallery_components/PhotoGallery';


function JuicyLa() {

	console.log(app)
	return (
		<UserAuthContextProvider>
			<div>
				<Router>
					<NavBar />
					<Routes>
						{/* <Route path="/Register" element={<Register/>}/>
					<Route path="/Login" element={<Login/>}/> */}
						<Route path="/RestaurantPage" element={<RestaurantPage />} />
						<Route path="/PhotoGallery" element={<PhotoGallery />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/Signup" element={<Signup />} />
						<Route path="/Profile" element={<Profile />} />
						<Route path="/" element={<Homepage />} />
						<Route path="/" element={<WriteReviews />} />

					</Routes>
				</Router>
			</div>
		</UserAuthContextProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JuicyLa />);