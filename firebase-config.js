// Firebase Configuration for GTO Course Platform
const firebaseConfig = {
    apiKey: "AIzaSyDsq6wrUxjh86Ov61D2OBdiRvvs73lRyP4",
    authDomain: "automation-course-dc070.firebaseapp.com",
    projectId: "automation-course-dc070",
    storageBucket: "automation-course-dc070.firebasestorage.app",
    messagingSenderId: "76631168953",
    appId: "1:76631168953:web:a95c1a74b65e3768d5c868",
    measurementId: "G-GJ20KZY6KF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other modules
window.firebaseAuth = auth;
window.firebaseDb = db;