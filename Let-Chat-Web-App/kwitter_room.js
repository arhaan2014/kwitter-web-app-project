
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6HYdDGlo82ocRCALf6fNencInfWWfT98",
    authDomain: "kwitterproject-e6978.firebaseapp.com",
    projectId: "kwitterproject-e6978",
    storageBucket: "kwitterproject-e6978.appspot.com",
    messagingSenderId: "685448317862",
    appId: "1:685448317862:web:e703689804ef145c899d67"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    
  {
    "hosting": {
      "site": "kwitterwebchat",
  
      "public": "public",
      ...
    }
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
