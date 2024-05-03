import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKeZ4g6AEKQYcZHX_gyXY89_OX1dkiFaU",
  authDomain: "associazionedlf-7953e.firebaseapp.com",
  projectId: "associazionedlf-7953e",
  storageBucket: "associazionedlf-7953e.appspot.com",
  messagingSenderId: "733644846504",
  appId: "1:733644846504:web:d630dc13b579b6b10ed99d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;