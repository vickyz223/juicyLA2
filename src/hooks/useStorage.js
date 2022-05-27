import { useState, useEffect } from "react";
import {projectStorage} from '../firebase';

const useStorage = (file) =>{
    const [progress, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name);
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgess(percentage);

        }, (err) =>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL() //different from url above
            setUrl(url);
        }
        )
    }, [file])
    return { progress, url, error}

}