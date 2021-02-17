import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDcEi_xJSK6pe26qizpmjlnaEMkgBgPMMQ",
    authDomain: "book-santa-bece0.firebaseapp.com",
    projectId: "book-santa-bece0",
    storageBucket: "book-santa-bece0.appspot.com",
    messagingSenderId: "858576403755",
    appId: "1:858576403755:web:5399992128771aacd0d96e",
    measurementId: "G-6QE94TS3WJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
