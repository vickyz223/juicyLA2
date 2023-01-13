import { useState, useEffect } from "react";
import { projectFirestore } from "../Services/firebase";
import PropTypes from "prop-types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
const useFirestore = (collect) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const collectionRef = collection(projectFirestore, collect);
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let documents = [];
            querySnapshot.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })

            });
            setDocs(documents);

        });
        return () => unsub();
    }, [collect])

    return { docs };

}

useFirestore.propTypes = {
    collection: PropTypes.string
}
export default useFirestore;