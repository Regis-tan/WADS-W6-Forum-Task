import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyANfFrfMOlV4UzTDoy9Gjvao_NWtS_k4Pk",
    authDomain: "wads-test.firebaseapp.com",
    projectId: "wads-test",
    storageBucket: "wads-test.firebasestorage.app",
    messagingSenderId: "273950188057",
    appId: "1:273950188057:web:ce9614e218e28f1d5d4088",
    measurementId: "G-21QKVCBL1E"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}