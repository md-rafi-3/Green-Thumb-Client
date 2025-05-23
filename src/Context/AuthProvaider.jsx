import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

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





    const userInfo={
        createUser,
        loginUser,
        user,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    
    );
};

export default AuthProvaider;