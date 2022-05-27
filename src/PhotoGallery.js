// import { Update } from "@material-ui/icons";
import React, { useState } from "react";
import "./PhotoGallery.css";
import app from './firebase';
import UploadImages from "./Components/UploadImages";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
import {useLocation} from "react-router-dom";
const PhotoGallery = () =>{
    const location = useLocation();
    const [selectedImage, setSelectedImage] = useState(null);
    // const [name1, setName] = useState(null);
    // useEffect(()=> {setName(name);},[]);
    console.log(app);
    return(
        <div className = 'Gallery'>
            <div className = "GalleryHeader">
                <div className = "GalleryTitle">
                {console.log(location.state.name)}
                    {location.state.name}
                </div>
                <UploadImages restName={location.state.name} />             
            </div>
            <ImageGrid setSelectedImage={setSelectedImage} RestName={location.state.name}  />
            {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} RestName={location.state.name} />}

            
        </div>
    )
}

export default PhotoGallery;
