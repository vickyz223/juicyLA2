import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { auth } from "./firebase";
import { useUserAuth } from "./UserAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  let navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const { logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "nav active headerBar" : "nav headerBar"}>
      <div className="topBar buttonGroup">
        <div className="title buttonLeft leftSpace5">
          <Link
            className="text-white"
            to="/"
            style={{ textDecoration: "none" }}
          >
            JUICYLA
          </Link>
        </div>
        <div className="buttonRight">
          {/* { console.log(auth.currentUser) } */}
          {/* { auth.currentUser ? console.log("logged in") : console.log("logged out")} */}
          {auth.currentUser ? (
            <div>
              <span className="mr-4 textShadow">{auth.currentUser.email} </span>
              <Button className="ml-4" onClick={handleLogout}>
                {" "}
                Sign out{" "}
              </Button>
            </div>
          ) : (
            <div className="rightSpace5">
              <Button
                className="rightSpace10 signBtn"
                variant="danger"
                onClick={() => {
                  navigate("/Signup");
                }}
              >
                {" "}
                Register{" "}
              </Button>
              <Button
                className="signBtn"
                variant="light"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
