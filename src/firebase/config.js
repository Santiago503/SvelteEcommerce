import firebase  from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAENyY1YrTtal91lJdCzsMIYtgdBiYdrk4",
  authDomain: "svelte-ecommerce-8c38b.firebaseapp.com",
  projectId: "svelte-ecommerce-8c38b",
  storageBucket: "svelte-ecommerce-8c38b.appspot.com",
  messagingSenderId: "214517708740",
  appId: "1:214517708740:web:9481cdb06cb8a98400d691"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export { app, firebase, googleAuthProvider };