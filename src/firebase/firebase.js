// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "image-gallery-9669a.firebaseapp.com",
  projectId: "image-gallery-9669a",
  storageBucket: "image-gallery-9669a.appspot.com",
  messagingSenderId: import.meta.env.VITE_API_KEY_MESSAGING,
  appId: import.meta.env.VITE_API_KEY_APP_ID,
  measurementId: import.meta.env.VITE_API_KEY_MEASURE,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
