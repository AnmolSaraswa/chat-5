//YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDggD5nWBQ9HSM8bKetSeYnkTBpJz8zmqE",
  authDomain: "chat-app-5b943.firebaseapp.com",
  databaseURL: "https://chat-app-5b943-default-rtdb.firebaseio.com",
  projectId: "chat-app-5b943",
  storageBucket: "chat-app-5b943.appspot.com",
  messagingSenderId: "996797610345",
  appId: "1:996797610345:web:4eb07c2822df7f06cba5f8",
  measurementId: "G-YFV8BY8ELN"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });
  document.getElementById("msg").value = "";
}

function getData() {
        firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name=message_data["name"];
        message=message_data["message"];
        like=message_data["like"];
        name_with_tag="<h4>"+name+"</h4>";
        message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
        like_button="<button class='btn btn-warning'id="+ firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>Likes:"+like+"</button";
        row = name_with_tag + message_with_tag+like_button;
        document.getElementById("output").innerHTML=row;
 } });});}


getData();

function updateLike(message_id)
{
      console.log("clicked on the like button-"+message_id);
      button_id=message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
      });
}

function logout()
{
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");
 window.location = "index.html";
}