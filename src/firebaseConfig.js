// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACxPIuAevcoRf7R067pPua2nKxlcyouIM',
  authDomain: 'fir-test-1392f.firebaseapp.com',
  projectId: 'fir-test-1392f',
  storageBucket: 'fir-test-1392f.appspot.com',
  messagingSenderId: '487829068402',
  appId: '1:487829068402:web:5eea3ff53e7984bd52c0eb',
  measurementId: 'G-22YK339VT9',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { app, analytics, db };
