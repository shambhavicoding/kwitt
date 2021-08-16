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
  user_name=localStorage.removeItem("user_name");
  room_name=localStorage.removeItem("room_name");
  function send(){
      message=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0,
      });
      document.getElementById("message").value="";
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;

    console.log(firebase_meassage_id);
    console.log(message_data);
    name=message_data["name"];
    message=message_data["message"];
    like=message_data["like"];
    name_with_tag="<h4>"+name+"<img src='blue tick.jpg' class='user_tick'></h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4";
    like_button="<button class'btn btn-primary' id="+firebase_meassage_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
    row=name_with_tag+message_with_tag+like_button+span_with_tag;
    document.getElementById("output").innerHTML+=row;
} });  }); }
getData();
function updateLike(message_data){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    update_likes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_data).update{(
        like:update_likes
    )}; 
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter_index.html");
}