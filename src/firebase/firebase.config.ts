// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgy-hBj72ie_9o-2vmVRdHI-juJaqBJIs",
  authDomain: "bike-rental-client.firebaseapp.com",
  projectId: "bike-rental-client",
  storageBucket: "bike-rental-client.appspot.com",
  messagingSenderId: "266176837044",
  appId: "1:266176837044:web:44603b72f9f7a0b1816ee1",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
