import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrv9t8_PMDDVDMA4DirUEORJwyY_teWFI",
  authDomain: "zomatoclone-956fc.firebaseapp.com",
  projectId: "zomatoclone-956fc",
  storageBucket: "zomatoclone-956fc.appspot.com",
  messagingSenderId: "974691690733",
  appId: "1:974691690733:web:b32db1f16fa95310dc84e4",
  measurementId: "G-MBE5SSR131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
