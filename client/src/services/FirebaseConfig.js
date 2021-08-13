import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBTWyRNXy59V6PdMl2wjP8HoNi5ZEy30Vo",
  authDomain: "ramatbelloproject.firebaseapp.com",
  projectId: "ramatbelloproject",
  storageBucket: "ramatbelloproject.appspot.com",
  messagingSenderId: "605803988469",
  appId: "1:605803988469:web:a4a4bf2cf24e815a928cbc",
  measurementId: "G-2BSEDBR6KF"


};
// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
  timestampsInSnapshots: true
})

export default Firebase