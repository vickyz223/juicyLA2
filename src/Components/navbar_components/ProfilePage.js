import React, { useEffect } from "react";
import { useUserAuth } from "../../Services/UserAuthContext";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component_styles/ProfilePage.css";

const Profile = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
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
    </>
  );
};

export default Profile;
