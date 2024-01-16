/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isNewUser, setIsNewUser] = useState(false);
    const axiosPublic = useAxiosPublic();

    const googleProvider = new GoogleAuthProvider();
    // catch the user - sign in observer and keep the user state
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            console.log('user: ', currentUser);
            if(currentUser){
                //get token and store in client side.
                const user = {email: currentUser.email}; 
                const res = axiosPublic.post('/jwt',user)
                .then(res => {
                    // console.log(res.data.token);
                    if(res.data){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })

            }
            else{
                //remove token when user is logged out
                localStorage.removeItem('access-token')
            }
            setIsLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    //sign up the user
    const registerUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //log in the user
    const logInwithEmailPass = (email, password)=> {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update user profile information
    const updateUserProfile = (name,photo_Url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo_Url,
        })
    }
    
    //login with google pop up
    const googleLoginInPopUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //logOut the user
    const logOut =() => {
        setIsLoading(true);
        signOut(auth);
    }

    const authInfo = {
        user,
        isLoading,
        registerUser,
        logInwithEmailPass,
        updateUserProfile,
        logOut,
        googleLoginInPopUp,
        isNewUser,
        setIsNewUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;