import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase/config'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = () => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const value = [
        signUp,
        logIn,
        logOut,
        resetPassword,
        updateEmail,
        updatePassword
    ]

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logOut = () => {
        return auth.signOut;
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email);
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsub
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}