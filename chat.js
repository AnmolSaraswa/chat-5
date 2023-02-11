
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
    ({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}


