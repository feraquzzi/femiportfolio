// const firebaseConfig = {
//   apiKey: "AIzaSyDC_YyAvQ7grQamo87MRrvyRG26obp9lM0",
//   authDomain: "femiportfolio-53490.firebaseapp.com",
//   projectId: "femiportfolio-53490",
//   storageBucket: "femiportfolio-53490.firebasestorage.app",
//   messagingSenderId: "872621335670",
//   appId: "1:872621335670:web:c2709ccc13ec0a0bc46b57",
//   measurementId: "G-44BP04YGG4"
// };

// // ✅ Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// // ✅ Handle form submission
// const form = document.getElementById('contactForm');
// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Get values
//     const name = document.getElementById('cName').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const subject = document.getElementById('subject').value;

//     // Save to Firebase
//     db.ref('contacts').push({
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//     timestamp: new Date().toISOString()
//     }).then(() => {
//     document.getElementById('status').textContent = "Message sent!";
//     form.reset();
//     }).catch((error) => {
//     document.getElementById('status').textContent = "Error: " + error.message;
//     });
// });


//Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

//Your Firebase config (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDC_YyAvQ7grQamo87MRrvyRG26obp9lM0",
    authDomain: "femiportfolio-53490.firebaseapp.com",
    projectId: "femiportfolio-53490",
    storageBucket: "femiportfolio-53490.firebasestorage.app",
    messagingSenderId: "872621335670",
    appId: "1:872621335670:web:c2709ccc13ec0a0bc46b57",
    measurementId: "G-44BP04YGG4"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ✅ Handle form submission
const form = document.getElementById('contactForm');
const status = document.getElementById('status');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('cName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
    await push(ref(database, 'contacts'), {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
    });

    status.textContent = "Message sent! You will hear from me soon!";
    form.reset();

    setTimeout(() => {
        status.textContent = "";
    }, 5000);

    } catch (error) {
        status.textContent = "Error: " + error.message;;
    }

    setTimeout(() => {
        status.textContent = "";
    }, 5000);
});