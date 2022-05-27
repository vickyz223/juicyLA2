import React from "react";
import "./ImageGrid.css"
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () =>{
    const {docs} = useFirestore('images');
    return(
        <div className="img_grid">
            {docs && docs.map(doc => (
                <div className = "image_wrap" key ={doc.id} >
                    <img src = {doc.url} alt = "uploaded pic"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;