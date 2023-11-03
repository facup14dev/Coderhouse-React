import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxZPuGN8LgSeyHoa1Srty7KsxagB5xqVY",
  authDomain: "coderhouse-react-c0a12.firebaseapp.com",
  projectId: "coderhouse-react-c0a12",
  storageBucket: "coderhouse-react-c0a12.appspot.com",
  messagingSenderId: "804888163342",
  appId: "1:804888163342:web:7c6aae7f8a4f3c3919785f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
