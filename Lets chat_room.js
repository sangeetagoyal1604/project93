// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDSyks4eyhnsGuhzC-FOMik3pTItiYbNF4",
      authDomain: "social-website-c682e.firebaseapp.com",
      databaseURL: "https://social-website-c682e-default-rtdb.firebaseio.com",
      projectId: "social-website-c682e",
      storageBucket: "social-website-c682e.appspot.com",
      messagingSenderId: "495412693933",
      appId: "1:495412693933:web:579527057a62b81669af24"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
