import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDtX0eGBXMoTmdQ7MNuFSNfSmCFsng0C48",
    authDomain: "personal-photo-gallery-32b21.firebaseapp.com",
    projectId: "personal-photo-gallery-32b21",
    storageBucket: "personal-photo-gallery-32b21.appspot.com",
    messagingSenderId: "275548052276",
    appId: "1:275548052276:web:c2d61ef997b6631d8da361"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = Firestore.serverTimestamp();

export { storage, db, auth, timestamp };