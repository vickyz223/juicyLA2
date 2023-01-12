import React from "react";
import "./component_styles/ImageGrid.css";

import useFirestore from "../hooks/useFirestore";
import PropTypes from "prop-types";
const ImageGrid = ({ setSelectedImage, RestName }) => {
    const collName = 'images' + RestName;
    console.log(collName)
    const { docs } = useFirestore(collName);
    return (
        <div className="img_grid">
            {docs && docs.map(doc => (
                <div className="image_wrap" key={doc.id}
                    onClick={
                        () => {
                            setSelectedImage(doc.url)
                            { console.log(doc.url) }
                        }
                    }
                >
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}

ImageGrid.propTypes = {
    setSelectedImage: PropTypes.func,
    RestName: PropTypes.string
}
export default ImageGrid;