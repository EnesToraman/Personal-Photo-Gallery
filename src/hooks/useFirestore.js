import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { onSnapshot, collection } from '@firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export const useFirestore = (projectCollection) => {
    const [docs, setDocs] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const collectionRef = collection(db, projectCollection);

        const unsub = onSnapshot(collectionRef, (snapshot) => {
            let documents = [];
            snapshot.forEach(doc => {
                const userEmail = doc._document.data.value.mapValue.fields.email.stringValue;
                if (currentUser.email === userEmail) {
                    documents.push({ ...doc.data(), id: doc.id })
                }
            });
            setDocs(documents);
        });

        return () => unsub();

    }, [projectCollection, currentUser])

    return { docs };
}