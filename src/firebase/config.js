import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtX0eGBXMoTmdQ7MNuFSNfSmCFsng0C48",
    authDomain: "personal-photo-gallery-32b21.firebaseapp.com",
    projectId: "personal-photo-gallery-32b21",
    storageBucket: "personal-photo-gallery-32b21.appspot.com",
    messagingSenderId: "275548052276",
    appId: "1:275548052276:web:c2d61ef997b6631d8da361"
};

const app = initializeApp(firebaseConfig);
const storage = app.storage();
const firestore = app.firestore();
const auth = app.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, auth, timestamp };