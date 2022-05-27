import { useState, useEffect } from "react";
import {projectStorage} from '../firebase';
import { ref, uploadBytesResumable } from "firebase/storage";

const useStorage = (file) =>{
    const [progress, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //references
        const storageRef =ref(projectStorage,file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
        (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setProgess(percentage);

        }, (err) =>{
            setError(err);
        }, async ()=>{
            const url = await uploadTask.getDownloadURL() //different from url above
            setUrl(url);
        })
    }, [file])
    return { progress, url, error}

}

export default useStorage;