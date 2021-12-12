import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyD_Vv7kIY45cKiNyc2-6uJDQft6qgK4NSs",
  authDomain: "project71-8e1d7.firebaseapp.com",
  projectId: "project71-8e1d7",
  storageBucket: "project71-8e1d7.appspot.com",
  messagingSenderId: "270594432372",
  appId: "1:270594432372:web:008b49aecadb9f9248e021"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


