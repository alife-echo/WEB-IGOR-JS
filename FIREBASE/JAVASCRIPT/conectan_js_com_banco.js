// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6CyLqDiSJq43H00SzUk5YRjAbyATq_Ks',
  authDomain: 'colegio-c0e70.firebaseapp.com',
  projectId: 'colegio-c0e70',
  storageBucket: 'colegio-c0e70.appspot.com',
  messagingSenderId: '1000412726026',
  appId: '1:1000412726026:web:0c815337f514c2fc1570f3',
  measurementId: 'G-3GLHQDQJ3P'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
let db = firebase.fireStore()
db.collection('')
