// Firebase Ranking System
// Using Firebase v9+ Modular SDK via CDN

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: User must replace this with their own Firebase Config
// Get this from Firebase Console -> Project Settings -> General -> Your apps -> SDK setup and configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOS35SxDv8ge69zdMo2co-Jz3E7Mm-TAw",
    authDomain: "typingchemistry.firebaseapp.com",
    projectId: "typingchemistry",
    storageBucket: "typingchemistry.firebasestorage.app",
    messagingSenderId: "571958943781",
    appId: "1:571958943781:web:4a7c7c78eefe185c371fcc",
    measurementId: "G-G6YSBHYX4N"
};

let db = null;
let isInitialized = false;

export function initFirebase() {
    if (firebaseConfig.apiKey === "YOUR_API_KEY") {
        console.warn("Firebase config not set! Ranking disabled.");
        return false;
    }
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        isInitialized = true;
        console.log("Firebase initialized successfully.");
        return true;
    } catch (e) {
        console.error("Firebase init failed:", e);
        return false;
    }
}

// Save Score (Name, Score, Timestamp)
// Save Score (Name, Score, MaxCombo, Time, Mode)
export async function saveScore(name, score, maxCombo, time, mode = 'terms') {
    if (!isInitialized) return;
    const collectionName = mode === 'choice' ? 'ranking_choice' : 'ranking_terms';
    try {
        await addDoc(collection(db, collectionName), {
            name: name,
            score: score,
            maxCombo: maxCombo,
            time: time,
            timestamp: new Date()
        });
        console.log(`Score saved to ${collectionName}!`);
    } catch (e) {
        console.error("Error saving score:", e);
    }
}

// Get Top 3 Scores
export async function getTopScores(limitCount = 3, mode = 'terms') {
    if (!isInitialized) return [];
    const collectionName = mode === 'choice' ? 'ranking_choice' : 'ranking_terms';
    try {
        const q = query(collection(db, collectionName), orderBy("score", "desc"), limit(limitCount));
        const querySnapshot = await getDocs(q);
        const scores = [];
        querySnapshot.forEach((doc) => {
            scores.push(doc.data());
        });
        return scores;
    } catch (e) {
        console.error("Error fetching scores:", e);
        return [];
    }
}

// Expose to global scope for script.js to access
window.Ranking = {
    initFirebase,
    saveScore,
    getTopScores
};
