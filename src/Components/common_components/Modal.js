import React from "react";
import PropTypes from "prop-types";
import "../component_styles/Modal.css";

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop'))
            setSelectedImage(null);
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="enlarged pic" />
        </div>
    );
}

Modal.propTypes = {
    selectedImage: PropTypes.string,
    setSelectedImage: PropTypes.func
}

export default Modal;