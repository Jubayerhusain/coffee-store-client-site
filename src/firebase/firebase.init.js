import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkYss_xGKtF65iutxwyKqLBhjnKohuWcs",
  authDomain: "coffee-store-7e9e6.firebaseapp.com",
  projectId: "coffee-store-7e9e6",
  storageBucket: "coffee-store-7e9e6.firebasestorage.app",
  messagingSenderId: "624052545280",
  appId: "1:624052545280:web:ce555d6868bf2b5ab275e5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)