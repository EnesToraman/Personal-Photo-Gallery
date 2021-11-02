import { useState, useEffect } from 'react';
import { storage, db, timestamp, auth } from '../firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { collection, addDoc } from '@firebase/firestore';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const collectionRef = collection(db, 'images');

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',(snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err)
    }, async () => {
      const url = await getDownloadURL(storageRef);
      const user = auth.currentUser;
      await addDoc(collectionRef, { url, timestamp, email: user.email });
      setUrl(url);
    } )
  }, [file])

  return { progress, url, error };
}
