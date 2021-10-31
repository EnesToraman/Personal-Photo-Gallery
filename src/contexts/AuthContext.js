import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    onAuthStateChanged
} from '@firebase/auth';


const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const changeEmail = (email) => {
        return updateEmail(currentUser, email);
    }

    const changePassword = (password) => {
        return updatePassword(currentUser, password);
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    }, [])

    const value = [
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
        changeEmail,
        changePassword
    ]

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}