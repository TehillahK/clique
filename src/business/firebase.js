import  {initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAmYFUAgSFEdPflPOkHRDdTUnCQR-GKuTg",
  authDomain: "clique-a5c19.firebaseapp.com",
  projectId: "clique-a5c19",
  storageBucket: "clique-a5c19.appspot.com",
  messagingSenderId: "593417876521",
  appId: "1:593417876521:web:8d6ecc1b7d5c83c6dd9838",
  measurementId: "G-LQNCT5B1PF"
  };
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth