import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebasr.config";

const InitializeFirebase =() => {
    initializeApp(firebaseConfig);
}
export default InitializeFirebase;