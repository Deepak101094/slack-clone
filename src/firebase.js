import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-h6TBdSFMbLGbeEVjnKZq7TzdgSsgu-I",
    authDomain: "slack-clone-1bf09.firebaseapp.com",
    projectId: "slack-clone-1bf09",
    storageBucket: "slack-clone-1bf09.appspot.com",
    messagingSenderId: "387673965636",
    appId: "1:387673965636:web:5d203dad4e1e61da2be811"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider }