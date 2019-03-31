import firebase from 'firebase/app'

var config = {
  apiKey: "AIzaSyC9_-oTmnnfmvYlMLagG6yjyS7wbHDHGZU",
  authDomain: "mythic-fit.firebaseapp.com",
  databaseURL: "https://mythic-fit.firebaseio.com",
  projectId: "mythic-fit",
  storageBucket: "mythic-fit.appspot.com",
  messagingSenderId: "1095815144519"
};

export const fb = firebase.initializeApp(config);
