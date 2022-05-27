import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import ProgressBar from "./ProgressBar"; 
import { PropTypes } from "prop-types";

const types = ['image/png', 'image/jpeg'];
const UploadImages = ({restName}) =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const fileInputRef=useRef();

    const changeHandler = (e) =>{
        
        const selected = e.target.files[0];
        if (selected && types.includes(selected.type)){ //checks that an images is selected and is a valid type
            setFile(selected);
            console.log(selected);

        }
        else{
            setFile(null);
            setError('Please upload a png or jpeg');

        }
    }
    return(
        <form>
                    <input type="file" onChange={changeHandler} ref={fileInputRef} style={{display: "none"}} />

        <label>
            <Button id="photoAdd" variant="contained"
          sx={{
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serifs',
            fontWeight: 'bold',
            fontSize: 15,
            width: 150,
            color: '#F2F2F0',
            backgroundColor: "transparent",
            border: 1,
            borderColor: "white",

            '&:hover': {
              backgroundColor: '#F8C27C',
            }
          }}
          onClick={
              () => { 
                fileInputRef.current.click()
              }
          }
        >

          ADD PHOTOS
        </Button>
            
        </label>

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile = {setFile} restName={restName}/>}
            </div>
        </form>
    )
}

UploadImages.propTypes={
  restName: PropTypes.string
}


export default UploadImages;