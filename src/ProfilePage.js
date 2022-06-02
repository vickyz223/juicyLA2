import React, { useEffect } from "react";
// import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";

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
    }, 3000);
  }, []);

  return (
    <>
      <div className="p-2 box mt-3 text-center">
        <div className="fs-3">Hello Welcome</div>
        {user && user.email}
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
