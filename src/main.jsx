import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxZPuGN8LgSeyHoa1Srty7KsxagB5xqVY",
  authDomain: "coderhouse-react-c0a12.firebaseapp.com",
  projectId: "coderhouse-react-c0a12",
  storageBucket: "coderhouse-react-c0a12.appspot.com",
  messagingSenderId: "804888163342",
  appId: "1:804888163342:web:7c6aae7f8a4f3c3919785f"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
