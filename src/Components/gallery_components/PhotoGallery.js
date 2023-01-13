import React, { useState } from "react";
import "../component_styles/PhotoGallery.css";
import app from '../../Services/firebase';
import UploadImages from "../gallery_components/UploadImages.js";
import ImageGrid from "../gallery_components/ImageGrid";
import Modal from "../common_components/Modal";
import { useLocation } from "react-router-dom";
const PhotoGallery = () => {
    const location = useLocation();
    const [selectedImage, setSelectedImage] = useState(null);

    console.log(app);
    return (
        <div className='Gallery'>
            <div className="GalleryHeader">
                <div className="GalleryTitle">
                    {console.log(location.state.name)}
                    {location.state.name}
                </div>
                <UploadImages restName={location.state.name} />
            </div>
            <ImageGrid setSelectedImage={setSelectedImage} RestName={location.state.name} />
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} RestName={location.state.name} />}


        </div>
    )
}

export default PhotoGallery;
