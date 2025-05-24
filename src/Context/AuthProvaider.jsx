import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{unSubscribe()}
    },[])



    const updatedUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }



    const userSignOut=()=>{
      return signOut(auth);
    }


    const googleLogin=()=>{
        return signInWithPopup(auth,provider);
    }




    const userInfo={
        createUser,
        loginUser,
        user,
        userSignOut,
        updatedUser,
        googleLogin
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    
    );
};

export default AuthProvaider;