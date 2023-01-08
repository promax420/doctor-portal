import { useEffect, useState } from "react";
import InitializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

InitializeFirebase();

const Userfirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setisloding] = useState(true);
  const [authError, seAuthtError] = useState("");
  const auth = getAuth();
  const registerUser = (email, password) => {
    setisloding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
      seAuthtError('')
      })
      .catch((error) => {
        const errorCode = error.code;
        seAuthtError(error.message);
        // ..
      })
      .finally(() => setisloding(false));
  };
  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const distination = location?.state?.form || '/';
        history.replace(distination);
        seAuthtError("");
        // ...
      })
      .catch((error) => {
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
  return {
    user,
    isloading,
    authError,
    registerUser,
    loginUser,
    logout,
  };
};
export default Userfirebase;
