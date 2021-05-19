import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDUTuyzAz8MJqstqt4hILOpTulaicOZgSs",
    authDomain: "exam-portal-2ee5f.firebaseapp.com",
    projectId: "exam-portal-2ee5f",
    storageBucket: "exam-portal-2ee5f.appspot.com",
    messagingSenderId: "508725714867",
    appId: "1:508725714867:web:d0f1c55d79c7a5019d35c6",
    measurementId: "G-3KTDH76BQS"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
