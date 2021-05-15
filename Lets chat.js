function adduser() {
  username=document.getElementById("user_name").value;
localStorage.setItem("username",username);
window.location="Lets chat_room.html";
}