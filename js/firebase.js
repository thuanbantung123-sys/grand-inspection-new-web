// ======================================================
// Happy Night Cleaning - Firebase Core
// GitHub Pages + Firebase Authentication + Cloud Firestore
// ======================================================

import { initializeApp }
  from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  initializeAuth,
  browserSessionPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp,
  writeBatch
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


// ======================================================
// Firebase Configuration
// ======================================================

const firebaseConfig = {
  apiKey: "AIzaSyAM1WoO_B472X2a5a9Q3sDcC2BrU1gCJ00",
  authDomain: "grand-inspection-new.firebaseapp.com",
  projectId: "grand-inspection-new",
  storageBucket: "grand-inspection-new.firebasestorage.app",
  messagingSenderId: "271407474884",
  appId: "1:271407474884:web:0257fa11210c83545d4191",
  measurementId: "G-RD6VW672RT"
};


// ======================================================
// Initialize Firebase App
// ======================================================

const firebaseApp = initializeApp(
  firebaseConfig
);


// ======================================================
// Firebase Authentication
//
// สำคัญ:
// ใช้ browserSessionPersistence โดยตรง
// เพื่อไม่ใช้ IndexedDB persistence ที่กำลังมีปัญหา
// "Database is closing/hidden"
// ======================================================

const auth = initializeAuth(
  firebaseApp,
  {
    persistence: browserSessionPersistence
  }
);


// ======================================================
// Cloud Firestore
// ======================================================

const db = getFirestore(
  firebaseApp
);


// ======================================================
// เปิด API ให้ JavaScript ระบบเดิมใช้งาน
// ======================================================

window.HappyNightFirebase = {

  app: firebaseApp,
  auth: auth,
  db: db,

  // Authentication
  onAuthStateChanged:
    onAuthStateChanged,

  signInWithEmailAndPassword:
    signInWithEmailAndPassword,

  signOut:
    signOut,

  // Firestore
  doc:
    doc,

  getDoc:
    getDoc,

  setDoc:
    setDoc,

  collection:
    collection,

  getDocs:
    getDocs,

  onSnapshot:
    onSnapshot,

  serverTimestamp:
    serverTimestamp,

  writeBatch:
    writeBatch

};


// ======================================================
// Console Status
// ======================================================

console.log(
  "✅ Firebase connected:",
  firebaseConfig.projectId
);

console.log(
  "✅ Firebase Authentication ready"
);

console.log(
  "✅ Firebase Auth persistence: SESSION"
);

console.log(
  "✅ Cloud Firestore ready"
);

console.log(
  "✅ Happy Night Firebase core ready"
);


// ======================================================
// แจ้ง auth.js ว่า Firebase พร้อมใช้งาน
// ======================================================

window.dispatchEvent(
  new CustomEvent(
    "firebase-ready"
  )
);
