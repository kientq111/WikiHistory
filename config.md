    <script src="https://www.gstatic.com/firebasejs/9.0.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.1/firebase-auth-compat.js"></script>
    <script>
          const firebaseConfig = {
    apiKey: "AIzaSyB-q_tQfy62e46AE6wHg0jEg9HcZA3OhMQ",
    authDomain: "historydb-team1.firebaseapp.com",
    projectId: "historydb-team1",
    storageBucket: "historydb-team1.appspot.com",
    messagingSenderId: "456407580200",
    appId: "1:456407580200:web:c475537af2b40742203f1d",
    measurementId: "G-P7CQFHL86B"
  };
        
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        const db = firebaseApp.firestore();
        const auth = firebaseApp.auth();
    </script>