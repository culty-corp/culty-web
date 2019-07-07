import firebase from 'firebase/app';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDA2PNq5l-wst0MWWQrT8Oa-kmKvj3QkTc",
    authDomain: "culty-28d07.firebaseapp.com",
    databaseURL: "https://culty-28d07.firebaseio.com",
    projectId: "culty-28d07",
    storageBucket: "culty-28d07.appspot.com",
    messagingSenderId: "456028325007",
    appId: "1:456028325007:web:2bf9035ebc5cb68b"
  };
firebase.initializeApp(config);
const storage = firebase.storage()

export {
    storage, firebase as default
}