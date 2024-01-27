import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ2GP9b1p8zO8HA_s2Fo_MbYxLV_DKVtc",
  authDomain: "teenteachinglearning.firebaseapp.com",
  projectId: "teenteachinglearning",
  storageBucket: "teenteachinglearning.appspot.com",
  messagingSenderId: "841141432860",
  appId: "1:841141432860:web:c2813a871a441421ab65d9",
  measurementId: "G-FMHL9N8DZB",
  databaseURL: "https://teenteachinglearning.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "teenteachinglearning",
//   storageBucket: "teenteachinglearning.appspot.com",
//   messagingSenderId: "841141432860",
//   appId: "1:841141432860:web:c2813a871a441421ab65d9",
//   measurementId: "G-FMHL9N8DZB",
//   databaseURL: "https://teenteachinglearning.firebaseio.com", // Add this line for the Realtime Database
// };