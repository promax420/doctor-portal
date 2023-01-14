import { useEffect, useState } from "react";
import InitializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

InitializeFirebase();

const Userfirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setisloding] = useState(true);
  const [authError, seAuthtError] = useState("");
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    setisloding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        seAuthtError("");
        history.replace("/");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to the database
        saveUser(email, name);
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .catch((error) => {})
          .then(() => {});

        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        seAuthtError(error.message);
        // ..
      })
      .finally(() => setisloding(false));
  };
  const loginUser = (email, password, location, history) => {
    setisloding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const distination = location?.state?.from || "/";
        history.replace(distination);
        seAuthtError("");
        // ...
      })
      .catch((error) => {
        seAuthtError(error.message);
      })
      .finally(() => setisloding(false));
  };

  const signInWithGoogle = (location, history) => {
    setisloding(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        seAuthtError("");
      })
      .catch((error) => {
        // Handle Errors here.
        seAuthtError(error.message);
      })
      .finally(() => setisloding(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setisloding(false);
    });
    return () => unsubscribe;
  }, []);

  const logout = () => {
    setisloding(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .catch(() => setisloding(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isloading,
    authError,
    registerUser,
    signInWithGoogle,
    loginUser,
    logout,
  };
};
export default Userfirebase;
