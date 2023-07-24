import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const setUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  
  const UpdatedUserEmail = async (email, password) => {
    try {
      setLoading(true);
  
      // Get the currently authenticated user
      const user = auth.currentUser;
  
      // Create a credential object with the user's current email and password
      const credential = EmailAuthProvider.credential(user.email, password);
  
      // Reauthenticate the user with the credential
      await user.reauthenticateWithCredential(credential);
  
      // Once the user is successfully reauthenticated, update their email
      await updateEmail(user, email);
  
      setLoading(false);
      console.log("Email updated successfully!");
      // You can perform any additional actions after a successful update here.
    } catch (error) {
      console.error("Error updating email:", error.message);
      setLoading(false);
      // Handle the error here (e.g., showing an error message to the user).
    }
  };
  const singInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  const singinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singInUser,
    logOut,
    setUserProfile,
    UpdatedUserEmail,
    loading,
    singinWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
