import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Homepage.css";
import "./ProfilePage.css";

const Profile = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  /* Show Hello Welcome 3 seconds (3000 mseconds) and redirect to root */
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <>
      <div id="holdsAll" className="p-2 box mt-3 text-center">
        <div id="welcomeText" className="fs-3">
          <p id="wt">
            WELCOME TO <br></br>
            JUICYLA,
          </p>
          <div id="username">{user && user.email}</div>
        </div>
      </div>
      {/* <div className="text-center">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default Profile;
