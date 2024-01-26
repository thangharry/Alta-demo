// import { initializeApp } from "firebase/app";

// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDK2JhQo6kzmaJ44Xlv2517Fn8wqzs_Bcg",
//     authDomain: "alta-77423.firebaseapp.com",
//     projectId: "alta-77423",
//     storageBucket: "alta-77423.appspot.com",
//     messagingSenderId: "452176309332",
//     appId: "1:452176309332:web:456b1d1f9b29e1615111c1",
//     measurementId: "G-PVKQF5JR3G",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export const storage = getStorage(app);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUuSncavwoNanvH56vQHjDWXjyF4aktoc",
    authDomain: "ddd1-2a8b9.firebaseapp.com",
    projectId: "ddd1-2a8b9",
    storageBucket: "ddd1-2a8b9.appspot.com",
    messagingSenderId: "992671287108",
    appId: "1:992671287108:web:a036e367fb38db02b0b911",
    measurementId: "G-Z5WS34PRWN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
