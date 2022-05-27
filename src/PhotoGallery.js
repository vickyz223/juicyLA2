// import { Update } from "@material-ui/icons";
import React, { useState } from "react";
import "./PhotoGallery.css";
import app from './firebase';
import UploadImages from "./Components/UploadImages";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
const PhotoGallery = () =>{
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(app);
    return(
        <div className = 'Gallery'>
            <div className = "GalleryHeader">
                <div className = "GalleryTitle">
                    Dining Hall
                </div>
                <UploadImages/>             
            </div>
            <ImageGrid setSelectedImage={setSelectedImage}/>
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}

            
        </div>
    )
}
export default PhotoGallery;
