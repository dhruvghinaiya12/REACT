import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBsZoa2o-NMlS6Bhh0reDBbHPttCSyWTe0",
  authDomain: "react-pr-d0b9f.firebaseapp.com",
  projectId: "react-pr-d0b9f",
  storageBucket: "react-pr-d0b9f.firebasestorage.app",
  messagingSenderId: "541800928237",
  appId: "1:541800928237:web:2b1d913ce09ffbc54f0de4"
};

const app = initializeApp(firebaseConfig);
const analytics =getAnalytics(app);


export const db=getFirestore(app)