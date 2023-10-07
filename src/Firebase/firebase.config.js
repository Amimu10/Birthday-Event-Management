import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAfFpyggdcZfXAPJCfEJFkVgXo9fb7KVLA",
  authDomain: "birthday-events-website.firebaseapp.com",
  projectId: "birthday-events-website",
  storageBucket: "birthday-events-website.appspot.com",
  messagingSenderId: "653996117436",
  appId: "1:653996117436:web:cede20fad6194c9dfaafb9"
};

const app = initializeApp(firebaseConfig);
export default app; 