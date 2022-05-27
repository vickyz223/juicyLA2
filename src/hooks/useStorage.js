import { useState, useEffect } from "react";
import {projectStorage, projectFirestore, timestamp} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) =>{
    const [progress, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //references
        const storageRef =ref(projectStorage,file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        const collectionRef = collection(projectFirestore,'images');

        uploadTask.on('state_changed', 
        (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setProgess(percentage);

        }, (err) =>{
            setError(err);
        }, async ()=>{
            const url = await getDownloadURL(uploadTask.snapshot.ref) //different from url above
            const createdAt = timestamp;
            addDoc(collectionRef,{url: url,createdAt: createdAt})
            setUrl(url);

        })
    }, [file])
    return { progress, url, error}

}

export default useStorage;