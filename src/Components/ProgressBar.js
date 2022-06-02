import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import PropTypes from "prop-types";
import "./ProgressBar.css"

const ProgressBar = ({ file, setFile, restName }) => {
    const { url, progress } = useStorage(file, restName);
    console.log(progress)
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])
    return (
        <div className="progress_bar" style={{
            width: progress + "%"
        }}></div>
    )
}

ProgressBar.propTypes = {
    file: PropTypes.object,
    setFile: PropTypes.func,
    restName: PropTypes.string
}
export default ProgressBar;