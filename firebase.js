// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCggR-LP0Js-ug45iQ2-rizaW2mvYtz0wE",
  authDomain: "barbershop-13358.firebaseapp.com",
  projectId: "barbershop-13358",
  storageBucket: "barbershop-13358.firebasestorage.app",
  messagingSenderId: "118983243919",
  appId: "1:118983243919:web:13e8f10a872e09bd2e98fa",
  measurementId: "G-PTLLKTT35L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);