import React, { useState } from "react";
import "./Components/component_styles/PhotoGallery.css";
import app from './firebase';
import UploadImages from "./Components/gallery_components/UploadImages";
import ImageGrid from "./Components/gallery_components/ImageGrid";
import Modal from "./Components/common_components/Modal";
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
