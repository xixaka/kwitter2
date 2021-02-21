 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCj-MlH2qeM-mnzxsz96cu_nhqrHAGP4u8",
  authDomain: "test-87e91.firebaseapp.com",
  databaseURL: "https://test-87e91-default-rtdb.firebaseio.com",
  projectId: "test-87e91",
  storageBucket: "test-87e91.appspot.com",
  messagingSenderId: "303070286048",
  appId: "1:303070286048:web:a7316cfdc59b75f55bc085"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var mydb = firebase.database();
var room = "";


function addRoom(){
room = document.getElementById("add_room").value;
mydb.ref("" + room).update({
  "purpose":"adding user"
});
localStorage.setItem("room",room);
window.location = "kwitter_user_room.html";
}


function getdata(){
  mydb.ref().on('value',function(data){
    // console.log(data.val());
    var row =  "";
    for(attribute in data.val()){
    // console.log( attribute )
    row += `
    <div id="${attribute}" onclick="openroom(${attribute})">${attribute}</div> <hr>
    `
    document.getElementById("trendingrooms").innerHTML = row;
  }
  });
}


function openroom(r){
  room = r;
  localStorage.setItem("room",room);
  window.location = "kwitter_user_room.html";
}


getdata();