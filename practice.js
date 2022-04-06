//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDbAgkXo3MVEgrIzXOLfiIsD7bq0RpFpCI",
    authDomain: "kwikker-d19ce.firebaseapp.com",
    databaseURL: "https://kwikker-d19ce-default-rtdb.firebaseio.com",
    projectId: "kwikker-d19ce",
    storageBucket: "kwikker-d19ce.appspot.com",
    messagingSenderId: "756923099657",
    appId: "1:756923099657:web:b154dc76bdc279991ee6d8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function add(){
    un=document.getElementById("user_name").value;
    firebase.database().ref("/").child(un).update({
        purpose:"add player"
    })
}