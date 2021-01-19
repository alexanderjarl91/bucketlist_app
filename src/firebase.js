import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB8qIO8vis_Ut9a4QvauNp9vKhCekFRAb8",
  authDomain: "bucketl.firebaseapp.com",
  projectId: "bucketl",
  storageBucket: "bucketl.appspot.com",
  messagingSenderId: "245497404802",
  appId: "1:245497404802:web:73ebddf35e08501251439b",
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default fire;
