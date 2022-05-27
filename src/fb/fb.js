import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCfp1eOkpcjgPyE-78u2eo-pV0SiBeOFpI",
    authDomain: "portafolio-arquitectura.firebaseapp.com",
    projectId: "portafolio-arquitectura",
    storageBucket: "portafolio-arquitectura.appspot.com",
    messagingSenderId: "884456570218",
    appId: "1:884456570218:web:d48596f3359f4eddb9f913"
});


export const auth = getAuth(app);
export default getFirestore(); 


