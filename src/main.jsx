import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm3t_1So8B4IrcvwXB4GncndyJT1Ra074",
  authDomain: "coderreact338.firebaseapp.com",
  projectId: "coderreact338",
  storageBucket: "coderreact338.appspot.com",
  messagingSenderId: "456468678221",
  appId: "1:456468678221:web:3798fcfd17d291994ffe04"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
