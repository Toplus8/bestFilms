// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsXkhFQ5gV3AuUg0VOqHBwxJlz7Xj1BkI",
  authDomain: "bestfilms-1fa8c.firebaseapp.com",
  projectId: "bestfilms-1fa8c",
  storageBucket: "bestfilms-1fa8c.appspot.com",
  messagingSenderId: "1083912627608",
  appId: "1:1083912627608:web:5bb6a6d1ba696bd1eb77ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);