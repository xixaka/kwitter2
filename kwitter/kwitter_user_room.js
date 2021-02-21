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
 var room = localStorage.getItem("room");
 var user = localStorage.getItem("userName");
 var message = "";
 console.log(room);
function change(){ 
    document.getElementById("room_name").textContent = room;
}
function send(){
  message = document.getElementById("message").value;
  mydb.ref("/"+room).push({
     "message":message,
     "likes":0 ,
     "user":user
  });
  // document.getElementById.("room_message").innerHTML = `
  // `
}

function getdata(){
  mydb.ref("/"+room).on('value',function(data){
   console.log(data.val());
    var row =  "";
    for(attribute in data.val()){
    console.log(attribute);
    if(attribute != "purpose"){
      row += `
     <div id="${attribute}">
     <label> ${data.val()[attribute]["user"]} </label> <img src="tick.png" class="tick">
     <br>
     <h5 class="text-muted"> ${data.val()[attribute]["message"]} </h5>
     <br>
     <button onclick="like(${attribute})" class="btn btn-warning"> Like <span class="glyphicon glyphicon-thumbs-up"> </span> : <span> ${data.val()[attribute]["likes"]} </span> </button>
     </div> <hr>
     `
     document.getElementById("room_message").innerHTML = row;
    }
    
   }
   });
}
getdata();
var like_count = "";
function like(key){
  mydb.ref("/"+room+"/"+attribute);
  like_count = like_count + 1;
  console.log(like_count);
  mydb.ref("/"+room).push({
    "message":message,
    "likes":like_count,
    "user":user
  });
}