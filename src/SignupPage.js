import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import { Form, Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/component_styles/LoginPage.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/Profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="background">
      <div className="loginDiv">
        <div className="p-2 box">
          <h2 className="mb-3 textShadow h2">Sign up</h2>
          {error && (
            <Alert variant="danger">{"Email or password is Invalid."}</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="box text-center textShadow">
          Already have an account?{" "}
          <Link className="noTxtDec textShadow" to="/Login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
