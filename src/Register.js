import React from "react";
<<<<<<< HEAD

const Register = () =>{
    return(
        <div>regsiter here</div>
    )
}

export default Register;
=======
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button";

import "./Register.css";

export default function Register() {
  return (
    <div id="holdsAll">
      <div id="leftSideAll"></div>
      <div id="rightSideAll">
        <div id="rightSideFields">
          <h1>JUICYLA</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            defaultValue="Email"
          />
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            defaultValue="Password"
          />
          <Button
            id="photoAdd"
            variant="contained"
            sx={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
              fontWeight: "bold",
              fontSize: 15,
              width: 150,
              color: "#F2F2F0",
              backgroundColor: "transparent",
              border: 1,
              borderColor: "white",

              "&:hover": {
                backgroundColor: "#868686",
              },
            }}
          >
            bruh
          </Button>
          <Button
            id="photoAdd"
            variant="contained"
            sx={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs",
              fontWeight: "bold",
              fontSize: 15,
              width: 150,
              color: "#F2F2F0",
              backgroundColor: "transparent",
              border: 1,
              borderColor: "white",

              "&:hover": {
                backgroundColor: "#868686",
              },
            }}
          >
            bruh
          </Button>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Register />);
>>>>>>> a4b1c19ecaf9161eba209608a00ad7382a6d905b
