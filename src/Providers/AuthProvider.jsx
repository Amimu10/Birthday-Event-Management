import React, { createContext, useEffect, useState } from 'react';
import  PropTypes  from 'prop-types';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
      
    }

const signInUser = (emai, password) => {
    return signInWithEmailAndPassword(auth, emai, password)
    
  
}

const logOut = () =>{
   return  signOut(auth); 
}
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
    })
   return () => {
    unsubscribe();
} 

}, [])

const authInfo = {
    user,
    createUser,
    signInUser,
    logOut
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}