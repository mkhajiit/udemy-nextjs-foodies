// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'newlevel-food-jh.firebasestorage.app',
  messagingSenderId: '937757401990',
  appId: '1:937757401990:web:c0a2a8bdacac660b084207',
  measurementId: 'G-H857LKE5K5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // storage를 사용하기 위해서는 getStorage사용

export { storage };
