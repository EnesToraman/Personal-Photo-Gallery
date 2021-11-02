import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, onSnapshot, collection, setDoc } from '@firebase/firestore';

export const useFirestore = (projectCollection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, projectCollection);

        const unsub = onSnapshot(collectionRef, (snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [collection])

    return { docs };
}