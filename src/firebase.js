import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw4L9qdJe-iebiqi7LCab63IBiv34SgCI",

    authDomain: "top-t-6d92f.firebaseapp.com",

    projectId: "top-t-6d92f",

    storageBucket: "top-t-6d92f.appspot.com",

    messagingSenderId: "250872549223",

    appId: "1:250872549223:web:9191bf8a9f1a5aff04e9c2",

    measurementId: "G-48HZBJYJY9Í"
};


const app = firebase.initializeApp(firebaseConfig);

// Get Firebase Auth and Firestore instances
const auth = firebase.auth(app);
const firestore = firebase.firestore(app);

export { app, auth, firestore };
