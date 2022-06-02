// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA03IGSUd0FkrAr3ezRjXGkx2EWjT6-BDI",
  authDomain: "mobile-app-firebase-auth.firebaseapp.com",
  projectId: "mobile-app-firebase-auth",
  storageBucket: "mobile-app-firebase-auth.appspot.com",
  messagingSenderId: "728048997705",
  appId: "1:728048997705:web:21898d43dda58506823698"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };