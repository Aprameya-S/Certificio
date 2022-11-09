import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyBOVQfHruI6zjYxh-X9GU4fIrzYnl0kX1c",
  authDomain: "certificio.firebaseapp.com",
  projectId: "certificio",
  storageBucket: "certificio.appspot.com",
  messagingSenderId: "417214739634",
  appId: "1:417214739634:web:ef376f859bf282e14385ab"
  
};

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);