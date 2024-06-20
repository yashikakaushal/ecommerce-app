import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1pgzSFoN1Nfd5iILZxmNHFkurVCcrgF0",
    authDomain: "task-30286.firebaseapp.com",
    databaseURL: "https://task-30286-default-rtdb.firebaseio.com",
    projectId: "task-30286",
    storageBucket: "task-30286.appspot.com",
    messagingSenderId: "544427191352",
    appId: "1:544427191352:web:6d9e15e1f0bac76a9f0acd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);