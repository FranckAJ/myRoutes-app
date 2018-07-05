import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCXlv4rbCnR_I-1lfGdMl8jCoH4cuaYeFU",
  authDomain: "myroutes-ae616.firebaseapp.com",
  databaseURL: "https://myroutes-ae616.firebaseio.com",
  projectId: "myroutes-ae616",
  storageBucket: "myroutes-ae616.appspot.com",
  messagingSenderId: "326089522807"
};

firebase.initializeApp(config);

export default firebase
