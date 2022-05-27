import React from "react";
import useStorage from "../hooks/useStorage";
import PropTypes from "prop-types";

const ProgressBar = ({file}) =>{
    const {url, progress} = useStorage(file);
    console.log(progress,url);

    return(
        <div className = "progress_bar">progress</div>
    )
}

ProgressBar.propTypes ={
    file: PropTypes.object,
    setFile: PropTypes.func
}
export default ProgressBar;