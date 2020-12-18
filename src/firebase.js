// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNEEUZI76dySNTqsx_jQcVNfOvhpKf1Og",
    authDomain: "todo-practice-c1c75.firebaseapp.com",
    projectId: "todo-practice-c1c75",
    storageBucket: "todo-practice-c1c75.appspot.com",
    messagingSenderId: "1063636232414",
    appId: "1:1063636232414:web:34f29301bb3284e8a4ba4f",
    measurementId: "G-0JET0TH9Q3"
})
const db = firebaseApp.firestore();

export default db;