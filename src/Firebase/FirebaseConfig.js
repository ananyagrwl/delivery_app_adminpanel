import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAKVovjnj3IrdYIyCvyDpqmlX28BmtEzL4",
  authDomain: "delivery-app-f883e.firebaseapp.com",
  projectId: "delivery-app-f883e",
  storageBucket: "delivery-app-f883e.appspot.com",
  messagingSenderId: "74335782775",
  appId: "1:74335782775:web:31708451b95690bc3cc372",
  measurementId: "G-BRJ19ZZ95P"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
// const analytics = getAnalytics(app);

export {db, storage};