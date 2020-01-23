importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');

// TODO: move sender_id to env var
firebase.initializeApp({
    messagingSenderId: '461799212634'
});

const messaging = firebase.messaging();
