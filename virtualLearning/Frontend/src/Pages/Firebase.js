import firebase from 'firebase/compat/app'; // Change the import statement

import 'firebase/compat/auth'; // Change to firebase/compat/auth for compatibility with Firebase version 9 or above
import 'firebase/compat/firestore'; // Change to firebase/compat/firestore
import 'firebase/compat/storage'; // Change to firebase/compat/storage
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDQ2GP9b1p8zO8HA_s2Fo_MbYxLV_DKVtc",
  authDomain: "teenteachinglearning.firebaseapp.com",
  databaseURL: "https://teenteachinglearning-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teenteachinglearning",
  storageBucket: "teenteachinglearning.appspot.com",
  messagingSenderId: "841141432860",
  appId: "1:841141432860:web:c2813a871a441421ab65d9",
  measurementId: "G-FMHL9N8DZB"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database(); // Add this line



export { firebase, storage, database }; // Export the firebase object along with storage and database
