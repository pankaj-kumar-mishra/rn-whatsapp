// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA895GMLurDB-TlIzTZFiA8geFnhnkGuy4",
    authDomain: "whatsapp-pankaj.firebaseapp.com",
    projectId: "whatsapp-pankaj",
    storageBucket: "whatsapp-pankaj.appspot.com",
    messagingSenderId: "398732865917",
    appId: "1:398732865917:web:ef6a363c4e83b494469c14",
    measurementId: "G-FNW5QVMDLL",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};

export const getFirebaseErrorMsg = errorCode => {
  // [FirebaseError: Firebase: Error (auth/email-already-in-use).]
  // console.error(error.code);// auth/email-already-in-use
  let message = "Something went wrong!";
  switch (errorCode) {
    case "auth/email-already-in-use":
      message = "This email is already in use!";
      break;
    case "auth/invalid-email":
      message = "This email is not valid!";
      break;

    default:
      message = errorCode;
      break;
  }
  return message;
};

export const fbCollections = {
  USERS: "users",
};
