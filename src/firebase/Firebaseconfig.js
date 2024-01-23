import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK2JhQo6kzmaJ44Xlv2517Fn8wqzs_Bcg",
    authDomain: "alta-77423.firebaseapp.com",
    projectId: "alta-77423",
    storageBucket: "alta-77423.appspot.com",
    messagingSenderId: "452176309332",
    appId: "1:452176309332:web:456b1d1f9b29e1615111c1",
    measurementId: "G-PVKQF5JR3G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
