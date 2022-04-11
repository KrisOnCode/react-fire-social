import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAjjpIx0o4J5VG3pvXvjR1aEws3mxu-4YE",
  authDomain: "twister-8dc5f.firebaseapp.com",
  projectId: "twister-8dc5f",
  storageBucket: "twister-8dc5f.appspot.com",
  messagingSenderId: "1054050814842",
  appId: "1:1054050814842:web:ee577a80bd15fe66ba24c3"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, projectStorage, timestamp }
