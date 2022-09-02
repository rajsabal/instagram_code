
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
import 'firebase/compat/firestore';


  const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyCUAPwTz26EUWd2Akx1AWWPl-u1bdC1Wy4",
    authDomain: "instagram-4f464.firebaseapp.com",
    projectId: "instagram-4f464",
    storageBucket: "instagram-4f464.appspot.com",
    messagingSenderId: "1020933942295",
    appId: "1:1020933942295:web:ac42855f6655cbf2198052",
    measurementId: "G-Q16Q9Q8LLC"
  });
const db=firebaseApp.firestore();
const auth =firebase.auth();
const storage = getStorage(firebaseApp);

export{db,auth,storage}; 