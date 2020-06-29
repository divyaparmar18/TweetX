import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrxah4sVhyT_Y_KwHCHxgYhcFD4-aVaHU",
  authDomain: "fir-reactnativeauth.firebaseapp.com",
  databaseURL: "https://fir-reactnativeauth.firebaseio.com",
  projectId: "fir-reactnativeauth",
  storageBucket: "fir-reactnativeauth.appspot.com",
  messagingSenderId: "534032861225",
  appId: "1:534032861225:web:78d5fd73c786e621193438",
  measurementId: "G-9E1RFVHM3W",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
