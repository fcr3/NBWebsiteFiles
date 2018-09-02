import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCNBfJWHtgbTM_VICVX8oHODWAPICVKCwc",
    authDomain: "nuerotech-website-data.firebaseapp.com",
    databaseURL: "https://nuerotech-website-data.firebaseio.com",
    projectId: "nuerotech-website-data",
    storageBucket: "nuerotech-website-data.appspot.com",
    messagingSenderId: "646315567353"
  };

firebase.initializeApp(config);

const database = firebase.database()
export {database};
