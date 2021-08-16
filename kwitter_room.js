// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5xepbCzcLjDxwAojWyij31gWKgfxZVAs",
    authDomain: "project-94-ebd6c.firebaseapp.com",
    projectId: "project-94-ebd6c",
    storageBucket: "project-94-ebd6c.appspot.com",
    messagingSenderId: "135948924575",
    appId: "1:135948924575:web:7282cd7619d07422b814aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.setItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
      localStorage.setItem("room_name".room_name);
      window.location="kwitter_room.html";
  }
  function getData(){firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("room_name-"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code

  });});}
  getData();
  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
  } 