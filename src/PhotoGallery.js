// import { Update } from "@material-ui/icons";
import React from "react";
import "./PhotoGallery.css";
import app from './firebase';
import UploadImages from "./Components/UploadImages";
import ImageGrid from "./Components/ImageGrid";
const PhotoGallery = () =>{
    console.log(app);
    return(
        <div className = 'Gallery'>
            <div className = "GalleryHeader">
                <div className = "GalleryTitle">
                    Dining Hall
                </div>
                <UploadImages/>             
                <ImageGrid/>

            </div>
            
        </div>
    )
}
export default PhotoGallery;
