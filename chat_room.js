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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
  
  
  function addRoom(){
    v1=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(v1).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html";
  }
  
  
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
      console.log("Room Name - "+Room_names); 
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });
    });
  
  }
  
  getData();
  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }
  function logout()
 {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}
  