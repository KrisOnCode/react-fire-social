import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBVt1-MsqTBBI9xpUck68W6ujPIBx5xAMU",
  authDomain: "react-fire-social.firebaseapp.com",
  projectId: "react-fire-social",
  storageBucket: "react-fire-social.appspot.com",
  messagingSenderId: "836149247153",
  appId: "1:836149247153:web:41b0764878691f8f517690"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }
