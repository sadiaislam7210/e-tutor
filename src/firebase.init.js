// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ0OEXXI-ZeOBTxpaC2iq_Grd_fIPCaLc",
  authDomain: "e-tutor-8617c.firebaseapp.com",
  projectId: "e-tutor-8617c",
  storageBucket: "e-tutor-8617c.appspot.com",
  messagingSenderId: "621938718034",
  appId: "1:621938718034:web:dde4bffbf395d2622bf68b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;
