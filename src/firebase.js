import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmy_ta0UXA9-8dxfCfh9OocQtj5Jiz4OM",
  authDomain: "proyecto-peliculas-76630.firebaseapp.com",
  projectId: "proyecto-peliculas-76630",
  storageBucket: "proyecto-peliculas-76630.appspot.com",
  messagingSenderId: "364739957342",
  appId: "1:364739957342:web:701cdc0bd72916edae9acf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
