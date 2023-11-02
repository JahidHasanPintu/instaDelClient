import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyCVey5tYUCrfLjTHnSFoMJWClb1cDHeKDQ",
  // authDomain: "uber-clone-19a8e.firebaseapp.com",
  // projectId: "uber-clone-19a8e",
  // storageBucket: "uber-clone-19a8e.appspot.com",
  // messagingSenderId: "680872775499",
  // appId: "1:680872775499:web:0d937431048781ae6ce2ce",
  apiKey: "AIzaSyBPYDcce2SkJBBSGiJeTCKrLdyJdHJalBc",
  authDomain: "instadelbd.firebaseapp.com",
  projectId: "instadelbd",
  storageBucket: "instadelbd.appspot.com",
  messagingSenderId: "194607703810",
  appId: "1:194607703810:web:de205e796df71bc7ad041b",
  measurementId: "G-7CFTL269L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
