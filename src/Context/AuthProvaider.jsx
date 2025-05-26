import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.config';

const provider = new GoogleAuthProvider();
const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);
    
    
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unSubscribe()}
    },[])



    const updatedUser=(updatedData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,updatedData)
    }



    const userSignOut=()=>{
        setLoading(true);
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
        googleLogin,
        setLoading,
        loading,
        setUser,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    
    );
};

export default AuthProvaider;