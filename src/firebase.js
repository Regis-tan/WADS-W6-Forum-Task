import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "(PLACEHOLDER)",
    authDomain: "(PLACEHOLDER)",
    projectId: "(PLACEHOLDER)",
    storageBucket: "(PLACEHOLDER)",
    messagingSenderId: "(PLACEHOLDER)",
    appId: "(PLACEHOLDER)",
    measurementId: "(PLACEHOLDER)"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}