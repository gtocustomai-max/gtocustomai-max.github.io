// Firebase Configuration for GTO Course Platform
const firebaseConfig = {
    apiKey: "AIzaSyDsq6wrUxjh860v61D20BdiRvvs73lRyP4",
    authDomain: "automation-course-dc070.firebaseapp.com",
    projectId: "automation-course-dc070",
    storageBucket: "automation-course-dc070.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other modules
window.firebaseAuth = auth;
window.firebaseDb = db;
