// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwcDXeNhk-zKn5oM5ifXVf2zIhC9bwDN8",
    authDomain: "netflix-cloning-8873e.firebaseapp.com",
    projectId: "netflix-cloning-8873e",
    storageBucket: "netflix-cloning-8873e.appspot.com",
    messagingSenderId: "669650212990",
    appId: "1:669650212990:web:1a4999918efc30e3bfe02f"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }