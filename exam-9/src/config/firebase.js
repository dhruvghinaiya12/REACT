import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
const auth=getAuth(app)

export const googleauth=async()=>{
  const provider=new GoogleAuthProvider()
  try {
    return await signInWithPopup(auth,provider)
  } catch (error) {
    console.log(error)
  }
}

export const signup=async(email,password)=>{
try {
  return await createUserWithEmailAndPassword(auth,email,password) 
} catch (error) {
  console.log(error)
}
}
export const login=async(email,password)=>{
  try {
    return await signInWithEmailAndPassword(auth,email,password)
  } catch (error) {
    console.log(error)
  }
}