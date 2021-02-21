function nextpage(){
    var user = document.getElementById("user_name").value;
    localStorage.setItem("userName", user);
    window.location = "kwitter_room.html";
}