import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAUdG9WqOq9Kz9Get3CiMTCRM2C9oVtksw",
  authDomain: "blog-m-c7dc3.firebaseapp.com",
  projectId: "blog-m-c7dc3",
  storageBucket: "blog-m-c7dc3.appspot.com",
  messagingSenderId: "208498122750",
  appId: "1:208498122750:web:c15202783aa123e85daaaf",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
