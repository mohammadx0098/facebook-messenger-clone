import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuv2K3wmgnScprqjEZnxAn9HE476deTGI",
  authDomain: "facebook-messenger-clone-45bc9.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-45bc9.firebaseio.com",
  projectId: "facebook-messenger-clone-45bc9",
  storageBucket: "facebook-messenger-clone-45bc9.appspot.com",
  messagingSenderId: "394129420247",
  appId: "1:394129420247:web:d2d5b05670a1a0349a2592",
  measurementId: "G-LDMJMVJKLR",
});

const db = firebaseApp.firestore();

export { db };
